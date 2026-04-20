#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir, rm, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const componentsDir = join(root, 'src/components');
const blocksDir = join(root, 'blocks');
const templatesDir = join(root, 'templates');
const indexSource = join(root, 'llms.txt.md');
const outDir = join(root, 'llm');
const outComponents = join(outDir, 'components');
const outBlocks = join(outDir, 'blocks');
const outTemplates = join(outDir, 'templates');

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function listDirs(dir) {
  if (!(await exists(dir))) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

function rewriteComponentLinks(markdown) {
  return markdown.replace(/\]\(\.\.\/([^/]+)\/README\.md\)/g, '](./$1.md)');
}

function rewriteIndexLinks(markdown) {
  return markdown
    .replace(/\]\(\.\/components\/([^/]+)\/README\.md\)/g, '](./components/$1.md)')
    .replace(/\]\(\.\.\/blocks\/([^/]+)\/[^)]+\.html\)/g, '](./blocks/$1.md)')
    .replace(/\]\(\.\.\/templates\/([^/]+)\.html\)/g, '](./templates/$1.md)');
}

async function buildComponents() {
  await mkdir(outComponents, { recursive: true });
  const names = await listDirs(componentsDir);
  let count = 0;
  for (const name of names) {
    const readme = join(componentsDir, name, 'README.md');
    if (!(await exists(readme))) continue;
    const raw = await readFile(readme, 'utf8');
    await writeFile(join(outComponents, `${name}.md`), rewriteComponentLinks(raw));
    count += 1;
  }
  return count;
}

function title(name) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function buildBlocks() {
  await mkdir(outBlocks, { recursive: true });
  const names = await listDirs(blocksDir);
  let count = 0;
  for (const name of names) {
    const htmlPath = join(blocksDir, name, `${name}.html`);
    const cssPath = join(blocksDir, name, `${name}.css`);
    if (!(await exists(htmlPath))) continue;
    const html = await readFile(htmlPath, 'utf8');
    const css = (await exists(cssPath)) ? await readFile(cssPath, 'utf8') : null;
    const body = [
      `# ${title(name)}`,
      '',
      `Blocks are not part of the shipped stylesheet. To use the \`${name}\` block, copy both the markup and the CSS below into your project.`,
      '',
      '## Markup',
      '',
      `Source: \`blocks/${name}/${name}.html\``,
      '',
      '```html',
      html.trimEnd(),
      '```',
      '',
    ];
    if (css) {
      body.push(
        '## Styles',
        '',
        `Source: \`blocks/${name}/${name}.css\``,
        '',
        '```css',
        css.trimEnd(),
        '```',
        '',
      );
    }
    await writeFile(join(outBlocks, `${name}.md`), body.join('\n'));
    count += 1;
  }
  return count;
}

async function buildTemplates() {
  await mkdir(outTemplates, { recursive: true });
  if (!(await exists(templatesDir))) return 0;
  const entries = await readdir(templatesDir, { withFileTypes: true });
  const names = entries
    .filter((e) => e.isFile() && e.name.endsWith('.html'))
    .map((e) => e.name.replace(/\.html$/, ''))
    .sort();
  let count = 0;
  for (const name of names) {
    const htmlPath = join(templatesDir, `${name}.html`);
    const html = await readFile(htmlPath, 'utf8');
    const body = [
      `# ${title(name)}`,
      '',
      `Full-page template. Source: \`templates/${name}.html\`. Copy and adapt for a new page; depends on the shipped stylesheet only.`,
      '',
      '```html',
      html.trimEnd(),
      '```',
      '',
    ].join('\n');
    await writeFile(join(outTemplates, `${name}.md`), body);
    count += 1;
  }
  return count;
}

async function buildIndex() {
  if (!(await exists(indexSource))) {
    throw new Error(`Missing source index at ${indexSource}`);
  }
  const raw = await readFile(indexSource, 'utf8');
  const rewritten = rewriteIndexLinks(raw);
  await writeFile(join(outDir, 'llms.txt.md'), rewritten);
  await writeFile(join(outDir, 'llms.txt'), rewritten);
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, '.nojekyll'), '');

  const components = await buildComponents();
  const blocks = await buildBlocks();
  const templates = await buildTemplates();
  await buildIndex();

  const parts = [`${components} component${components === 1 ? '' : 's'}`];
  if (blocks) parts.push(`${blocks} block${blocks === 1 ? '' : 's'}`);
  if (templates) parts.push(`${templates} template${templates === 1 ? '' : 's'}`);
  console.log(`Built llm/ with ${parts.join(', ')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
