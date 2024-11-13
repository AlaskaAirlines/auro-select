# auro-select

The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property                        | Attribute                       | Type      | Default                | Description                                      |
|---------------------------------|---------------------------------|-----------|------------------------|--------------------------------------------------|
| `disabled`                      | `disabled`                      | `Boolean` |                        | When attribute is present element shows disabled state. |
| `error`                         | `error`                         | `String`  |                        | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| `flexMenuWidth`                 | `flexMenuWidth`                 | `Boolean` |                        | If set, makes dropdown bib width match the size of the content, rather than the width of the trigger. |
| `noCheckmark`                   | `noCheckmark`                   | `Boolean` |                        | When true, checkmark on selected option will no longer be present. |
| `noValidate`                    | `noValidate`                    | `Boolean` |                        | If set, disables auto-validation on blur.        |
| `optionSelected`                | `optionSelected`                | `Object`  | "undefined"            | Specifies the current selected menuOption.       |
| `placeholder`                   | `placeholder`                   | `String`  | "Please select option" | Define placeholder text to display before a value is manually selected. |
| `required`                      | `required`                      | `Boolean` |                        | Populates the `required` attribute on the element. Used for client-side validation. |
| `setCustomValidity`             | `setCustomValidity`             | `String`  |                        | Sets a custom help text message to display for all validityStates. |
| `setCustomValidityCustomError`  | `setCustomValidityCustomError`  | `String`  |                        | Custom help text message to display when validity = `customError`. |
| `setCustomValidityValueMissing` | `setCustomValidityValueMissing` | `String`  |                        | Custom help text message to display when validity = `valueMissing`. |
| `validity`                      | `validity`                      | `String`  | "undefined"            | Specifies the `validityState` this element is in. |
| `value`                         | `value`                         | `String`  |                        | Value selected for the component.                |

## Events

| Event                       | Type               | Description                                      |
|-----------------------------|--------------------|--------------------------------------------------|
| `auroFormElement-validated` |                    | Notifies that the `validity` and `errorMessage` values have changed. |
| `auroSelect-ready`          | `CustomEvent<any>` | Notifies that the component has finished initializing. |
| `auroSelect-valueSet`       | `CustomEvent<any>` | Notifies that the component has a new value set. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
|            | Default slot for the menu content.   |
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |

## CSS Shadow Parts

| Part       | Description                 |
|------------|-----------------------------|
| `helpText` | Apply CSS to the help text. |
