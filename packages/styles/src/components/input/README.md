# Input

> A single-line text input for short, free-form answers.

## Example

```html
<div class="govbb-form-group">
  <label class="govbb-label" for="full-name">Full name</label>
  <div class="govbb-input-wrapper">
    <input class="govbb-input" id="full-name" name="full-name" type="text" />
  </div>
</div>
```

### With error

```html
<div class="govbb-form-group">
  <label class="govbb-label" for="email">Email address</label>
  <p class="govbb-error-message" id="email-error" role="alert">Enter a valid email address</p>
  <div class="govbb-input-wrapper">
    <input
      class="govbb-input"
      id="email"
      name="email"
      type="email"
      aria-invalid="true"
      aria-describedby="email-error"
    />
  </div>
</div>
```

## Guidance

- Pick the right `type` (`email`, `tel`, `url`, `password`) so mobile keyboards and validation behave correctly.
- Use a [textarea](../textarea/README.md) for anything longer than a sentence.
- Use a [number input](../number-input/README.md) when you need step controls, not `type="number"` on a plain input.
- Do not use placeholder text as a label — placeholders disappear on focus.
