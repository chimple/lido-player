# lido-balance



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                 | Type                | Default                                                                                                             |
| --------------- | ---------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `balanceSymbol` | `balance-symbol` | Balance symbol shown when `showSymbol` is true. Default: "=".                                               | `string`            | `'='`                                                                                                               |
| `fill`          | `fill`           | Fill color applied to all loaded SVGs (pivot, scale, handler). Defaults to "brown".                         | `string`            | `'brown'`                                                                                                           |
| `handlerimage`  | `handlerimage`   | URL of the handler (side stands / hooks) image for the balance.                                             | `string`            | `'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Stands.svg'`          |
| `height`        | `height`         | CSS height of the component (responsive values allowed). Default: "auto".                                   | `string`            | `'auto'`                                                                                                            |
| `margin`        | `margin`         | CSS margin applied to the outer container.                                                                  | `string`            | `''`                                                                                                                |
| `maxTilt`       | `max-tilt`       | Maximum allowed tilt angle (in degrees) for the balance bar.                                                | `number`            | `9.5`                                                                                                               |
| `onEntry`       | `on-entry`       | Action(s) to execute when the component enters the DOM. Example: trigger animations or audio cues.          | `string`            | `''`                                                                                                                |
| `operation`     | `operation`      | Operation type used to calculate balance values. Supported: "count", "add", "subtract", etc.                | `string`            | `'count'`                                                                                                           |
| `padding`       | `padding`        | CSS padding applied to the outer container.                                                                 | `string`            | `''`                                                                                                                |
| `pivotimage`    | `pivotimage`     | URL of the pivot (base stand) image used in the balance visualization.                                      | `string`            | `'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Display%20stand.svg'` |
| `scaleimage`    | `scaleimage`     | URL of the scale (bar) image that tilts based on the weight difference.                                     | `string`            | `'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Bar.svg'`             |
| `showSymbol`    | `show-symbol`    | Whether the balance symbol is currently displayed. Can be toggled with `revealSymbol()` and `hideSymbol()`. | `boolean`           | `false`                                                                                                             |
| `tilt`          | `tilt`           | Initial tilt value of the balance. Negative = tilts left, Positive = tilts right.                           | `number`            | `0`                                                                                                                 |
| `visible`       | `visible`        | Controls component visibility. Accepts boolean (`true`/`false`) or string ("true"/"false").                 | `boolean \| string` | `false`                                                                                                             |
| `width`         | `width`          | CSS width of the component (responsive values allowed). Default: "auto".                                    | `string`            | `'auto'`                                                                                                            |
| `x`             | `x`              | Horizontal (X-axis) offset for positioning the component. Default: "0px".                                   | `string`            | `'0px'`                                                                                                             |
| `y`             | `y`              | Vertical (Y-axis) offset for positioning the component. Default: "0px".                                     | `string`            | `'0px'`                                                                                                             |
| `z`             | `z`              | Z-index for stacking order of the component. Default: "0".                                                  | `string`            | `'0'`                                                                                                               |


## Methods

### `hideSymbol() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `revealSymbol() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `updateTilt(leftVal: number, rightVal: number) => Promise<void>`



#### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `leftVal`  | `number` |             |
| `rightVal` | `number` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
