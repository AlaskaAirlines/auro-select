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

| Property                        | Attribute                       | Type      | Default                | Description                                      |
|---------------------------------|---------------------------------|-----------|------------------------|--------------------------------------------------|
| `disabled`                      | `disabled`                      | `Boolean` |                        | When attribute is present element shows disabled state. |
| `error`                         | `error`                         | `String`  |                        | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| `noCheckmark`                   | `noCheckmark`                   | `Boolean` |                        | When true, checkmark on selected option will no longer be present. |
| `noValidate`                    | `noValidate`                    | `Boolean` |                        | If set, disables auto-validation on blur.        |
| `optionSelected`                | `optionSelected`                | `Object`  | "undefined"            | Specifies the current selected menuOption.       |
| `placeholder`                   | `placeholder`                   | `String`  | "Please select option" | Define placeholder text to display before a value is manually selected. |
| `required`                      | `required`                      | `Boolean` |                        | Populates the `required` attribute on the element. Used for client-side validation. |
| `setCustomValidity`             | `setCustomValidity`             | `String`  |                        | Sets a custom help text message to display for all validityStates. |
| `setCustomValidityCustomError`  | `setCustomValidityCustomError`  | `String`  |                        | Custom help text message to display when validity = `customError`. |
| `setCustomValidityValueMissing` | `setCustomValidityValueMissing` | `String`  |                        | Custom help text message to display when validity = `valueMissing`. |
| `validity`                      | `validity`                      | `String`  | "undefined"            | Specifies the `validityState` this element is in. |
| `value`                         | `value`                         | `String`  |                        | Value selected for the component.                |

## Events

| Event                 | Type               | Description                                      |
|-----------------------|--------------------|--------------------------------------------------|
| `auroSelect-ready`    | `CustomEvent<any>` | Notifies that the component has finished initializing. |
| `auroSelect-valueSet` | `CustomEvent<any>` | Notifies that the component has a new value set. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default example

A baseline `auro-select` using `auro-menu` and `auro-menuoption` elements. Notice a default `Please select option` placeholder in the trigger.

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

### The auro-select nested inside an auro-dialog example

An example using an `auro-select` nested inside of a container that is smaller than the `auro-select` element when the popover bib is open. In this case, the parent container of this `auro-select` is an `auro-dialog` element. The purpose of this example is to show what a nested `auro-select` looks like when
it's parent container has it's CSS code set to `overflow: visible` in order to allow for the dropdown menu of `auro-select` to be visible, even when the height
of the dropdown may exceed the borders of the parent container.

**IMPORTANT:** You must be careful when using `overflow: visible` in order to obtain a UI experience that reflects this example. While `auro-select`'s dropdown menu
will overflow over the parent container's borders, so will all other elements within the container, which may lead to UI issues.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/nestedSelect.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/nestedSelect.html -->
  <!-- Style to allow the dropdown menu to overflow -->
  <style>
    #visibleOverflowDialog::part(dialog) { 
      overflow: visible;
      max-height: 400px;
    }
  </style>
  <auro-button id="overflowVisibleButton">Open Visible Overflow Dialog</auro-button>
  <auro-button id="overflowHiddenButton">Open Hidden Overflow Dialog</auro-button>
  <!-- Example showing the overflow of auro-select's popover bib with overflow: visible -->
  <auro-dialog id="visibleOverflowDialog">
    <span slot="header">Visible Overflow Dialog</span>
    <div slot="content">
      <auro-select id="nestedSelect">
        <auro-menu>
          <auro-menuoption value="stops">Stops</auro-menuoption>
          <auro-menuoption value="price">Price</auro-menuoption>
          <auro-menuoption value="duration">Duration</auro-menuoption>
          <auro-menuoption value="departure">Departure</auro-menuoption>
          <auro-menuoption value="arrival">Arrival</auro-menuoption>
          <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
        </auro-menu>
      </auro-select>
    </div> 
    <div slot="footer" className="auro_containedButtons">
      <auro-button secondary id="closeVisButton">Close</auro-button>
    </div>
  </auro-dialog>
  <!-- Example showing the overflow of auro-select's popover bib with the default behavior, overflow: hidden -->
  <auro-dialog id="hiddenOverflowDialog">
    <span slot="header">Hidden Overflow Dialog</span>
    <div slot="content">
      <auro-select id="nestedSelect">
        <auro-menu>
          <auro-menuoption value="stops">Stops</auro-menuoption>
          <auro-menuoption value="price">Price</auro-menuoption>
          <auro-menuoption value="duration">Duration</auro-menuoption>
          <auro-menuoption value="departure">Departure</auro-menuoption>
          <auro-menuoption value="arrival">Arrival</auro-menuoption>
          <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
        </auro-menu>
      </auro-select>
    </div> 
    <div slot="footer" className="auro_containedButtons">
      <auro-button secondary id="closeHidButton">Close</auro-button>
    </div>
  </auro-dialog>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/nestedSelect.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/nestedSelect.html -->

```html
<!-- Style to allow the dropdown menu to overflow -->
<style>
  #visibleOverflowDialog::part(dialog) { 
    overflow: visible;
    max-height: 400px;
  }
</style>
<auro-button id="overflowVisibleButton">Open Visible Overflow Dialog</auro-button>
<auro-button id="overflowHiddenButton">Open Hidden Overflow Dialog</auro-button>
<!-- Example showing the overflow of auro-select's popover bib with overflow: visible -->
<auro-dialog id="visibleOverflowDialog">
  <span slot="header">Visible Overflow Dialog</span>
  <div slot="content">
    <auro-select id="nestedSelect">
      <auro-menu>
        <auro-menuoption value="stops">Stops</auro-menuoption>
        <auro-menuoption value="price">Price</auro-menuoption>
        <auro-menuoption value="duration">Duration</auro-menuoption>
        <auro-menuoption value="departure">Departure</auro-menuoption>
        <auro-menuoption value="arrival">Arrival</auro-menuoption>
        <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
      </auro-menu>
    </auro-select>
  </div> 
  <div slot="footer" className="auro_containedButtons">
    <auro-button secondary id="closeVisButton">Close</auro-button>
  </div>
</auro-dialog>
<!-- Example showing the overflow of auro-select's popover bib with the default behavior, overflow: hidden -->
<auro-dialog id="hiddenOverflowDialog">
  <span slot="header">Hidden Overflow Dialog</span>
  <div slot="content">
    <auro-select id="nestedSelect">
      <auro-menu>
        <auro-menuoption value="stops">Stops</auro-menuoption>
        <auro-menuoption value="price">Price</auro-menuoption>
        <auro-menuoption value="duration">Duration</auro-menuoption>
        <auro-menuoption value="departure">Departure</auro-menuoption>
        <auro-menuoption value="arrival">Arrival</auro-menuoption>
        <auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
      </auro-menu>
    </auro-select>
  </div> 
  <div slot="footer" className="auro_containedButtons">
    <auro-button secondary id="closeHidButton">Close</auro-button>
  </div>
</auro-dialog>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### value

Use the `value` property to define a preset value on the `auro-select` element. The `value` of `auro-select` must match the `value` defined of a single `auro-menuoption`. Upon initially rendering the component, if the `value` does not match an `auro-menuoption`, the `value` of `auro-select` will be set to `undefined`.

To pre-set the value of auro-select on load, use the `value` property. The `selected` attribute on auro-menuoption is designed to illustrate state in the DOM.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/value.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/value.html -->
  <auro-button id="validValueExampleBtn">Set Value to Valid Option</auro-button>
  <auro-button id="invalidValueExampleBtn">Set Value to Invalid Option</auro-button>
  <auro-button id="undefinedValueExampleBtn">Set Value to Undefined</auro-button>
  <br/><br/>
  <auro-select id="valueExample" value="price">
    <span slot="label">Name</span>
    <auro-menu>
      <auro-menuoption id="option-0" value="stops">Stops</auro-menuoption>
      <auro-menuoption id="option-1" value="price">Price</auro-menuoption>
      <auro-menuoption id="option-2" value="duration">Duration</auro-menuoption>
      <auro-menuoption id="option-3" value="departure">Departure</auro-menuoption>
      <auro-menuoption id="option-4" value="arrival">Arrival</auro-menuoption>
      <auro-menuoption id="option-5" value="prefer alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/value.html -->

```html
<auro-button id="validValueExampleBtn">Set Value to Valid Option</auro-button>
<auro-button id="invalidValueExampleBtn">Set Value to Invalid Option</auro-button>
<auro-button id="undefinedValueExampleBtn">Set Value to Undefined</auro-button>
<br/><br/>
<auro-select id="valueExample" value="price">
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption id="option-0" value="stops">Stops</auro-menuoption>
    <auro-menuoption id="option-1" value="price">Price</auro-menuoption>
    <auro-menuoption id="option-2" value="duration">Duration</auro-menuoption>
    <auro-menuoption id="option-3" value="departure">Departure</auro-menuoption>
    <auro-menuoption id="option-4" value="arrival">Arrival</auro-menuoption>
    <auro-menuoption id="option-5" value="prefer alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/value.js -->

```js
export function setValue(elem) {
  document.querySelector('#validValueExampleBtn').addEventListener('click', () => {
    elem.value = 'arrival';
  })

  document.querySelector('#invalidValueExampleBtn').addEventListener('click', () => {
    elem.value = 'flight course';
  })

  document.querySelector('#undefinedValueExampleBtn').addEventListener('click', () => {
    elem.value = undefined;
  })
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### placeholder

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

#### required

When present, the `required` attribute specifies that a select field must be filled out before submitting the form.

When the validity check fails the validityState equals `valueMissing`. The error message for the `valueMissing` validityState can be set to a custom string using the `setCustomValidityValueMissing`. There is no default error message defined.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/required.html -->
  <auro-select required setCustomValidityValueMissing="Custom required validation error message.">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/required.html -->

```html
<auro-select required setCustomValidityValueMissing="Custom required validation error message.">
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

#### error

Use the `error` boolean attribute to toggle the error UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/errorApi.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/errorApi.html -->
  <auro-button id="undefinedValueExampleBtnAddError">Set Error</auro-button>
  <auro-button id="undefinedValueExampleBtnRemoveError">Remove Error</auro-button>
  <br /><br />
  <auro-select id="errorExample" error="Custom error message">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/errorApi.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/errorApi.html -->

```html
<auro-button id="undefinedValueExampleBtnAddError">Set Error</auro-button>
<auro-button id="undefinedValueExampleBtnRemoveError">Remove Error</auro-button>
<br /><br />
<auro-select id="errorExample" error="Custom error message">
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

#### disabled

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

#### label

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

#### helpText

Use the `helptext` slot to provide additional information back to your user about their selection option(s).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/helpText.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/helpText.html -->
  <auro-select>
    <span slot="helpText">Custom help text message.</span>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/helpText.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/helpText.html -->

```html
<auro-select>
  <span slot="helpText">Custom help text message.</span>
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

### Extract value

The following example illustrates how a user may query the `element.value` or `element.optionSelected` for the current value or complete option object that is selected.

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
  <auro-button id="valueExtractionBtn">Get current value</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/extractValue.js) -->
<!-- The below code snippet is automatically added from ./../../demo/extractValue.js -->

```js
export function getValue(elem) {
  const btn = document.querySelector('#valueExtractionBtn');

  btn.addEventListener('click', () => {
    console.warn('Value selected:', elem.value);
    console.warn('Option selected:', elem.optionSelected);
  })
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
<auro-button id="valueExtractionBtn">Get current value</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Validity with Error State

This example programmatically adds the `error` state when a user selects an option that is greater than `2`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customErrorValidity.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customErrorValidity.html -->
  <auro-select id="primaryError">
    <auro-menu>
      <auro-menuoption value="1">1</auro-menuoption>
      <auro-menuoption value="2">2</auro-menuoption>
      <auro-menuoption value="3">3</auro-menuoption>
      <auro-menuoption value="4">4</auro-menuoption>
      <auro-menuoption value="5">5</auro-menuoption>
      <auro-menuoption value="6">6</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customErrorValidity.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customErrorValidity.html -->

```html
<auro-select id="primaryError">
  <auro-menu>
    <auro-menuoption value="1">1</auro-menuoption>
    <auro-menuoption value="2">2</auro-menuoption>
    <auro-menuoption value="3">3</auro-menuoption>
    <auro-menuoption value="4">4</auro-menuoption>
    <auro-menuoption value="5">5</auro-menuoption>
    <auro-menuoption value="6">6</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customErrorValidity.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customErrorValidity.js -->

```js
export function setErrorOnValueChange(elem) {
  elem.addEventListener('auroSelect-valueSet', () => {
    if (+elem.value > 2) {
      elem.setAttribute('error', 'Quantity Exceeded');
    } else if (elem.hasAttribute('error')) {
      elem.removeAttribute('error');
    }
  })
};
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Watch for value changes

The following example listens for the `selectedOption` event. Once triggered, `element.value` or `element.optionSelected` may be queried for the new value or complete option object.

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
export function valueAlert(elem) {
  elem.addEventListener('selectedOption', () => {
    console.warn('Select value changed to:', elem.value);
    console.warn('Select optionSelected changed to:', elem.optionSelected);
  })
}
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