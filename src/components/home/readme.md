# app-home



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                              | Type      | Default     |
| -------------- | --------------- | ---------------------------------------------------------------------------------------- | --------- | ----------- |
| `baseUrl`      | `base-url`      | Base URL for the containers.                                                             | `string`  | `''`        |
| `canplay`      | `canplay`       | Boolean that controls the playability of the game.                                       | `boolean` | `true`      |
| `initialIndex` | `initial-index` | Initial index of the container being displayed.                                          | `number`  | `0`         |
| `xmlData`      | `xml-data`      | XML data passed to the component, which is parsed and used to render various containers. | `string`  | `undefined` |


## Dependencies

### Used by

 - [app-root](../root)

### Depends on

- [app-container](../container)
- [app-col](../column)
- [app-trace](../trace)
- [app-image](../image)
- [app-row](../row)
- [app-text](../text)
- [app-pos](../position)
- [app-shape](../shape)
- [app-wrap](../wrap)
- [app-random](../random)

### Graph
```mermaid
graph TD;
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
  app-root --> app-home
  style app-home fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
