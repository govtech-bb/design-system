# Search

> A search field paired with a submit button, as one unit.

## Example

```html
<form class="govbb-search" action="/search">
  <label class="govbb-search__label" for="search-q">Search</label>
  <input
    class="govbb-search__input"
    id="search-q"
    name="q"
    type="search"
    placeholder="Search gov.bb"
  />
  <button class="govbb-search__button" type="submit">Search</button>
</form>
```

### Borderless

Use inside a coloured container (like the header) where the outer border would clash.

```html
<form class="govbb-search govbb-search--borderless" action="/search">
  <label class="govbb-search__label" for="search-hdr">Search</label>
  <input class="govbb-search__input" id="search-hdr" name="q" type="search" />
  <button class="govbb-search__button" type="submit">Search</button>
</form>
```

## Guidance

- The label is visually hidden but required for screen readers — keep it.
- Submit must be a real `<button type="submit">` inside a `<form>`, so Enter submits from the input.
- A placeholder is optional but can hint at scope ("Search gov.bb").
