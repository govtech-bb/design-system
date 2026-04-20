# Error summary

> An error summary lists every problem on a page and links straight to the field that caused it.

## Example

```html
<div class="govbb-error-summary" role="alert" aria-labelledby="error-summary-title">
  <h2 id="error-summary-title" class="govbb-error-summary__title">There is a problem</h2>
  <ul class="govbb-error-summary__list">
    <li>
      <a class="govbb-error-summary__link" href="#email">Enter a valid email address</a>
    </li>
    <li>
      <a class="govbb-error-summary__link" href="#parish">Select a parish</a>
    </li>
  </ul>
</div>
```

## Guidance

- Render at the top of the page after a failed submission. Move keyboard focus to it so users land on the summary straight away.
- Each link should jump to the field that failed — use the input's `id` as the anchor.
- Use the same wording in the summary link and the field-level [error message](../error-message/README.md), so users are not left guessing which error is which.
- Only show a summary when there is more than one field to fix. A single error can live next to the input.
