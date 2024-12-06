# app-pos



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description                                                                                                             | Type      | Default     |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaHidden`  | `aria-hidden`   | The ARIA hidden attribute of the container. Used for accessibility to hide the element.                                 | `string`  | `undefined` |
| `ariaLabel`   | `aria-label`    | The ARIA label of the container. Used for accessibility to indicate the purpose of the element.                         | `string`  | `undefined` |
| `audio`       | `audio`         | URL or identifier for an audio file associated with the component.                                                      | `string`  | `undefined` |
| `bgColor`     | `bg-color`      | Background color of the component (CSS color value, e.g., '#FFFFFF', 'blue').                                           | `string`  | `undefined` |
| `height`      | `height`        | The height of the component (CSS value, e.g., '100px', '50%').                                                          | `string`  | `undefined` |
| `id`          | `id`            | Unique identifier for the positional element.                                                                           | `string`  | `undefined` |
| `onCorrect`   | `on-correct`    | Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.        | `string`  | `undefined` |
| `onEntry`     | `on-entry`      | Event handler triggered when the component is entered, often used to trigger animations or custom logic.                | `string`  | `undefined` |
| `onInCorrect` | `on-in-correct` | Event handler for an Incorrect matching action, which can be used to trigger custom logic when the action is incorrect. | `string`  | `undefined` |
| `onMatch`     | `on-match`      | Event handler triggered when a matching action occurs (e.g., custom logic for interactions).                            | `string`  | `undefined` |
| `onTouch`     | `on-touch`      | Event handler triggered when the component is touched or clicked.                                                       | `string`  | `undefined` |
| `tabIndex`    | `tab-index`     | Tab index to support keyboard navigation within the component.                                                          | `number`  | `undefined` |
| `type`        | `type`          | The type of the component, used for conditional logic or specific styles.                                               | `string`  | `undefined` |
| `value`       | `value`         | Value assigned to the component, often used for internal logic or data tracking.                                        | `string`  | `undefined` |
| `visible`     | `visible`       | Visibility flag to control whether the element is displayed (`true`) or hidden (`false`).                               | `boolean` | `undefined` |
| `width`       | `width`         | The width of the component (CSS value, e.g., '100px', '50%').                                                           | `string`  | `undefined` |
| `x`           | `x`             | X-axis (horizontal) position of the component (CSS value, e.g., '10px', '5vw').                                         | `string`  | `undefined` |
| `y`           | `y`             | Y-axis (vertical) position of the component (CSS value, e.g., '10px', '5vh').                                           | `string`  | `undefined` |
| `z`           | `z`             | Z-index for stacking order of the element relative to others.                                                           | `string`  | `undefined` |


## Dependencies

### Used by

 - [app-home](../home)

### Graph
```mermaid
graph TD;
  app-home --> app-pos
  style app-pos fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
