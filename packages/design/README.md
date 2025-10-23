# @govtechbb/design

Design tokens and Tailwind CSS utilities for the GovTechBB Design System.

## Installation

This package is part of the GovTechBB Design System monorepo and is already available in your workspace.

## Usage

Import the design tokens in your Tailwind CSS file:

```css
@import 'tailwindcss';
@import '@govtechbb/design';
```

## Design Tokens

### Colors

#### Brand Color Palette

Each color has three shades (100, 40, 10) for AAA accessibility compliance:

**Blue:**

- `blue-100` - #00267F (Primary)
- `blue-40` - #99A8CC (Light)
- `blue-10` - #E5E9F2 (Lightest)

**Yellow:**

- `yellow-100` - #FFC726
- `yellow-40` - #FFE9A8
- `yellow-10` - #FFF9E9

**Green:**

- `green-100` - #1FBF84
- `green-40` - #A5E5CE
- `green-10` - #E9F9F3

**Red:**

- `red-100` - #FF6B6B
- `red-40` - #FFC4C4
- `red-10` - #FFF0F0

**Purple:**

- `purple-100` - #A962C7
- `purple-40` - #DDC0E9
- `purple-10` - #F6EFF9

**Pink:**

- `pink-100` - #FF94D9
- `pink-40` - #FFD4F0
- `pink-10` - #FFF4FB

**Teal:**

- `teal-100` - #30C0C8
- `teal-40` - #ACE6E9
- `teal-10` - #EAF9F9

#### Legacy Colors

- `brand-teal-dark` - #0E5F64
- `brand-teal` - #0E5F64
- `brand-teal-light` - #1A777D
- `brand-teal-lighter` - #ACE6E9
- `brand-neutral-white` - #FFFFFF
- `brand-neutral-black` - #000000
- `brand-neutral-gray-light` - #E0E4E9
- `brand-neutral-gray` - #D7DCE2
- `brand-neutral-gray-dark` - #B9C0C6
- `brand-error` - #A42C2C
- `focus-visible` - #ACE6E9

Example:

```tsx
<div className="bg-blue-100 text-brand-neutral-white">Hello World</div>
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
