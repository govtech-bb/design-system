# Official banner

> A thin bar at the top of every page that confirms the site is a real government service.

## Example

```html
<div class="govbb-official-banner">
  <div class="govbb-official-banner__inner">
    <div class="govbb-official-banner__crest">
      <img class="govbb-official-banner__icon" src="/assets/coat-of-arms.svg" alt="" />
    </div>
    <div class="govbb-official-banner__text">
      <span>Official government website</span>
      <a class="govbb-official-banner__link" href="/identify">Learn more</a>
    </div>
  </div>
</div>
```

## Guidance

- Sits above the [header](../header/README.md) and appears on every page of a service.
- Keep the wording consistent as “Official Government Website” across all services — this supports recognition rather than marketing.
- The crest image is decorative here (real title is in the text) — use `alt=""`.
