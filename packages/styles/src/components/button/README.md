# Button

> Buttons trigger actions. Labels should clearly describe the action.

## Example

```html
<button class="govbb-btn">Save and continue</button>
```

## Variants

- Primary (`.govbb-btn`) — the main action; one per section.
- Secondary (`.govbb-btn--secondary`) — supporting actions.
- Destructive (`.govbb-btn--destructive`) — dangerous or irreversible actions.
- Tertiary (`.govbb-btn--tertiary`) — alternative actions.
- Link (`.govbb-btn--link`) — actions that should read as links.
- Destructive link (`.govbb-btn--destructive-link`) — destructive actions styled as links.

```html
<button class="govbb-btn">Primary</button>
<button class="govbb-btn--secondary">Secondary</button>
<button class="govbb-btn--destructive">Delete</button>
<button class="govbb-btn--tertiary">Tertiary</button>
<button class="govbb-btn--link">Link</button>
<button class="govbb-btn--destructive-link">Remove</button>
```

Avoid more than one primary button in the same context — it dilutes which action is recommended.

### Button group

Groups related buttons with consistent spacing. Order left to right: primary → secondary → tertiary → link.

```html
<div class="govbb-btn-group">
  <button class="govbb-btn">Save and continue</button>
  <button class="govbb-btn--secondary">Save as draft</button>
</div>
```

### Disabled

```html
<button class="govbb-btn" disabled>Save and continue</button>
```

## Guidance

### Labels

Write labels as a short, verb-led phrase. Make the outcome obvious from the label alone — "Save and continue", not "OK".

### Destructive actions

Use destructive buttons only for permanent, irreversible actions. Pair them with a confirmation step so users do not delete things by accident.

### Avoid disabled buttons

Disabled buttons do not explain why an action is unavailable, are harder to see, and are inaccessible to some users. Prefer keeping the button enabled and validating on submit so users can read the real reason in an [error message](../error-message/README.md).

If a button must be disabled, put nearby text saying why and what the user needs to do to enable it.

### Button vs link

Use a button for actions that change state (submit a form, delete a record). Use a link for navigation. If a link needs to look like a button, style the `<a>` directly — do not reach for a `<button>`.
