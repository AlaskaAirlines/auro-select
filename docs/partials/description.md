`<auro-select>` is a combination <auro-hyperlink href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">HTML custom element</auro-hyperlink> that consists of a pre-defined trigger element, `<auro-menu>` for the panel content. See the <auro-hyperlink href="https://auro.alaskaair.com/components/auro/menu/api">auro-menu API docs</auro-hyperlink> for additional information.

## About auro-select

The `<auro-select>` element presents a menu of options. The options within the menu are represented by `<auro-menu>` and `<auro-menuoption>` elements. You can pre-select options for the user with the `selected` attribute as part of the `<auro-menuoption>` API.

## Install instructions

The `<auro-select>` custom element is a combo-element using independent primitives for the most flexibility. To allow consumers the most control over the versioning their dependencies, `<auro-select>` requires the following peer dependencies along with `<auro-select>`.

```shell
$ npm i @aurodesignsystem/auro-select

$ npm i @aurodesignsystem/auro-dropdown
$ npm i @aurodesignsystem/auro-menu
```
