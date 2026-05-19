# Form heading (pattern)

Composition of an eyebrow + `<h1>` + lead paragraph used at the top of a form page.

This is a **pattern**, not a shipped component — there is no CSS in `dist.css` for it. Copy the markup and the small style block into your app, or promote it to a real component (`components/form-heading/`) if it gets reused.

## Markup

```html
<div class="form-heading">
  <p class="form-heading__eyebrow govbb-text-body">Service Title</p>
  <h1 class="govbb-text-h1 form-heading__title">H1 subject</h1>
  <p class="form-heading__description">Description</p>
</div>
```

## Local styles

```css
.form-heading {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.form-heading__eyebrow {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) 0 var(--spacing-xs) var(--spacing-s);
  border-left: var(--spacing-xxs) solid var(--color-blue-40);
  color: var(--color-text-muted);
  margin: 0;
}
.form-heading__title { margin: 0; }
.form-heading__description { margin: 0; }
```

## Why it lives in `blocks/`

`src/blocks/` holds app-specific compositions that aren't part of the shipped CSS package. Files here are not imported into `index.css` or `build.css`. Use them as references when assembling pages, not as runtime dependencies.
