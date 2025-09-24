# app-home



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                         | Type      | Default     |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `baseUrl`          | `base-url`           | Base URL for the containers.                                                                        | `string`  | `''`        |
| `canplay`          | `canplay`            | Boolean that controls the playability of the game.                                                  | `boolean` | `true`      |
| `exitButtonUrl`    | `exit-button-url`    | Custom URL for the Exit button icon. Falls back to the default icon if not provided or invalid.     | `string`  | `undefined` |
| `height`           | `height`             | The height of the container (CSS value).                                                            | `string`  | `''`        |
| `initialIndex`     | `initial-index`      | Initial index of the container being displayed.                                                     | `number`  | `0`         |
| `nextButtonUrl`    | `next-button-url`    | Custom URL for the Next button icon. Falls back to the default icon if not provided or invalid.     | `string`  | `undefined` |
| `prevButtonUrl`    | `prev-button-url`    | Custom URL for the Previous button icon. Falls back to the default icon if not provided or invalid. | `string`  | `undefined` |
| `speakerButtonUrl` | `speaker-button-url` | Custom URL for the Speaker button icon. Falls back to the default icon if not provided or invalid.  | `string`  | `undefined` |
| `xmlData`          | `xml-data`           | XML data passed to the component, which is parsed and used to render various containers.            | `string`  | `''`        |


## Dependencies

### Used by

 - [lido-root](../root)

### Depends on

- [lido-container](../container)
- [lido-flash-card](../flashCard)
- [lido-col](../column)
- [lido-trace](../trace)
- [lido-image](../image)
- [lido-row](../row)
- [lido-text](../text)
- [lido-pos](../position)
- [lido-shape](../shape)
- [lido-wrap](../wrap)
- [lido-random](../random)
- [lido-avatar](../avatar)
- [lido-cell](../cell)
- [lido-slide-fill](../slideFill)
- [lido-float](../float)
- [lido-keyboard](../keyboard)
- [lido-balance](../scale)

### Graph
```mermaid
graph TD;
  lido-home --> lido-container
  lido-home --> lido-flash-card
  lido-home --> lido-col
  lido-home --> lido-trace
  lido-home --> lido-image
  lido-home --> lido-row
  lido-home --> lido-text
  lido-home --> lido-pos
  lido-home --> lido-shape
  lido-home --> lido-wrap
  lido-home --> lido-random
  lido-home --> lido-avatar
  lido-home --> lido-cell
  lido-home --> lido-slide-fill
  lido-home --> lido-float
  lido-home --> lido-keyboard
  lido-home --> lido-balance
  lido-keyboard --> lido-text
  lido-root --> lido-home
  style lido-home fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
