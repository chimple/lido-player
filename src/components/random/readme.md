# app-random



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description                                                                                                             | Type      | Default  |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- | --------- | -------- |
| `ariaHidden`  | `aria-hidden`   | The ARIA hidden attribute of the container. Used for accessibility to hide the element.                                 | `string`  | `''`     |
| `ariaLabel`   | `aria-label`    | The ARIA label of the container. Used for accessibility to indicate the purpose of the element.                         | `string`  | `''`     |
| `audio`       | `audio`         | URL or identifier for an audio file associated with the component.                                                      | `string`  | `''`     |
| `bgColor`     | `bg-color`      | Background color of the container (CSS color value, e.g., '#FFFFFF', 'blue').                                           | `string`  | `''`     |
| `height`      | `height`        | The height of the container (CSS value, e.g., '100px', '50%').                                                          | `string`  | `'auto'` |
| `id`          | `id`            | Unique identifier for the random container.                                                                             | `string`  | `''`     |
| `margin`      | `margin`        |                                                                                                                         | `string`  | `''`     |
| `maxDrops`    | `max-drops`     | The Maximum number of drag elements that can be dropped inside the Drop element.                                        | `number`  | `1`      |
| `minDrops`    | `min-drops`     | The minimum number of drag elements that must be dropped inside the Drop element.                                       | `number`  | `1`      |
| `onCorrect`   | `on-correct`    | Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.        | `string`  | `''`     |
| `onEntry`     | `on-entry`      | Event handler triggered when the component is entered (useful for animations or logic on entry).                        | `string`  | `''`     |
| `onInCorrect` | `on-in-correct` | Event handler for an Incorrect matching action, which can be used to trigger custom logic when the action is incorrect. | `string`  | `''`     |
| `onTouch`     | `on-touch`      | Event handler triggered when the component is touched or clicked.                                                       | `string`  | `''`     |
| `tabIndex`    | `tab-index`     | Tab index for keyboard navigation.                                                                                      | `number`  | `0`      |
| `type`        | `type`          | The type of the component, used for conditional logic or specific styling.                                              | `string`  | `''`     |
| `value`       | `value`         | Value associated with the component, often used for internal logic.                                                     | `string`  | `''`     |
| `visible`     | `visible`       | Controls the visibility of the container. If `true`, the container is visible; otherwise, it is hidden.                 | `boolean` | `false`  |
| `width`       | `width`         | The width of the container (CSS value, e.g., '100px', '50%').                                                           | `string`  | `'auto'` |
| `x`           | `x`             | X-axis (horizontal) position of the container (CSS value, e.g., '10px', '5vw').                                         | `string`  | `'0px'`  |
| `y`           | `y`             | Y-axis (vertical) position of the container (CSS value, e.g., '10px', '5vh').                                           | `string`  | `'0px'`  |
| `z`           | `z`             | Z-index for stacking order of the container relative to other elements.                                                 | `string`  | `'0'`    |


## Dependencies

### Used by

 - [lido-home](../home)

### Graph
```mermaid
graph TD;
  lido-home --> lido-random
  style lido-random fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
