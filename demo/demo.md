# Dropdownmenu

`<auro-dropdownmenu>` is a combination [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that consists of a pre-defined trigger element and a menu option for the panel content. See the API docs for additional information.

## auro-dropdownmenu use cases

The `<auro-dropdownmenu>` element should be used in situations where users may:

* Make a selection from a predefined list of options

## Default examples

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <!-- <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span> -->
    <auro-menu checkmark>
      <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu>
  <!-- <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span> -->
  <auro-menu checkmark>
    <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>

## Custom placeholder example

<div class="exampleWrapper">
  <auro-dropdownmenu placeholder="Custom placeholder text">
    <auro-menu>
      <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu placeholder="Custom placeholder text">
  <auro-menu>
    <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>

## Nested sub menu items

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <auro-menu checkmark>
      <auro-menu-option slot="listOfOptions" data-value="Seattle Area (All Airports)">Seattle Area (All Airports)</auro-menu-option>
      <auro-sub-menu slot="listOfOptions">
        <auro-menu-option data-value="Everett, WA (PAE-Paine Field)">Everett, WA (PAE-Paine Field)</auro-menu-option>
        <auro-menu-option data-value="Seattle, WA (SEA-Seattle/Tacoma Intl.)">Seattle, WA (SEA-Seattle/Tacoma Intl.)</auro-menu-option>
      </auro-sub-menu>
      <auro-menu-option slot="listOfOptions" data-value="Belgrade, Serbia (BEG-Belgrade)">Belgrade, Serbia (BEG-Belgrade)</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Mahe Island, Seychelles (SEZ-Mahe Island)">Mahe Island, Seychelles (SEZ-Mahe Island)</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Sendair, Japan (SDJ-Sendai)">Sendair, Japan (SDJ-Sendai)</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Sacramento, CA (SMF-Sacramento Intl.)">Sacramento, CA (SMF-Sacramento Intl.)</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Seoul, Korea, Republic of (All Airports)">Seoul, Korea, Republic of (All Airports)</auro-menu-option>
      <auro-sub-menu slot="listOfOptions">
        <auro-menu-option data-value="Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)">Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)</auro-menu-option>
        <auro-menu-option data-value="Seoul, Korea, Republic of (ICN-Seoul Incheon In..)">Seoul, Korea, Republic of (ICN-Seoul Incheon In..)</auro-menu-option>
      </auro-sub-menu>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu>
  <auro-menu checkmark>
    <auro-menu-option slot="listOfOptions" data-value="Seattle Area (All Airports)">Seattle Area (All Airports)</auro-menu-option>
    <auro-sub-menu slot="listOfOptions">
      <auro-menu-option data-value="Everett, WA (PAE-Paine Field)">Everett, WA (PAE-Paine Field)</auro-menu-option>
      <auro-menu-option data-value="Seattle, WA (SEA-Seattle/Tacoma Intl.)">Seattle, WA (SEA-Seattle/Tacoma Intl.)</auro-menu-option>
    </auro-sub-menu>
    <auro-menu-option slot="listOfOptions" data-value="Belgrade, Serbia (BEG-Belgrade)">Belgrade, Serbia (BEG-Belgrade)</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Mahe Island, Seychelles (SEZ-Mahe Island)">Mahe Island, Seychelles (SEZ-Mahe Island)</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Sendair, Japan (SDJ-Sendai)">Sendair, Japan (SDJ-Sendai)</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Sacramento, CA (SMF-Sacramento Intl.)">Sacramento, CA (SMF-Sacramento Intl.)</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Seoul, Korea, Republic of (All Airports)">Seoul, Korea, Republic of (All Airports)</auro-menu-option>
    <auro-sub-menu slot="listOfOptions">
      <auro-menu-option data-value="Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)">Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)</auro-menu-option>
      <auro-menu-option data-value="Seoul, Korea, Republic of (ICN-Seoul Incheon In..)">Seoul, Korea, Republic of (ICN-Seoul Incheon In..)</auro-menu-option>
    </auro-sub-menu>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>

## Preset value

<div class="exampleWrapper">
  <auro-dropdownmenu indexSelectedOption="4">
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu checkmark>
      <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu indexSelectedOption="4">
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu checkmark>
    <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>
