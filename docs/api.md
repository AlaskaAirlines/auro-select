# auro-dropdownmenu

The auro-dropdownmenu element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property      | Attribute     | Type      | Default                | Description                                      |
|---------------|---------------|-----------|------------------------|--------------------------------------------------|
| `autoselect`  | `autoselect`  | `Boolean` |                        | Use attribute select first option with first interaction. |
| `disabled`    | `disabled`    | `Boolean` |                        | When attribute is present element shows disabled state. |
| `error`       | `error`       | `Boolean` |                        | When attribute is present element shows error state. |
| `placeholder` | `placeholder` | `String`  | "Please select option" | Define placeholder text to display before a value is manually selected. |
| `value`       | `value`       | `String`  |                        | Value selected for the dropdown menu.            |

## Slots

| Name         | Description                            |
|--------------|----------------------------------------|
|              | Default slot for the menu content.     |
| `helperText` | Defines the content of the helperText. |
| `label`      | Defines the content of the label.      |
