# app-container



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                      | Type      | Default     |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaHidden`       | `aria-hidden`        | The ARIA hidden attribute of the container. Used for accessibility to hide the element.                          | `string`  | `undefined` |
| `ariaLabel`        | `aria-label`         | The ARIA label of the container. Used for accessibility to indicate the purpose of the element.                  | `string`  | `undefined` |
| `audio`            | `audio`              | URL or identifier of an audio file associated with the container.                                                | `string`  | `undefined` |
| `bgColor`          | `bg-color`           | Background color of the container (CSS color value).                                                             | `string`  | `undefined` |
| `height`           | `height`             | The height of the container (CSS value).                                                                         | `string`  | `undefined` |
| `id`               | `id`                 | Unique identifier for the container.                                                                             | `string`  | `undefined` |
| `objective`        | `objective`          | Objective or purpose of the container. Can be used for internal logic or tracking.                               | `string`  | `undefined` |
| `onCorrectMatch`   | `on-correct-match`   | Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic. | `string`  | `undefined` |
| `onCorrectTouch`   | `on-correct-touch`   | Event handler for a Correct touch event, where a custom function can be triggered when the column is touched.    | `string`  | `undefined` |
| `onEntry`          | `on-entry`           | Event handler triggered when the container is entered, useful for triggering animations or logic.                | `string`  | `undefined` |
| `onIncorrectTouch` | `on-incorrect-touch` |                                                                                                                  | `string`  | `undefined` |
| `onMatch`          | `on-match`           | Event handler triggered when a specific match condition is met within the container.                             | `string`  | `undefined` |
| `onTouch`          | `on-touch`           | Event handler triggered when the container is touched or clicked.                                                | `string`  | `undefined` |
| `onWrong`          | `on-wrong`           |                                                                                                                  | `string`  | `undefined` |
| `tabIndex`         | `tab-index`          | TabIndex for keyboard navigation.                                                                                | `number`  | `undefined` |
| `type`             | `type`               | Type of the container, which can be used for conditional logic or styling purposes.                              | `string`  | `undefined` |
| `value`            | `value`              | Value assigned to the container. This can be used for logic related to this component.                           | `string`  | `undefined` |
| `visible`          | `visible`            | Visibility flag for the container. If `true`, the container is visible; otherwise, it is hidden.                 | `boolean` | `undefined` |
| `width`            | `width`              | The width of the container (CSS value).                                                                          | `string`  | `undefined` |
| `x`                | `x`                  | X-axis (horizontal) position of the container.                                                                   | `string`  | `undefined` |
| `y`                | `y`                  | Y-axis (vertical) position of the container.                                                                     | `string`  | `undefined` |
| `z`                | `z`                  | Z-index to control the stacking order of the container.                                                          | `string`  | `undefined` |


## Dependencies

### Used by

 - [app-home](../home)

### Graph
```mermaid
graph TD;
  app-home --> app-container
  style app-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
