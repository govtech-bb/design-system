# Declaration (pattern)

End-of-flow page where the applicant confirms their information is correct before submission.

This is a **pattern**, not a shipped component — no CSS for it lives in `dist.css`. Copy the markup and the small style block into your app, or promote to a component if reused.

## Composition

- [Form heading](../form-heading/README.md) (eyebrow + h1) — title is "Declaration"
- Two bolded fact lines: applicant name and date
- One [checkbox](../../components/checkbox/README.md) for consent
- Back + submit button pair

## Markup

```html
<div class="declaration">
  <div class="form-heading">
    <p class="form-heading__eyebrow govbb-text-body">Service Title</p>
    <h1 class="govbb-text-h1 form-heading__title">Declaration</h1>
  </div>

  <div class="declaration__facts">
    <p><strong>Applicant’s name:</strong> Jane Doe</p>
    <p><strong>Date:</strong> 18 May 2026</p>
  </div>

  <div class="govbb-checkbox-item">
    <input class="govbb-checkbox" id="confirm" type="checkbox" />
    <label class="govbb-checkbox-item__label" for="confirm">
      I confirm that my information is correct …
    </label>
  </div>

  <div class="declaration__actions">
    <button class="govbb-btn--secondary" type="button">Back</button>
    <button class="govbb-btn" type="submit">Confirm and continue</button>
  </div>
</div>
```

## Local styles

```css
.declaration {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}
.declaration__facts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.declaration__facts p { margin: 0; }
.declaration__actions {
  display: flex;
  gap: var(--spacing-xs);
}
```

## Guidance

- The fact lines should restate the most identifying information so the user can spot mistakes without going back. Keep them to 2–3 lines.
- The submit button should be a positive primary action (`govbb-btn`). The Back button is secondary.
- The checkbox must be required and unchecked by default — never pre-tick a consent.
