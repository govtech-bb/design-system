# Hint

> Hints explain what a field expects before the user types. Use them when the label alone is not enough.

## Example

```html
<label class="govbb-label" for="nin">National ID</label>
<p class="govbb-hint" id="nin-hint">10 digits, no spaces</p>
<div class="govbb-input-wrapper">
  <input
    class="govbb-input"
    id="nin"
    name="nin"
    type="text"
    aria-describedby="nin-hint"
  />
</div>
```

## Guidance

- Connect the hint to its control with `aria-describedby` so screen readers announce it.
- Keep it to one short sentence — examples of valid input beat rules about invalid input.
- Do not use a hint to repeat the label or warn about errors. Errors belong in an [error message](../error-message/README.md).
