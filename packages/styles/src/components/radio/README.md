# Radio

> Radio buttons let users pick exactly one option from a short list of mutually exclusive choices.

## Example

```html
<fieldset class="govbb-fieldset">
  <legend class="govbb-fieldset__legend">Where do you live?</legend>
  <div class="govbb-radio-item">
    <input class="govbb-radio" id="parish-st-michael" type="radio" name="parish" value="st-michael" />
    <label class="govbb-radio-item__label" for="parish-st-michael">Saint Michael</label>
  </div>
  <div class="govbb-radio-item">
    <input class="govbb-radio" id="parish-christ-church" type="radio" name="parish" value="christ-church" />
    <label class="govbb-radio-item__label" for="parish-christ-church">Christ Church</label>
  </div>
  <div class="govbb-radio-item">
    <input class="govbb-radio" id="parish-st-james" type="radio" name="parish" value="st-james" />
    <label class="govbb-radio-item__label" for="parish-st-james">Saint James</label>
  </div>
</fieldset>
```

### With per-option hint

Add a hint to a single option to clarify its meaning. Use `aria-describedby` so screen readers announce it.

```html
<div class="govbb-radio-item">
  <input
    class="govbb-radio"
    id="contact-email"
    type="radio"
    name="contact"
    value="email"
    aria-describedby="contact-email-hint"
  />
  <label class="govbb-radio-item__label" for="contact-email">Email</label>
  <div class="govbb-radio-item__hint" id="contact-email-hint">
    We'll only use this to send updates about your application.
  </div>
</div>
```

### Conditional reveal

Show follow-up content when a specific option is selected. The conditional block sits as a sibling of its `.govbb-radio-item` and appears only when that radio is checked.

```html
<div class="govbb-radio-item">
  <input class="govbb-radio" id="contact-email" type="radio" name="contact" value="email" />
  <label class="govbb-radio-item__label" for="contact-email">Email</label>
</div>
<div class="govbb-radio-item__conditional">
  <label class="govbb-label" for="email-address">Email address</label>
  <div class="govbb-input-wrapper">
    <input class="govbb-input" id="email-address" name="email" type="email" />
  </div>
</div>
```

## Reach for radios when

- Users must pick exactly one option.
- The list is short enough to show all options at once (roughly five or fewer).

## Reach for something else when

- Users can pick more than one — use [checkboxes](../checkbox/README.md) instead.
- The list is long — a [select](../select/README.md) fits better.

## Tips

### Order by what matters

Put the most common or recommended option first. Fall back to alphabetical order only when no meaningful priority exists.

### Do not pre-select an answer

Let users make an active choice. Pre-selecting skips the decision and produces answers users did not mean to give.

### Always wrap in a fieldset

Use a `<fieldset>` with a `<legend>` that asks the question. Screen readers announce the legend with every option, so users hear what they are answering.
