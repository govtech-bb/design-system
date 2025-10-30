# @govtechbb/design

Design tokens and Tailwind CSS utilities for the GovTechBB Design System.

## Installation

```bash
npm install @govtech-bb/design
```

## Usage

Import the design tokens in your Tailwind CSS file:

```css
@import 'tailwindcss';

/* Import the design tokens */
@import '@govtech-bb/design';

/* You need to add the path to the react components */
@source "../../node_modules/@govtech-bb/react/dist/**/*.js";
```

## Design Tokens

### Colors

#### Color Palette

Each color has four shades (dark, 100, 40, 10):

**Blue:**

- `blue-dark` - #00164A
- `blue-100` - #00267F (Primary)
- `blue-40` - #99A8CC
- `blue-10` - #E5E9F2

**Yellow:**

- `yellow-dark` - #E8A833
- `yellow-100` - #FFC726
- `yellow-40` - #FFE9A8
- `yellow-10` - #FFF9E9

**Green:**

- `green-dark` - #00654A
- `green-100` - #1FBF84
- `green-40` - #A5E5CE
- `green-10` - #E9F9F3

**Red:**

- `red-dark` - #A42C2C
- `red-100` - #FF6B6B
- `red-40` - #FFC4C4
- `red-10` - #FFF0F0

**Purple:**

- `purple-dark` - #4A235A
- `purple-100` - #A962C7
- `purple-40` - #DDC0E9
- `purple-10` - #F6EFF9

**Pink:**

- `pink-dark` - #AD1157
- `pink-100` - #FF94D9
- `pink-40` - #FFD4F0
- `pink-10` - #FFF4FB

**Teal:**

- `teal-dark` - #0E5F64
- `teal-100` - #30C0C8
- `teal-40` - #ACE6E9
- `teal-10` - #EAF9F9

#### Neutral Colors

**Neutral:**

- `neutral-black` - #000000
- `neutral-midgrey` - #595959
- `neutral-grey` - #E0E4E9
- `neutral-white` - #FFFFFF

#### Deprecated Colors

**Deprecated Yellow:**

- `deprecated-yellow-dark` - #E8A833
- `deprecated-yellow-bright` - #FFC726
- `deprecated-yellow-light` - #FFEAA7

**Deprecated Blue:**

- `deprecated-blue-dark` - #00267F
- `deprecated-blue-bright` - #409CF8
- `deprecated-blue-light` - #B3D9FF

**Deprecated Red:**

- `deprecated-red-bright` - #FF6B6B
- `deprecated-red-light` - #FFD6D6

**Deprecated Pink:**

- `deprecated-pink-bright` - #FF94D9
- `deprecated-pink-light` - #FFD4F0

**Deprecated Purple:**

- `deprecated-purple-bright` - #A962C7
- `deprecated-purple-light` - #E1BEE7

**Deprecated Teal:**

- `deprecated-teal-bright` - #30C0C8
- `deprecated-teal-light` - #DEF5F6

**Deprecated Green:**

- `deprecated-green-bright` - #1FBF84
- `deprecated-green-light` - #A8E6CF

**Other Deprecated:**

- `brand-teal-darker` - #0A4549
- `brand-teal-hover` - #083A3D
- `brand-teal-light` - #1A777D
- `brand-neutral-gray-light` - #E0E4E9
- `brand-neutral-gray` - #D7DCE2
- `brand-neutral-gray-dark` - #B9C0C6

Example:

```tsx
<div className="bg-blue-100 text-neutral-white">Hello World</div>
```

### Typography

#### Typography Utilities

Use these utility classes for consistent typography:

```tsx
<h1 className="text-display">Display Text</h1>
<h1 className="text-h1">Heading 1</h1>
<h2 className="text-h2">Heading 2</h2>
<h3 className="text-h3">Heading 3</h3>
<h4 className="text-h4">Heading 4</h4>
<p className="text-body-lg">Large Body Text</p>
<p className="text-body">Body Text</p>
```

#### Typography Tokens

Or use the tokens directly:

**Font Sizes:**

- `font-size-display` - 5rem (80px)
- `font-size-h1` - 3.5rem (56px)
- `font-size-h2` - 2.5rem (40px)
- `font-size-h3` - 1.5rem (24px)
- `font-size-h4` - 1.25rem (20px)
- `font-size-body-lg` - 2rem (32px)
- `font-size-body` - 1.25rem (20px)

**Line Heights:**

- `line-height-display` - 1
- `line-height-h1` - 1.15
- `line-height-h2` - 1.25
- `line-height-h3` - 1.25
- `line-height-h4` - 1.4
- `line-height-body-lg` - 1.5
- `line-height-body` - 1.7

**Font Weights:**

- `font-weight-bold` - 700
- `font-weight-normal` - 400

### Shadows

- `form-hover` - Inset shadow for form element hover states

### Disabled State

**Token:**

- `opacity-disabled` - 0.4 (40% opacity for disabled elements)

**Utility:**

```tsx
<button className="disabled-state" disabled>
  Disabled Button
</button>
```

The `disabled-state` utility automatically applies:

- `cursor: not-allowed`
- `opacity: 0.4`

All form components use this consistent disabled styling.

## Modifying Design Tokens

To add or modify design tokens, edit `packages/design/src/index.css`:

1. Add tokens in the `@theme` block for colors, spacing, shadows, etc.
2. Add custom utilities using `@utility` for reusable component patterns
