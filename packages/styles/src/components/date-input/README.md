# Date input

> Three short fields for day, month, and year — a memorable date like a birthday.

## Example

```html
<div class="govbb-form-group">
  <fieldset class="govbb-fieldset" aria-describedby="dob-hint">
    <legend class="govbb-fieldset__legend">Date of birth</legend>
    <p class="govbb-hint" id="dob-hint">For example, 27 3 1990</p>
    <div class="govbb-date-input">
      <div class="govbb-date-input__part">
        <label class="govbb-date-input__label" for="dob-day">Day</label>
        <div class="govbb-date-input-wrapper">
          <input
            class="govbb-date-input__field"
            id="dob-day"
            name="dob[day]"
            type="text"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govbb-date-input__part">
        <label class="govbb-date-input__label" for="dob-month">Month</label>
        <div class="govbb-date-input-wrapper">
          <input
            class="govbb-date-input__field"
            id="dob-month"
            name="dob[month]"
            type="text"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govbb-date-input__part">
        <label class="govbb-date-input__label" for="dob-year">Year</label>
        <div class="govbb-date-input-wrapper govbb-date-input-wrapper--year">
          <input
            class="govbb-date-input__field"
            id="dob-year"
            name="dob[year]"
            type="text"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## Guidance

- Use for dates users already know — birthdays, expiry dates, event dates they can recall.
- For a date users need to look up (next available appointment, range selection), use a date picker instead.
- Use `inputmode="numeric"` so mobile keyboards show digits. Do not enforce leading zeros — accept "3" and "03".
- Validate the whole date server-side and report problems as a single error, not three.
