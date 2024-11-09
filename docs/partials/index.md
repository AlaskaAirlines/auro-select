<!--
The demo.md file is a compiled document. No edits should be made directly to this file.

demo.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Select

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Default example

A baseline `<auro-select>` using `<auro-menu>` and `<auro-menuoption>` elements. Notice a default `Please select option` placeholder in the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example with auro-icons in options

Displays an `<auro-select>` element with `<auro-icon>` elements in each option.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/withIcons.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/withIcons.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example with nested menus

This example shows nesting `<auro-menu>` elements to create submenus.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/withSubmenus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>


<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/withSubmenus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example with no checkmark

Applying the `noCheckmark` attribute will prevent the checkmark icon from being shown on the selected option. The left padding to reserve space for the checkmark will not be shown.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/noCheckmark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/noCheckmark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example with custom bib height

This example shows how to set a custom height for the bib from `<auro-dropdown>`. 

Custom height dimensions are set by using the `dropdownPopover` CSS Part and then applying a `max-height` rule and value.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customBibHeight.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customBibHeight.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Label and help text slots

The following example illustrates the use of the `label` and `helptext` slots for additional placement of content around the select menu.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/slots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/slots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Error State

Use the `error` boolean attribute to toggle the error UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Disabled state

Use the `disabled` boolean attribute to toggle the disabled UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-select` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroSelect.register(name)` method and pass in a unique name.

```js
import { AuroSelect } from './src/auro-select.js';

AuroSelect.register('custom-select');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-select>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
