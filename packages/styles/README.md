# @govtech-bb/styles

CSS-first design system styles for the Government of Barbados Design System.

## Install

```sh
pnpm add @govtech-bb/styles
```

## Use

```html
<link rel="stylesheet" href="/node_modules/@govtech-bb/styles/dist/styles.css" />
```

Or in JS/TS bundlers:

```ts
import "@govtech-bb/styles";
```

Assets (fonts, images):

- Bundler import: `@govtech-bb/styles/assets/<path>` (resolved via the package `exports` map).
- CDN / direct URL (unpkg, raw `node_modules` link): `@govtech-bb/styles/dist/assets/<path>` — `exports` is ignored when files are served by path, so the real `dist/assets/...` path is required.

## Docs

- Component catalog: https://govtech-bb.github.io/design-system/llm/llms.txt
- Live site: https://govtech-bb.github.io/design-system/

## License

MIT
