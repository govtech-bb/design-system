# Select

> A dropdown for picking one option from a long list.

## Example

```html
<div class="govbb-form-group">
  <label class="govbb-label" for="parish">Parish</label>
  <div class="govbb-select-wrapper">
    <select class="govbb-select" id="parish" name="parish">
      <option value="">Select a parish</option>
      <option value="st-michael">Saint Michael</option>
      <option value="christ-church">Christ Church</option>
      <option value="st-james">Saint James</option>
    </select>
    <span class="govbb-select__chevron" aria-hidden="true">
      <svg viewBox="0 0 12 8"><path d="M6 8 0 0h12z" /></svg>
    </span>
  </div>
</div>
```

## Guidance

- Use a select when there are more than about five options and the list is familiar to users.
- For five or fewer options, [radios](../radio/README.md) are easier to scan.
- Start with a non-selectable placeholder option so users make an active choice.
- Do not use a select for ordered data users can already search for (like countries) without also offering a typeahead.
