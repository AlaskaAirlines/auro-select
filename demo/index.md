<!--
The demo.md file is a compiled document. No edits should be made directly to this file.

demo.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Select

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-select>` is a combination [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that consists of a pre-defined trigger element, `<auro-menu>` for the panel content. See the <auro-hyperlink href="https://auro.alaskaair.com/components/auro/menu/api">auro-menu API docs</auro-hyperlink> for additional information.

## About auro-select

The `<auro-select>` element presents a menu of options. The options within the menu are represented by `<auro-menu>` and `<auro-menuoption>` elements. You can pre-select options for the user with the `selected` attribute as part of the `<auro-menuoption>` API.

## Install instructions

The `<auro-select>` custom element is a combo-element using independent primitives for the most flexibility. To allow consumers the most control over the versioning their dependencies, `<auro-select>` requires the following peer dependencies along with `<auro-select>`.

```shell
$ npm i @aurodesignsystem/auro-select

$ npm i @aurodesignsystem/auro-dropdown
$ npm i @aurodesignsystem/auro-menu
```
<!-- AURO-GENERATED-CONTENT:END -->

## Default example

A baseline `<auro-select>` using `<auro-menu>` and `<auro-menuoption>` elements. Notice a default `Please select option` placeholder in the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-select required setCustomValidityValueMissing="This was a required field, yo!">
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

## Example with auro-icons in options

Displays an `<auro-select>` element with `<auro-icon>` elements in each option.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/withIcons.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/withIcons.html -->
  <auro-select>
    <auro-menu>
      <auro-menuoption value="air">
        <auro-icon label customColor category="health" name="air">Air</auro-icon>
      </auro-menuoption>
      <auro-menuoption value="covidtest">
        <auro-icon label customColor category="health" name="covid-test">Covid Test</auro-icon>
      </auro-menuoption>
      <auro-menuoption value="health">
        <auro-icon label customColor category="health" name="health">Health</auro-icon>
      </auro-menuoption>
      <auro-menuoption value="mask">
        <auro-icon label customColor category="health" name="mask">Mask</auro-icon>
      </auro-menuoption>
      <auro-menuoption value="spraybottle">
        <auro-icon label customColor category="health" name="spraybottle">Spray Bottle</auro-icon>
      </auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/withIcons.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/withIcons.html -->

```html
<auro-select>
  <auro-menu>
    <auro-menuoption value="air">
      <auro-icon label customColor category="health" name="air">Air</auro-icon>
    </auro-menuoption>
    <auro-menuoption value="covidtest">
      <auro-icon label customColor category="health" name="covid-test">Covid Test</auro-icon>
    </auro-menuoption>
    <auro-menuoption value="health">
      <auro-icon label customColor category="health" name="health">Health</auro-icon>
    </auro-menuoption>
    <auro-menuoption value="mask">
      <auro-icon label customColor category="health" name="mask">Mask</auro-icon>
    </auro-menuoption>
    <auro-menuoption value="spraybottle">
      <auro-icon label customColor category="health" name="spraybottle">Spray Bottle</auro-icon>
    </auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Example with nested menus

This example shows nesting `<auro-menu>` elements to create submenus.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/withSubmenus.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/withSubmenus.html -->
  <auro-select>
    <auro-menu>
      <auro-menuoption value="stops">Stops</auro-menuoption>
      <auro-menuoption value="price">Price</auro-menuoption>
      <auro-menuoption value="duration">Duration</auro-menuoption>
      <hr>
      <auro-menu>
        <auro-menuoption value="apples">Apples</auro-menuoption>
        <auro-menuoption value="oranges">Oranges</auro-menuoption>
        <auro-menuoption value="pears">Pears</auro-menuoption>
        <auro-menuoption value="grapes">Grapes</auro-menuoption>
        <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
        <hr>
        <auro-menu>
          <auro-menuoption value="person">Person</auro-menuoption>
          <auro-menuoption value="woman">Woman</auro-menuoption>
          <auro-menuoption value="man">Man</auro-menuoption>
          <auro-menuoption value="camera">Camera</auro-menuoption>
          <auro-menuoption value="tv">TV</auro-menuoption>
        </auro-menu>
      </auro-menu>
      <hr>
      <auro-menuoption value="departure">Departure</auro-menuoption>
      <auro-menuoption value="arrival">Arrival</auro-menuoption>
      <hr>
      <auro-menu>
        <auro-menuoption value="cars">Cars</auro-menuoption>
        <auro-menuoption value="trucks">Trucks</auro-menuoption>
        <auro-menuoption value="boats">Boats</auro-menuoption>
        <auro-menuoption value="planes">Planes</auro-menuoption>
        <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
    </auro-menu>
  </auro-select>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/withSubmenus.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/withSubmenus.html -->

```html
<auro-select>
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <hr>
    <auro-menu>
      <auro-menuoption value="apples">Apples</auro-menuoption>
      <auro-menuoption value="oranges">Oranges</auro-menuoption>
      <auro-menuoption value="pears">Pears</auro-menuoption>
      <auro-menuoption value="grapes">Grapes</auro-menuoption>
      <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
      <hr>
      <auro-menu>
        <auro-menuoption value="person">Person</auro-menuoption>
        <auro-menuoption value="woman">Woman</auro-menuoption>
        <auro-menuoption value="man">Man</auro-menuoption>
        <auro-menuoption value="camera">Camera</auro-menuoption>
        <auro-menuoption value="tv">TV</auro-menuoption>
      </auro-menu>
    </auro-menu>
    <hr>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <hr>
    <auro-menu>
      <auro-menuoption value="cars">Cars</auro-menuoption>
      <auro-menuoption value="trucks">Trucks</auro-menuoption>
      <auro-menuoption value="boats">Boats</auro-menuoption>
      <auro-menuoption value="planes">Planes</auro-menuoption>
      <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
  </auro-menu>
</auro-select>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Example with no checkmark

Applying the `noCheckmark` attribute will prevent the checkmark icon from being shown on the selected option. The left padding to reserve space for the checkmark will not be shown.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/noCheckmark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/noCheckmark.html -->
  <auro-select nocheckmark>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/noCheckmark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/noCheckmark.html -->

```html
<auro-select nocheckmark>
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

## Label and help text slots

The following example illustrates the use of the `label` and `helptext` slots for additional placement of content around the select menu.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/slots.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/slots.html -->
  <auro-select>
    <span slot="label">Please choose a preference</span>
    <span slot="helpText">Preferences are maintained for future use</span>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/slots.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/slots.html -->

```html
<auro-select>
  <span slot="label">Please choose a preference</span>
  <span slot="helpText">Preferences are maintained for future use</span>
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

## Error state

Use the `error` boolean attribute to toggle the error UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-select error="Custom error message">
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
<auro-select error="Custom error message">
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

## Disabled state

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
