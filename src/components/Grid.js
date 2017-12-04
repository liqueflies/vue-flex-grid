import VueTypes from 'vue-types'

import { getClass } from '../utils/getClass'
import { TagNameType } from '../utils/types'

export default {
  name: 'grid',
  props: {
    tagName: TagNameType,
    fluid: VueTypes.bool
  },
  render: function (createElement) {
    return createElement(this.tagName, {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classNames
    }, this.$slots.default)
  },
  computed: {
    classNames: function () {
      return getClass(this.fluid ? 'container-fluid' : 'container')
    }
  }
}
