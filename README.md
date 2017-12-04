# vue-flex-grid

> A powerful flexbox grid system for Vue.js 2.x, based on [flexboxgrid](http://flexboxgrid.com/) and css-modules.

## Installation
``` bash
  npm install @liqueflies/vue-flex-grid --save
  # or
  yarn add @liqueflies/vue-flex-grid
```

## Example usage

```js
import VueGrid from '@liqueflies/vue-flex-grid'

Vue.use(VueGrid)
```

This instruction will install 3 components, `Grid`, `Row`, `Column`.
Please refer to [Documentation](docs/main.md) for more details.

An example of code using `vue-grid`:

```html
<grid>
  <row>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
  </row>
</grid>
```

## Documentation

#### [View the Documentation](docs/main.md)

## Examples

``` bash
  npm run examples
```

## Credits

Inpired by [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Lorenzo Girardi