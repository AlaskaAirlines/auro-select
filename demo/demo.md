# Dropdownmenu

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.

## auro-dropdownmenu use cases

The `auro-dropdownmenu` element should be used in situations where users may:

* egestas bibendum mauris cursus
* quis euismod felis mollis
* consectetur ipsum risus sed tortor

<div class="exampleWrapper">
  <auro-dropdownmenu dropdownWidth="500px" indexselectedoption="0">
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu slot="menu" checkmark>
      <auro-menu-option slot="listOfOptions" data-value="Stops">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Price">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Duration">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Departure">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Arrival">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</auro-menu-option>
    </auro-menu>
  </auro-dropdownmenu>
</div>

<br />

<div class="exampleWrapper">
  <auro-dropdownmenu placeholder="Custom placeholder string"  dropdownWidth="800px">
    <auro-menu slot="menu" indexselectedoption="0">
      <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Price">Price</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="Prefer Alaska">Prefer Alaska</auro-menu-option>
    </auro-menu>
  </auro-dropdownmenu>
</div>

<br />

<div class="exampleWrapper">
  <auro-dropdownmenu placeholder="Select a destination airport">
    <auro-menu slot="menu" checkmark>
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

<!-- <auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdownmenu>Hello World!</auro-dropdownmenu>
  ```

</auro-accordion> -->
