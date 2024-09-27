# app-shape



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                             | Type      | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaHidden` | `aria-hidden` | The ARIA hidden attribute of the container. Used for accessibility to hide the element.                 | `string`  | `undefined` |
| `ariaLabel`  | `aria-label`  | The ARIA label of the container. Used for accessibility to indicate the purpose of the element.         | `string`  | `undefined` |
| `audio`      | `audio`       | URL or identifier for an audio file associated with the shape.                                          | `string`  | `undefined` |
| `bgColor`    | `bg-color`    | Background color of the shape (CSS color value, e.g., '#FFFFFF', 'blue'). This is ignored for polygons. | `string`  | `undefined` |
| `height`     | `height`      | The height of the shape (CSS value, e.g., '100px', '50%'). This is ignored for polygons.                | `string`  | `undefined` |
| `id`         | `id`          | Unique identifier for the shape element.                                                                | `string`  | `undefined` |
| `onEntry`    | `on-entry`    | Event handler triggered when the shape is entered (useful for animations or logic on entry).            | `string`  | `undefined` |
| `onMatch`    | `on-match`    | Event handler triggered when a matching action occurs with the shape.                                   | `string`  | `undefined` |
| `onTouch`    | `on-touch`    | Event handler triggered when the shape is touched or clicked.                                           | `string`  | `undefined` |
| `shapeType`  | `shape-type`  | Type of shape to render (e.g., 'circle', 'rectangle', 'polygon').                                       | `string`  | `undefined` |
| `tabIndex`   | `tab-index`   | Tab index for keyboard navigation.                                                                      | `number`  | `undefined` |
| `type`       | `type`        | Defines the type of the shape, which can be used for conditional logic or specific styling.             | `string`  | `undefined` |
| `value`      | `value`       | Value associated with the shape, typically used for internal logic or tracking.                         | `string`  | `undefined` |
| `visible`    | `visible`     | Controls the visibility of the shape. If `true`, the shape is visible; otherwise, it is hidden.         | `boolean` | `undefined` |
| `width`      | `width`       | The width of the shape (CSS value, e.g., '100px', '50%'). This is ignored for polygons.                 | `string`  | `undefined` |
| `x`          | `x`           | X-axis (horizontal) position of the shape (CSS value, e.g., '10px', '5vw').                             | `string`  | `undefined` |
| `y`          | `y`           | Y-axis (vertical) position of the shape (CSS value, e.g., '10px', '5vh').                               | `string`  | `undefined` |
| `z`          | `z`           | Z-index for stacking order of the shape relative to other elements.                                     | `string`  | `undefined` |


## Dependencies

### Used by

 - [app-home](../home)

### Graph
```mermaid
graph TD;
  app-home --> app-shape
  style app-shape fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
