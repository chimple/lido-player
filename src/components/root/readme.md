# app-root



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                            | Type      | Default |
| -------------- | --------------- | -------------------------------------------------------------------------------------- | --------- | ------- |
| `baseUrl`      | `base-url`      | Base URL for the containers.                                                           | `string`  | `''`    |
| `canplay`      | `canplay`       | Boolean that controls the playability of the game.                                     | `boolean` | `true`  |
| `initialIndex` | `initial-index` | Initial index of the container being displayed.                                        | `number`  | `0`     |
| `xmlPath`      | `xml-path`      | Prop to hold the XML file path or URL. This can be a relative path or an external URL. | `string`  | `''`    |


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
  style lido-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
