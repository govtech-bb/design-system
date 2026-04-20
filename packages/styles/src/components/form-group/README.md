# Form group

> A form group is the container that holds one question's label, hint, error, and control together with consistent spacing.

## Example

```html
<div class="govbb-form-group">
  <label class="govbb-label" for="full-name">Full name</label>
  <p class="govbb-hint" id="full-name-hint">As it appears on your ID</p>
  <div class="govbb-input-wrapper">
    <input
      class="govbb-input"
      id="full-name"
      name="full-name"
      type="text"
      aria-describedby="full-name-hint"
    />
  </div>
</div>
```

## Guidance

- One form group per question. Stack groups to build a form — no extra wrappers needed.
- Keep the order predictable: label, then hint, then error, then control.
- A fieldset can stand in for the label when the question has multiple inputs (e.g. a date input).
