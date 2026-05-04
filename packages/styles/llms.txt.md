# GovBB Frontend

This is the documentation for the frontend of the Government of Barbados website.
It contains a collection of components, utilities, pages and other assets for building frontend applications using the [GOVBB Design System](https://github.com/GovTechBB/design-system). The CSS examples are written in HTML.

## Install

Available on npm as [`@govtech-bb/styles`](https://www.npmjs.com/package/@govtech-bb/styles), published under the `alpha` dist-tag.

```sh
pnpm add @govtech-bb/styles@alpha
```

```html
<link rel="stylesheet" href="/node_modules/@govtech-bb/styles/dist/styles.css" />
```

Or with a JS/TS bundler:

```ts
import "@govtech-bb/styles";
```

Assets (fonts, images) are reachable at `@govtech-bb/styles/assets/*`.

## Components

- [Breadcrumbs](./components/breadcrumbs/README.md) — trail of links showing a user's position in a hierarchy.
- [Button](./components/button/README.md) — trigger actions; primary, secondary, destructive, tertiary, and link variants.
- [Checkbox](./components/checkbox/README.md) — pick any number of options from a list.
- [Date input](./components/date-input/README.md) — three short fields for day, month, and year.
- [Error message](./components/error-message/README.md) — inline message explaining what went wrong on a field.
- [Error summary](./components/error-summary/README.md) — top-of-page list linking to every field with an error.
- [Fieldset](./components/fieldset/README.md) — groups controls that answer the same question.
- [File upload](./components/file-upload/README.md) — dropzone for attaching files.
- [Footer](./components/footer/README.md) — dark blue site footer with supporting links and crest.
- [Form group](./components/form-group/README.md) — container for one question: label, hint, error, control.
- [Header](./components/header/README.md) — yellow site header with logo and navigation.
- [Hint](./components/hint/README.md) — short helper text that explains what a field expects.
- [Input](./components/input/README.md) — single-line text input.
- [Label](./components/label/README.md) — names the field it sits above.
- [Number input](./components/number-input/README.md) — number field with visible +/- steppers.
- [Official banner](./components/official-banner/README.md) — thin bar confirming this is a real government service.
- [Radio](./components/radio/README.md) — pick exactly one option from a short list.
- [Search](./components/search/README.md) — search field paired with a submit button.
- [Select](./components/select/README.md) — dropdown for picking one option from a long list.
- [Show/hide](./components/show-hide/README.md) — disclosure that reveals secondary content on demand.
- [Status banner](./components/status-banner/README.md) — coloured strip indicating alpha, beta, migrated, or disruption.
- [Textarea](./components/textarea/README.md) — multi-line text input for longer answers.

## Blocks

App-specific compositions built on top of the components. Not shipped in the base stylesheet.

- [Feedback box](../blocks/feedback-box/feedback-box.html) — yellow callout asking users for page feedback.
- [Filter](../blocks/filter/filter.html) — collapsible filter panel with checkbox groups and an apply button.
- [Freshness](../blocks/freshness/freshness.html) — "last updated" meta strip for content pages.
- [Payment](../blocks/payment/payment.html) — payment summary card with default, success, and failed states.

## Templates

Full-page examples showing how components and blocks compose into real services. Starting points to copy and adapt.

- [Category](../templates/category.html) — category landing page listing services under a theme.
- [Home](../templates/home.html) — site homepage with top-level entry points.
- [Multiple questions](../templates/multiple-questions.html) — form page asking several related questions at once.
- [Service](../templates/service.html) — long-form service guide with overview, steps, and contact details.
- [Single question](../templates/single-question.html) — form page asking one question with Back and Continue actions.
