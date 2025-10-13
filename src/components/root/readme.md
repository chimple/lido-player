# app-root



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                | Type      | Default     |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `baseUrl`          | `base-url`           | Base URL for the containers.                                                                                                               | `string`  | `''`        |
| `canplay`          | `canplay`            | Boolean that controls the playability of the game.                                                                                         | `boolean` | `true`      |
| `exitButtonUrl`    | `exit-button-url`    | Custom URL for the Exit button icon. Falls back to the default icon if not provided or invalid.                                            | `string`  | `undefined` |
| `initialIndex`     | `initial-index`      | Initial index of the container being displayed.                                                                                            | `number`  | `0`         |
| `margin`           | `margin`             | CSS margin value applied to each child element inside the container. Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.). | `string`  | `''`        |
| `nextButtonUrl`    | `next-button-url`    | Custom URL for the Next button icon. Falls back to the default icon if not provided or invalid.                                            | `string`  | `undefined` |
| `prevButtonUrl`    | `prev-button-url`    | Custom URL for the Previous button icon. Falls back to the default icon if not provided or invalid.                                        | `string`  | `undefined` |
| `speakerButtonUrl` | `speaker-button-url` | Custom URL for the Speaker button icon. Falls back to the default icon if not provided or invalid.                                         | `string`  | `undefined` |
| `xmlPath`          | `xml-path`           | Prop to hold the XML file path or URL. This can be a relative path or an external URL.                                                     | `string`  | `''`        |


## Dependencies

### Depends on

- [lido-home](../home)

### Graph
```mermaid
graph TD;
  lido-root --> lido-home
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
  lido-home --> lido-math-matrix
  lido-home --> lido-calculator
  lido-keyboard --> lido-text
  lido-calculator --> lido-cell
  lido-calculator --> lido-text
  style lido-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
