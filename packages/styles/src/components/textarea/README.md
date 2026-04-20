# Textarea

> A multi-line input for longer, free-form answers.

## Example

```html
<div class="govbb-form-group">
  <label class="govbb-label" for="message">Message</label>
  <p class="govbb-hint" id="message-hint">Up to 500 characters</p>
  <div class="govbb-input-wrapper">
    <textarea
      class="govbb-textarea"
      id="message"
      name="message"
      rows="5"
      aria-describedby="message-hint"
    ></textarea>
  </div>
</div>
```

## Guidance

- Size the textarea to hint at the expected answer length. `rows="5"` is a reasonable default; go larger for long-form questions.
- Users can resize vertically — keep the parent layout flexible enough to handle that.
- For one-line answers, use an [input](../input/README.md) instead.
