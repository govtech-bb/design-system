# Header

> The yellow site header that identifies the service and holds top-level navigation.

## Example

```html
<header class="govbb-header">
  <div class="govbb-header__inner">
    <a href="/">
      <img class="govbb-header__logo" src="/assets/govbb-logo.svg" alt="gov.bb" />
    </a>
  </div>
</header>
```

## Guidance

- Render on every page of a service, directly below the [official banner](../official-banner/README.md).
- Keep the inside of the header simple — logo, and optionally a search or sign-out control.
- The logo image is functional (it's the link home), so give it meaningful alt text rather than leaving it empty.
