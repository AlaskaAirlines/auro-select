<!--
The apiExamples.md file is a compiled document. No edits should be made directly to this file.

apiExamples.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/apiExamples.md`
-->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-select

The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property      | Attribute     | Type      | Default                | Description                                      |
|---------------|---------------|-----------|------------------------|--------------------------------------------------|
| [disabled](#disabled)    | `disabled`    | `Boolean` |                        | When attribute is present element shows disabled state. |
| [error](#error)       | `error`       | `Boolean` |                        | When attribute is present element shows error state. |
| [placeholder](#placeholder) | `placeholder` | `String`  | "Please select option" | Define placeholder text to display before a value is manually selected. |
| [value](#value)       | `value`       | `String`  |                        | Value selected for the dropdown menu.            |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| [helpText](#helpText) | Defines the content of the helpText. |
| [label](#label)    | Defines the content of the label.    |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default example

A baseline `<auro-select>` using `<auro-menu>` and `<auro-menuoption>` elements. Notice a default `Please select option` placeholder in the trigger.

<div>
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
      <auro-select>
        <auro-menu>
          <auro-menuoption value="stops">Stops</auro-menuoption>
          <auro-menuoption value="price">Price</auro-menuoption>
          <auro-menuoption value="duration">Duration</auro-menuoption>
          <auro-menuoption value="departure">Departure</auro-menuoption>
          <auro-menuoption value="arrival">Arrival</auro-menuoption>
          <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
        </auro-menu>
      </auro-select>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-select>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### <a name="placeholder"></a>`placeholder`

Use the `placeholder` string attribute to inject a custom placeholder option with the select element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customPlaceholder.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customPlaceholder.html -->
  <auro-select placeholder="Please select your preferred option">
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customPlaceholder.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customPlaceholder.html -->

```html
<auro-select placeholder="Please select your preferred option">
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="error"></a>`error`

Use the `error` boolean attribute to toggle the error UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-select error>
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->

```html
<auro-select error>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="disabled"></a>`disabled`

Use the `disabled` boolean attribute to toggle the disabled UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-select disabled>
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-select disabled>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Slot Examples

#### <a name="label"></a>`label`

Use the `label` slot to give your users contextual information about their selection options. This `label` content is also helpful for assistive devices.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/label.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/label.html -->
  <auro-select>
    <span slot="label">Please select a preference</span>
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/label.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/label.html -->

```html
<auro-select>
  <span slot="label">Please select a preference</span>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="helpText"></a>`helpText`

Use the `helptext` slot to provide additional information back to your user about their selection option(s).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/helperText.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/helperText.html -->
  <auro-select>
    <span slot="helperText">Please select an option</span>
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/helperText.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/helperText.html -->

```html
<auro-select>
  <span slot="helperText">Please select an option</span>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Functional Examples

## Pre-selected option

Use the `selected` attribute on the `auro-menuoption` element to pre-select an option within a user's experience. This is from the [auro-menu](https://auro.alaskaair.com/components/auro/menu/api) API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/presetValue.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/presetValue.html -->
  <auro-select>
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price" selected>Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/presetValue.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/presetValue.html -->

```html
<auro-select>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price" selected>Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Use option for placeholder

In some cases, where selection of content is optional, you can use a `<auro-menuoption>` as a pre-selected option as a placeholder in the menu.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/presetOption.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/presetOption.html -->
  <auro-select>
    <auro-menu>
      <auro-menuoption value="Please select an option" selected>Please select an option</auro-menuoption>
      <hr>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/presetOption.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/presetOption.html -->

```html
<auro-select>
  <auro-menu>
    <auro-menuoption value="Please select an option" selected>Please select an option</auro-menuoption>
    <hr>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Extract value

The following example illustrates how a user may query the `.value` of the `auro-menu` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/valueExtraction.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/valueExtraction.html -->
  <auro-select id="valueExtraction">
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <auro-button onclick="getValue('#valueExtraction');">Get current value</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/extractValue.js) -->
<!-- The below code snippet is automatically added from ./../../demo/extractValue.js -->

```js
/**
 * @param {string} Selector for auro-select to retrieve the value from.
 */
const getValue = (selector) => {
  const menu = document.querySelector(`${selector} auro-menu`);

  if (menu.optionSelected) {
    console.warn('Value selected:', menu.optionSelected.value);
    alert(`Value selected: ${menu.optionSelected.value}`);
  } else {
    console.warn('Value selected:', null);
    alert(`Value selected: ${null}`);
  }
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/valueExtraction.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/valueExtraction.html -->

```html
<auro-select id="valueExtraction">
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
<auro-button onclick="getValue('#valueExtraction');">Get current value</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Watch for value changes

The following example listens for the `selectOption` custom event from the `<auro-menu>` APi. Once triggered, the custom event will return an object `{value: any}`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/valueAlert.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/valueAlert.html -->
  <auro-select id="valueAlert">
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/alertValue.js) -->
<!-- The below code snippet is automatically added from ./../../demo/alertValue.js -->

```js
setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('selectedOption', () => {
    const menu = document.querySelector('#valueAlert auro-menu');
    console.warn('Value selected:', menu.optionSelected.value);
    alert(`Value selected: ${menu.optionSelected.value}`);
  });
}, 500);
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/valueAlert.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/valueAlert.html -->

```html
<auro-select id="valueAlert">
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
