# app-root



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                            | Type      | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------- | --------- | ----------- |
| `baseUrl`      | `base-url`      | Base URL for the containers.                                                           | `string`  | `''`        |
| `canplay`      | `canplay`       | Boolean that controls the playability of the game.                                     | `boolean` | `true`      |
| `initialIndex` | `initial-index` | Initial index of the container being displayed.                                        | `number`  | `0`         |
| `xmlPath`      | `xml-path`      | Prop to hold the XML file path or URL. This can be a relative path or an external URL. | `string`  | `undefined` |


## Dependencies

### Depends on

- [app-home](../home)

### Graph
```mermaid
graph TD;
  app-root --> app-home
  app-home --> app-container
  app-home --> app-col
  app-home --> app-trace
  app-home --> app-image
  app-home --> app-row
  app-home --> app-text
  app-home --> app-pos
  app-home --> app-shape
  app-home --> app-wrap
  app-home --> app-random
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
