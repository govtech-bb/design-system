# Breadcrumbs

> Breadcrumbs show where a user is in a hierarchy and let them jump back to any level above. They render as a horizontal trail of links (Home → Section → Subsection).

## Example

```html
<nav class="govbb-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govbb-breadcrumbs__list">
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/services">Services</a>
    </li>
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/services/passports">Passports</a>
    </li>
  </ol>
</nav>
```

## Structure

- Consists of items (links) and separators
- Each item represents a level in the hierarchy and links to that page
- Items should follow the logical path from the homepage to the current location

## Usage

- Use breadcrumbs to support navigation in multi-level or deep hierarchies
- Each item must include a destination (href)
- Keep labels concise and reflective of page titles

### Do not include the current page as a breadcrumb item.

The current page is already indicated by the page title and visual context, so repeating it adds redundancy without improving navigation.

### Mobile collapsible

On mobile, breadcrumbs can be collapsed into a single level. This is useful for smaller screens where space is limited.

```html
<nav class="govbb-breadcrumbs govbb-breadcrumbs--collapse-on-mobile" aria-label="Breadcrumb">
  <ol class="govbb-breadcrumbs__list">
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/a">Section</a>
    </li>
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/a/b">Subsection</a>
    </li>
    <li class="govbb-breadcrumbs__item">
      <a class="govbb-breadcrumbs__link" href="/a/b/c">Topic</a>
    </li>
  </ol>
</nav>
```
