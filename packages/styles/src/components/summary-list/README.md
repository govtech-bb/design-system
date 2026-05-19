# Summary list

> Show a list of answers a user has given so they can check and change them before submitting.

Used for the "Check your answers" pattern at the end of a service flow.

## Example

```html
<h1 class="govbb-text-h1">Check your answers</h1>
<p>Review the answers you’ve given carefully.</p>

<section class="govbb-summary-section">
  <h2 class="govbb-summary-section__title">Your name</h2>
  <div class="govbb-summary-section__action">
    <a class="govbb-link" href="/edit/name">Change</a>
  </div>
  <dl class="govbb-summary-list">
    <div class="govbb-summary-list__row">
      <dt class="govbb-summary-list__key">Title</dt>
      <dd class="govbb-summary-list__value">Mr</dd>
    </div>
    <div class="govbb-summary-list__row">
      <dt class="govbb-summary-list__key">First name</dt>
      <dd class="govbb-summary-list__value">John</dd>
    </div>
    <div class="govbb-summary-list__row">
      <dt class="govbb-summary-list__key">Last name</dt>
      <dd class="govbb-summary-list__value">Smith</dd>
    </div>
  </dl>
</section>
```

## Layout

Above 768px the section header places the title on the left and the Change action on the right, with each row laid out as `key` (1/3) + `value` (2/3) side by side.

Below 768px the title, list, and action stack vertically — the Change action sits at the bottom of the section, and each row stacks its key above its value.

Sections are separated by a 4px grey divider. The last section in a group has no divider.

## When to use

End of a form journey, so the user can confirm everything before submitting.

## When not to use

For displaying static reference data — use a plain definition list or table instead.

## Guidance

- Group answers by the page they were entered on. One "Change" link per section sends the user back to that page.
- Keep keys short; values do the talking.
- Make sure the Change link tells assistive tech what it changes, e.g. add visually-hidden context: `Change <span class="govbb-visually-hidden">name</span>`.
