import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const args = process.argv.slice(2);
const componentName = args[0];

if (!componentName) {
  console.error('❌ Error: Please provide a component name');
  console.log('Usage: npm run create-component <ComponentName>');
  process.exit(1);
}

// Validate component name (PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Error: Component name must be in PascalCase (e.g., Button, TextField)');
  process.exit(1);
}

const componentDir = join(__dirname, '..', 'packages', 'react', 'src', 'components', componentName);

// Component template
const componentTemplate = `import React from "react";
import "./${componentName}.css";

export interface ${componentName}Props {
  children?: React.ReactNode;
}

const ${componentName} = ({
  children,
}: ${componentName}Props) => {
  return (
    <div className="${componentName.toLowerCase()}">
      {children}
    </div>
  );
};

${componentName}.displayName = "${componentName}";

export { ${componentName} };
`;

// Story template
const storyTemplate = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${componentName} } from "./${componentName}.js";

const meta: Meta<typeof ${componentName}> = {
  title: "Components/${componentName}",
  component: ${componentName},
  tags: ["autodocs"],
  args: {
    children: "${componentName} content",
  },
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
};
`;

// Index template
const indexTemplate = `export * from "./${componentName}";
`;

// CSS template
const cssTemplate = `.${componentName.toLowerCase()} {
  /* Add your styles here */
}
`;

// Test template
const testTemplate = `import { cleanup, render } from "@testing-library/react";
import { axe } from "vitest-axe";

import type { ${componentName}Props } from "./${componentName}";
import { ${componentName} } from "./${componentName}";

const ${componentName}Test = (props: ${componentName}Props) => {
  return <${componentName} {...props}>${componentName} content</${componentName}>;
};

describe("${componentName}", () => {
  afterEach(cleanup);

  it("should have no a11y violations", async () => {
    const rendered = render(<${componentName}Test />);
    const result = await axe(rendered.container);

    expect(result).toHaveNoViolations();
  });

  it("should render children correctly", () => {
    const rendered = render(<${componentName}Test />);
    expect(rendered.getByText("${componentName} content")).toBeInTheDocument();
  });
});
`;

async function createComponent() {
  try {
    // Create component directory
    await mkdir(componentDir, { recursive: true });
    console.log(`✅ Created directory: ${componentDir}`);

    // Create component file
    await writeFile(join(componentDir, `${componentName}.tsx`), componentTemplate);
    console.log(`✅ Created ${componentName}.tsx`);

    // Create story file
    await writeFile(join(componentDir, `${componentName}.stories.tsx`), storyTemplate);
    console.log(`✅ Created ${componentName}.stories.tsx`);

    // Create test file
    await writeFile(join(componentDir, `${componentName}.test.tsx`), testTemplate);
    console.log(`✅ Created ${componentName}.test.tsx`);

    // Create index file
    await writeFile(join(componentDir, 'index.ts'), indexTemplate);
    console.log(`✅ Created index.ts`);

    // Create CSS file
    await writeFile(join(componentDir, `${componentName}.css`), cssTemplate);
    console.log(`✅ Created ${componentName}.css`);

    console.log(`\n🎉 Component "${componentName}" created successfully!`);
    console.log(`📁 Location: packages/react/src/components/${componentName}`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Implement your component logic in ${componentName}.tsx`);
    console.log(`   2. Add styles to ${componentName}.css`);
    console.log(`   3. Update stories in ${componentName}.stories.tsx`);
    console.log(`   4. Write comprehensive tests in ${componentName}.test.tsx`);
    console.log(`   5. Run 'npm run storybook' to view your component`);
  } catch (error) {
    console.error('❌ Error creating component:', error.message);
    process.exit(1);
  }
}

createComponent();
