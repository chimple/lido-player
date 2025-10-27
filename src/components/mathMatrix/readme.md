# lido-math-matrix



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                      | Type      | Default             |
| ------------------- | --------------------- | ---------------------------------------------------------------- | --------- | ------------------- |
| `activeBgColor`     | `active-bg-color`     | Background color for active slots                                | `string`  | `'transparent'`     |
| `activeOnlyVisible` | `active-only-visible` | If true, only active slots are visible; inactive ones are hidden | `boolean` | `false`             |
| `border`            | `border`              | Border style applied to each slot                                | `string`  | `'2px solid green'` |
| `borderRadius`      | `border-radius`       | Border radius for each slot                                      | `string`  | `'5px'`             |
| `bottomIndex`       | `bottom-index`        | Show row index numbers on the bottom side                        | `boolean` | `false`             |
| `clickable`         | `clickable`           | Enable/disable click interactions on the slots                   | `boolean` | `true`              |
| `cols`              | `cols`                | Number of columns in the matrix                                  | `number`  | `5`                 |
| `deactiveBgColor`   | `deactive-bg-color`   | Background color for inactive slots                              | `string`  | `'transparent'`     |
| `defualtFill`       | `defualt-fill`        | Number of slots to pre-fill as active by default                 | `number`  | `0`                 |
| `height`            | `height`              | Height of the slot container                                     | `string`  | `'100%'`            |
| `leftIndex`         | `left-index`          | Show row index numbers on the left side                          | `boolean` | `false`             |
| `margin`            | `margin`              | Margin around the matrix container                               | `string`  | `undefined`         |
| `matrixImage`       | `matrix-image`        | Image source used inside the slots                               | `string`  | `undefined`         |
| `padding`           | `padding`             | Padding inside the matrix container                              | `string`  | `undefined`         |
| `rows`              | `rows`                | Number of rows in the matrix                                     | `number`  | `7`                 |
| `tabIndex`          | `tab-index`           |                                                                  | `number`  | `undefined`         |
| `text`              | `text`                |                                                                  | `string`  | `undefined`         |
| `topIndex`          | `top-index`           | Show column index numbers on the top side                        | `boolean` | `false`             |
| `type`              | `type`                |                                                                  | `string`  | `undefined`         |
| `value`             | `value`               |                                                                  | `string`  | `undefined`         |
| `visible`           | `visible`             | Controls visibility of the matrix (string "true" or "false")     | `string`  | `'false'`           |
| `width`             | `width`               | Width of the slot container                                      | `string`  | `'100%'`            |
| `z`                 | `z`                   | Z-index value for the matrix container                           | `string`  | `undefined`         |


## Dependencies

### Used by

 - [lido-home](../home)

### Graph
```mermaid
graph TD;
  lido-home --> lido-math-matrix
  style lido-math-matrix fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
