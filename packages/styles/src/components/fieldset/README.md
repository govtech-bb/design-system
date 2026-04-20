# Fieldset

> A fieldset wraps a set of controls that answer the same question. The legend is the question.

## Example

```html
<fieldset class="govbb-fieldset">
  <legend class="govbb-fieldset__legend">How would you like to be contacted?</legend>
  <p class="govbb-hint">Select all that apply</p>
  <div class="govbb-checkbox-item">
    <input class="govbb-checkbox" id="contact-email" type="checkbox" name="contact" value="email" />
    <label class="govbb-checkbox-item__label" for="contact-email">Email</label>
  </div>
  <div class="govbb-checkbox-item">
    <input class="govbb-checkbox" id="contact-phone" type="checkbox" name="contact" value="phone" />
    <label class="govbb-checkbox-item__label" for="contact-phone">Phone</label>
  </div>
</fieldset>
```

## Guidance

- Use a fieldset for groups of [radios](../radio/README.md), [checkboxes](../checkbox/README.md), or related inputs (like day/month/year in a [date input](../date-input/README.md)).
- The legend replaces a label for the group — do not also add a heading that repeats it.
- Do not wrap a single input in a fieldset. Use a [label](../label/README.md) instead.
