# Show/hide

> A disclosure that reveals secondary content on demand. Useful for help text that not every user needs.

## Example

```html
<details class="govbb-show-hide">
  <summary class="govbb-show-hide__summary">Help with this form</summary>
  <div class="govbb-show-hide__content">
    <p>If you cannot find your ID number, check the back of your citizen card.</p>
  </div>
</details>
```

## Guidance

- Use for supporting information the average user can skip — help, examples, extra detail.
- Do not hide content users need to complete the task. If most users need it, show it.
- Write the summary as a descriptive noun phrase ("What is a parish?") rather than a vague "More info".
- Built on `<details>` — keyboard and screen reader behaviour work out of the box.
