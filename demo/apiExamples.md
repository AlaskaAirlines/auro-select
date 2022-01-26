

# auro-dropdownmenu

The auro-dropdownmenu element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property      | Attribute     | Type     | Default            | Description                                      |
|---------------|---------------|----------|--------------------|--------------------------------------------------|
| [placeholder](#placeholder) | `placeholder` | `String` | "Select an option" | Define placeholder text to display before a value is manually selected. |
| [value](#value)       | `value`       | `String` | null               | Value selected for the dropdown menu.            |

## Slots

| Name         | Description                            |
|--------------|----------------------------------------|
|              | Default slot for the menu content.     |
| [helperText](#helperText) | Defines the content of the helperText. |
| [label](#label)      | Defines the content of the label.      |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdownmenu>
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
<auro-dropdownmenu>
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

### Property Examples

#### <a name="placeholder"></a>`placeholder`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

#### <a name="value"></a>`value`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
TODO: This needs a new example showing some actual use case of extracting the value.

<div class="exampleWrapper">
  <auro-dropdownmenu selectOption="2">
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
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
<auro-dropdownmenu selectOption="2">
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
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

### Slot Examples

#### default

All examples on this page show default slot content.

<div class="exampleWrapper">
  <auro-dropdownmenu>
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
<auro-dropdownmenu>
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

#### <a name="helperText"></a>`helperText`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="helperText">Helper Text</span>
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
<auro-dropdownmenu>
  <span slot="helperText">Helper Text</span>
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

#### <a name="label"></a>`label`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="label">Label</span>
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
<auro-dropdownmenu>
  <span slot="label">Label</span>
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
