# Number input

> A number input with visible increment and decrement controls, for small integer values.

## Example

```html
<div class="govbb-form-group">
  <label class="govbb-label" for="quantity">Quantity</label>
  <div class="govbb-number-input-wrapper" role="group">
    <input
      class="govbb-number-input"
      id="quantity"
      name="quantity"
      type="number"
      value="1"
      min="1"
      max="10"
    />
    <div class="govbb-number-input__steppers">
      <button
        class="govbb-number-input__step govbb-number-input__step--up"
        type="button"
        aria-label="Increase"
      ></button>
      <span class="govbb-number-input__divider" aria-hidden="true"></span>
      <button
        class="govbb-number-input__step govbb-number-input__step--down"
        type="button"
        aria-label="Decrease"
      ></button>
    </div>
  </div>
</div>
```

## Guidance

- Use for small ranges where tapping up/down is quicker than typing — quantities, number of people, copies.
- For long numbers (IDs, phone, year), use a plain [input](../input/README.md) with `inputmode="numeric"`.
- Always set `min` and `max` when a range is known, and wire the stepper buttons to enforce them.
