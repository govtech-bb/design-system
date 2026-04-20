# Error message

> Error messages tell users what went wrong and how to fix it, next to the field that needs attention.

## Example

```html
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
```

## Guidance

- Place the message between the label (or hint) and the input.
- Set `aria-invalid="true"` on the control and point `aria-describedby` at the message id.
- Be specific about the fix: "Enter a valid email address", not "Invalid input".
- Avoid blame ("You entered..."). State the rule and move on.
- For page-level summaries of all errors, use the [error summary](../error-summary/README.md).
