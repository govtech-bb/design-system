# Checkbox

> Checkboxes let users select any number of options from a list, including none.

## Example

```html
<fieldset class="govbb-fieldset">
  <legend class="govbb-fieldset__legend">How would you like to be contacted?</legend>
  <div class="govbb-hint">Select all that apply</div>
  <div class="govbb-checkboxes">
    <div class="govbb-checkbox-item">
      <input
        class="govbb-checkbox"
        id="contact-email"
        type="checkbox"
        name="contact"
        value="email"
      />
      <label class="govbb-checkbox-item__label" for="contact-email">Email</label>
    </div>
    <div class="govbb-checkbox-item">
      <input
        class="govbb-checkbox"
        id="contact-phone"
        type="checkbox"
        name="contact"
        value="phone"
      />
      <label class="govbb-checkbox-item__label" for="contact-phone">Phone</label>
    </div>
    <div class="govbb-checkbox-item">
      <input class="govbb-checkbox" id="contact-post" type="checkbox" name="contact" value="post" />
      <label class="govbb-checkbox-item__label" for="contact-post">Post</label>
    </div>
  </div>
</fieldset>
```

### Single checkbox

Use a standalone checkbox for a single opt-in, such as accepting terms.

```html
<div class="govbb-checkbox-item">
  <input class="govbb-checkbox" id="terms" type="checkbox" name="terms" value="yes" />
  <label class="govbb-checkbox-item__label" for="terms">I agree to the terms of service</label>
</div>
```

### Disabled

```html
<div class="govbb-checkbox-item">
  <input class="govbb-checkbox" id="sms" type="checkbox" name="contact" value="sms" disabled />
  <label class="govbb-checkbox-item__label" for="sms">SMS (unavailable)</label>
</div>
```

### With error

Mark the group as invalid on the inputs and render the error via the form group's error message.

```html
<div class="govbb-checkbox-item">
  <input
    class="govbb-checkbox"
    id="contact-email"
    type="checkbox"
    name="contact"
    value="email"
    aria-invalid="true"
    aria-describedby="contact-error"
  />
  <label class="govbb-checkbox-item__label" for="contact-email">Email</label>
</div>
```

## When to use

Use checkboxes when users can:

- select more than one option from a list
- toggle a single option on or off (e.g. "I agree to the terms")

Each checkbox operates independently of the others.

## When not to use

Use [radio buttons](../radio/README.md) instead when users must pick exactly one option from a list of mutually exclusive choices.

## Guidance

### Make the number of selectable options clear

Do not assume users will infer from the visual difference between checkboxes and radios that they can select more than one. Add a hint where it helps, for example "Select all that apply".

### Do not pre-select options

Pre-selected checkboxes make it more likely that users will:

- not notice they have skipped a question
- submit an answer they did not intend

Let users make an active choice.

### Order options by relevance

List options with the most common or recommended choices first. Fall back to alphabetical order only when no meaningful priority exists.

### Group related checkboxes

Wrap related checkboxes in a `<fieldset>` with a `<legend>` that frames the question, for example "How would you like to be contacted?". This associates the options with their question for assistive technology.
