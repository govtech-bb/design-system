# Status banner

> A coloured strip that tells users where a page sits in its lifecycle — alpha, beta, migrated, or disrupted.

## Example

```html
<div class="govbb-status-banner govbb-status-banner--alpha">
  <p>
    This page is in <a class="govbb-link govbb-link--secondary" href="#">Alpha</a>. Your feedback
    will help us improve it.
  </p>
</div>
```

### Variants

```html
<div class="govbb-status-banner govbb-status-banner--beta">…</div>
<div class="govbb-status-banner govbb-status-banner--migrated">…</div>
<div class="govbb-status-banner govbb-status-banner--service">…</div>
```

- `--alpha` — early, unstable service.
- `--beta` — still being tested, but usable.
- `--migrated` — moved from an older site.
- `--service` — operational status or disruption notice.

Add `--rounded` for a softer corner when nested inside content.

## Guidance

- Sits near the top of the page, below the [header](../header/README.md).
- Always include a link giving users somewhere to go for more context or to leave feedback.
- One banner per page. Stacking status banners dilutes the signal.
