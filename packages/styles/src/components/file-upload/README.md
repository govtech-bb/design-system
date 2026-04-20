# File upload

> A dropzone for attaching files, with a visible list of uploaded items.

## Example

```html
<div class="govbb-file-upload">
  <label class="govbb-file-upload__dropzone" for="attachments">
    <div class="govbb-file-upload__info">
      <span class="govbb-file-upload__title">Upload a file</span>
      <span class="govbb-file-upload__subtitle">Attach a .pdf, .docx, or .png file</span>
    </div>
    <input class="govbb-file-upload__input" id="attachments" name="attachments" type="file" />
    <div class="govbb-file-upload__action">
      <span class="govbb-btn govbb-btn--secondary">Choose file</span>
      <span class="govbb-file-upload__max-size">Maximum size: 25MB</span>
    </div>
  </label>
  <ul class="govbb-file-upload__list">
    <li class="govbb-file-upload__item">
      <span class="govbb-file-upload__name">passport-application.pdf</span>
    </li>
  </ul>
</div>
```

## Guidance

- State accepted types and the size limit in the subtitle — users should not have to guess and fail.
- Keep uploaded files visible in a list so users can confirm what they attached (and remove mistakes).
- Set `aria-invalid="true"` on the input and render an [error message](../error-message/README.md) when upload fails or validation rejects the file.
- The whole dropzone is the label — clicking anywhere inside opens the file picker.
