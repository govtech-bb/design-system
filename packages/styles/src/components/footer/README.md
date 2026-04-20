# Footer

> The dark blue site footer with supporting links and the government crest.

## Example

```html
<footer class="govbb-footer">
  <div class="govbb-footer__inner">
    <nav class="govbb-footer__nav" aria-label="Footer navigation">
      <a class="govbb-footer__link" href="/">Home</a>
      <a class="govbb-footer__link" href="/cookies">Cookie policy</a>
      <a class="govbb-footer__link" href="/terms">Terms &amp; conditions</a>
      <a class="govbb-footer__link" href="/sitemap">Sitemap</a>
    </nav>
    <hr class="govbb-footer__divider" aria-hidden="true" />
    <div class="govbb-footer__end">
      <img class="govbb-footer__coat" src="/assets/coat-of-arms.svg" alt="" />
      <p class="govbb-footer__copy">© 2026 Government of Barbados</p>
    </div>
  </div>
</footer>
```

## Guidance

- Stick to essentials — legal, accessibility, sitemap, contact. Not the place for marketing or social icons.
- Include the crest and a copyright line to reinforce that the service is government-run.
- Wrap links in a `<nav>` with an `aria-label` so screen reader users can jump to or skip the footer.
