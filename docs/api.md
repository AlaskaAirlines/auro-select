# auro-select

The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property         | Attribute        | Type      | Default                | Description                                      |
|------------------|------------------|-----------|------------------------|--------------------------------------------------|
| `disabled`       | `disabled`       | `Boolean` |                        | When attribute is present element shows disabled state. |
| `error`          | `error`          | `Boolean` |                        | When attribute is present element shows error state. |
| `noCheckmark`    | `noCheckmark`    | `Boolean` |                        | When true, checkmark on selected option will no longer be present. |
| `optionSelected` | `optionSelected` | `Object`  | "undefined"            | Specifies the current selected menuOption.       |
| `placeholder`    | `placeholder`    | `String`  | "Please select option" | Define placeholder text to display before a value is manually selected. |
| `value`          | `value`          | `String`  |                        | Value selected for the component.                |

## Events

| Event              | Type               | Description                                      |
|--------------------|--------------------|--------------------------------------------------|
| `auroSelect-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
