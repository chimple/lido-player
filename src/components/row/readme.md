# app-row



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                            | Type      | Default     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `audio`    | `audio`     | URL or identifier of an audio file associated with the row.                                            | `string`  | `undefined` |
| `bgColor`  | `bg-color`  | Background color of the row (CSS color value, e.g., '#FFFFFF', 'blue').                                | `string`  | `undefined` |
| `height`   | `height`    | The height of the row (CSS value, e.g., '100px', '50%').                                               | `string`  | `undefined` |
| `onEntry`  | `on-entry`  | Event handler triggered when the row is entered, often used for triggering animations or custom logic. | `string`  | `undefined` |
| `onMatch`  | `on-match`  | Event handler triggered when a matching action occurs within the row.                                  | `string`  | `undefined` |
| `onTouch`  | `on-touch`  | Event handler triggered when the row is touched or clicked.                                            | `string`  | `undefined` |
| `tabIndex` | `tab-index` | Tab index for keyboard navigation.                                                                     | `number`  | `undefined` |
| `type`     | `type`      | Defines the type of the row, used for conditional logic or specific styling.                           | `string`  | `undefined` |
| `value`    | `value`     | Value associated with the row, typically used for internal logic or data.                              | `string`  | `undefined` |
| `visible`  | `visible`   | Controls the visibility of the row. If `true`, the row is visible; otherwise, it is hidden.            | `boolean` | `undefined` |
| `width`    | `width`     | The width of the row (CSS value, e.g., '100px', '50%').                                                | `string`  | `undefined` |
| `x`        | `x`         | X-axis (horizontal) position of the row (CSS value, e.g., '10px', '5vw').                              | `string`  | `undefined` |
| `y`        | `y`         | Y-axis (vertical) position of the row (CSS value, e.g., '10px', '5vh').                                | `string`  | `undefined` |
| `z`        | `z`         | Z-index for stacking order of the row relative to other elements.                                      | `string`  | `undefined` |


## Dependencies

### Used by

 - [app-home](../home)

### Graph
```mermaid
graph TD;
  app-home --> app-row
  style app-row fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
