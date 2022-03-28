<!--
The apiExamples.md file is a compiled document. No edits should be made directly to this file.

apiExamples.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/apiExamples.md`
-->

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default example

A baseline `<auro-select>` using `<auro-menu>` and `<auro-menuoption>` elements. Notice a default `Please select option` placeholder in the trigger.

<div>
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Property Examples

#### `placeholder`

Use the `placeholder` string attribute to inject a custom placeholder option with the select element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customPlaceholder.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customPlaceholder.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `error`

Use the `error` boolean attribute to toggle the error UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `disabled`

Use the `disabled` boolean attribute to toggle the disabled UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


### Slot Examples

#### `label`

Use the `label` slot to give your users contextual information about their selection options. This `label` content is also helpful for assistive devices.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `helpText`

Use the `helptext` slot to provide additional information back to your user about their selection option(s).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/helperText.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/helperText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Functional Examples

## Pre-selected option

Use the `selected` attribute on the `auro-menuoption` element to pre-select an option within a user's experience. This is from the [auro-menu](https://auro.alaskaair.com/components/auro/menu/api) API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/presetValue.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/presetValue.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Use option for placeholder

In some cases, where selection of content is optional, you can use a `<auro-menuoption>` as a pre-selected option as a placeholder in the menu.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/presetOption.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/presetOption.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Extract value

The following example illustrates how a user may query the `.value` of the `auro-menu` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/valueExtraction.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>


<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/extractValue.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/valueExtraction.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Watch for value changes

The following example listens for the `selectOption` custom event from the `<auro-menu>` APi. Once triggered, the custom event will return an object `{value: any}`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/valueAlert.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>


<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../demo/alertValue.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/valueAlert.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
