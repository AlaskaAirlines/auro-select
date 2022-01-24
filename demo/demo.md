# Dropdownmenu

`<auro-dropdownmenu>` is a combination [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that consists of a pre-defined trigger element and a menu option for the panel content. See the API docs for additional information.

## auro-dropdownmenu use cases

The `<auro-dropdownmenu>` element should be used in situations where users may:

* Make a selection from a predefined list of options

## Default examples

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <auro-menu checkmark>
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption data-value="Price">Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
      <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu>
  <auro-menu checkmark>
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>

## Custom placeholder example

<div class="exampleWrapper">
  <auro-dropdownmenu placeholder="Custom placeholder text">
    <auro-menu>
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption data-value="Price">Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
      <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu placeholder="Custom placeholder text">
  <auro-menu>
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>

## Nested sub menu items

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <auro-menu checkmark>
      <auro-menuoption data-value="Seattle Area (All Airports)">Seattle Area (All Airports)</auro-menuoption>
      <auro-sub-menu slot="listOfOptions">
        <auro-menuoption data-value="Everett, WA (PAE-Paine Field)">Everett, WA (PAE-Paine Field)</auro-menuoption>
        <auro-menuoption data-value="Seattle, WA (SEA-Seattle/Tacoma Intl.)">Seattle, WA (SEA-Seattle/Tacoma Intl.)</auro-menuoption>
      </auro-sub-menu>
      <auro-menuoption data-value="Belgrade, Serbia (BEG-Belgrade)">Belgrade, Serbia (BEG-Belgrade)</auro-menuoption>
      <auro-menuoption data-value="Mahe Island, Seychelles (SEZ-Mahe Island)">Mahe Island, Seychelles (SEZ-Mahe Island)</auro-menuoption>
      <auro-menuoption data-value="Sendair, Japan (SDJ-Sendai)">Sendair, Japan (SDJ-Sendai)</auro-menuoption>
      <auro-menuoption data-value="Sacramento, CA (SMF-Sacramento Intl.)">Sacramento, CA (SMF-Sacramento Intl.)</auro-menuoption>
      <auro-menuoption data-value="Seoul, Korea, Republic of (All Airports)">Seoul, Korea, Republic of (All Airports)</auro-menuoption>
      <auro-sub-menu slot="listOfOptions">
        <auro-menuoption data-value="Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)">Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)</auro-menuoption>
        <auro-menuoption data-value="Seoul, Korea, Republic of (ICN-Seoul Incheon In..)">Seoul, Korea, Republic of (ICN-Seoul Incheon In..)</auro-menuoption>
      </auro-sub-menu>
    </auro-menu>
  </auro-dropdownmenu>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdownmenu>
  <auro-menu checkmark>
    <auro-menuoption data-value="Seattle Area (All Airports)">Seattle Area (All Airports)</auro-menuoption>
    <auro-sub-menu slot="listOfOptions">
      <auro-menuoption data-value="Everett, WA (PAE-Paine Field)">Everett, WA (PAE-Paine Field)</auro-menuoption>
      <auro-menuoption data-value="Seattle, WA (SEA-Seattle/Tacoma Intl.)">Seattle, WA (SEA-Seattle/Tacoma Intl.)</auro-menuoption>
    </auro-sub-menu>
    <auro-menuoption data-value="Belgrade, Serbia (BEG-Belgrade)">Belgrade, Serbia (BEG-Belgrade)</auro-menuoption>
    <auro-menuoption data-value="Mahe Island, Seychelles (SEZ-Mahe Island)">Mahe Island, Seychelles (SEZ-Mahe Island)</auro-menuoption>
    <auro-menuoption data-value="Sendair, Japan (SDJ-Sendai)">Sendair, Japan (SDJ-Sendai)</auro-menuoption>
    <auro-menuoption data-value="Sacramento, CA (SMF-Sacramento Intl.)">Sacramento, CA (SMF-Sacramento Intl.)</auro-menuoption>
    <auro-menuoption data-value="Seoul, Korea, Republic of (All Airports)">Seoul, Korea, Republic of (All Airports)</auro-menuoption>
    <auro-sub-menu slot="listOfOptions">
      <auro-menuoption data-value="Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)">Seoul, Korea, Republic of (GMP-Seoul Gimpo In..)</auro-menuoption>
      <auro-menuoption data-value="Seoul, Korea, Republic of (ICN-Seoul Incheon In..)">Seoul, Korea, Republic of (ICN-Seoul Incheon In..)</auro-menuoption>
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
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption data-value="Price">Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
      <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
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
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-dropdownmenu>
```

</auro-accordion>
