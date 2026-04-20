# Label

> Labels name the field they sit above. Every form control needs one.

## Example

```html
<label class="govbb-label" for="full-name">Full name</label>
<div class="govbb-input-wrapper">
  <input class="govbb-input" id="full-name" name="full-name" type="text" />
</div>
```

## Guidance

- Always associate a label with its control using `for` / `id`.
- Write labels as short noun phrases ("Email address"), not questions or instructions.
- Put extra detail in a [hint](../hint/README.md), not the label.
- Only one label per control — use a [fieldset legend](../fieldset/README.md) to name a group.
