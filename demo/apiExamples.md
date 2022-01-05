

# auro-dropdownmenu

The auro-dropdownmenu element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property      | Attribute     | Type     | Default            | Description                                      |
|---------------|---------------|----------|--------------------|--------------------------------------------------|
| [placeholder](#placeholder) | `placeholder` | `String` | "Select an option" | Define placeholder text to display before a value is manually selected. |
| [value](#value)       | `value`       | `String` |                    | Value selected for the dropdown menu.            |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdownmenu>
        <span slot="label">Label</span>
        <span slot="helperText">Helper Text</span>
        <auro-menu slot="menu" checkmark>
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
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu slot="menu" checkmark>
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

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu slot="menu" checkmark>
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
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu slot="menu" checkmark>
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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu slot="menu" checkmark>
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
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu slot="menu" checkmark>
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

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu slot="menu" checkmark>
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
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu slot="menu" checkmark>
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

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu slot="menu" checkmark>
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
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu slot="menu" checkmark>
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

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-dropdownmenu" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-dropdownmenu>
    <span slot="label">Label</span>
    <span slot="helperText">Helper Text</span>
    <auro-menu slot="menu" checkmark>
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
  <span slot="label">Label</span>
  <span slot="helperText">Helper Text</span>
  <auro-menu slot="menu" checkmark>
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
