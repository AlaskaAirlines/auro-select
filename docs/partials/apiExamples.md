<!--
The apiExamples.md file is a compiled document. No edits should be made directly to this file.

apiExamples.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/apiExamples.md`
-->

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default example

A baseline `auro-select` using `auro-menu` and `auro-menuoption` elements. Notice a default `Please select option` placeholder in the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/nestedSelect.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Property Examples

#### value

Use the `value` property to define a preset value on the `auro-select` element. The `value` of `auro-select` must match the `value` defined of a single `auro-menuoption`. Upon initially rendering the component, if the `value` does not match an `auro-menuoption`, the `value` of `auro-select` will be set to `undefined`.

To pre-set the value of auro-select on load, use the `value` property. The `selected` attribute on auro-menuoption is designed to illustrate state in the DOM.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/value.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### placeholder

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

#### required

When present, the `required` attribute specifies that a select field must be filled out before submitting the form.

When the validity check fails the validityState equals `valueMissing`. The error message for the `valueMissing` validityState can be set to a custom string using the `setCustomValidityValueMissing`. There is no default error message defined.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### error

Use the `error` boolean attribute to toggle the error UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/errorApi.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/errorApi.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### disabled

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

#### label

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

#### helpText

Use the `helptext` slot to provide additional information back to your user about their selection option(s).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/helpText.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/helpText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Functional Examples

### Extract value

The following example illustrates how a user may query the `element.value` or `element.optionSelected` for the current value or complete option object that is selected.

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

### Custom Validity with Error State

This example programmatically adds the `error` state when a user selects an option that is greater than `2`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customErrorValidity.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customErrorValidity.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customErrorValidity.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Watch for value changes

The following example listens for the `selectedOption` event. Once triggered, `element.value` or `element.optionSelected` may be queried for the new value or complete option object.

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
