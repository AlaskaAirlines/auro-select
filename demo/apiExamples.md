

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

#### <a name="placeholder"></a>`placeholder`

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

#### <a name="value"></a>`value`

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

#### <a name="helperText"></a>`helperText`

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

#### <a name="label"></a>`label`

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

## Functional Examples

### Watch for value changes

This example demonstrates using JavaScript to watch for a value change.

<div class="exampleWrapper">
  <auro-dropdownmenu id="valueAlert">
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

```js
setTimeout(() => {
  document.querySelector('#valueAlert').addEventListener('optionSelected', (e) => {
    console.warn(e.detail);
    alert(JSON.stringify(e.detail));
  });
}, 500);
```

```html
<auro-dropdownmenu id="valueAlert">
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

### Extract value

This example demonstrates using JavaScript to extract the current value.

<div class="exampleWrapper">
  <auro-dropdownmenu id="valueExtraction">
    <auro-menu>
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption data-value="Price">Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
      <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
    </auro-menu>
  </auro-dropdownmenu>
  <auro-button onclick="getValue('#valueExtraction');">Get current value</auro-button>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
/**
 * @param {string} Selector for the dropdownmenu element to retrieve the value from.
 */
const getValue = (selector) => {
  const el = document.querySelector(selector);

  console.warn(el.value);
  alert(el.value);
}
```

```html
<auro-dropdownmenu id="valueExtraction">
  <auro-menu>
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    <auro-menuoption data-value="Prefer Alaska">Prefer Alaska</auro-menuoption>
  </auro-menu>
</auro-dropdownmenu>
<auro-button onclick="getValue('#valueExtraction');">Get current value</auro-button>
```

</auro-accordion>
