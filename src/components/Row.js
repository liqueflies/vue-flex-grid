import VueTypes from 'vue-types'
import pick from 'lodash.pick'

import { getClass } from '../utils/getClass'
import { ViewportSizeType, TagNameType } from '../utils/types'

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between']

export default {
  name: 'row',
  props: {
    reverse: VueTypes.bool,
    tagName: TagNameType,
    start: ViewportSizeType,
    center: ViewportSizeType,
    end: ViewportSizeType,
    top: ViewportSizeType,
    middle: ViewportSizeType,
    bottom: ViewportSizeType,
    around: ViewportSizeType,
    between: ViewportSizeType
  },
  render: function (createElement) {
    return createElement(this.tagName, {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classNames
    }, this.$slots.default)
  },
  computed: {
    pickedProps: function () {
      return pick(this.$props, rowKeys)
    },
    classNames: function () {
      const classNames = [getClass('row')]

      for (const key in this.pickedProps) {
        const value = this.pickedProps[key]
        if (value) {
          classNames.push(getClass(`${key}-${value}`))
        }
      }

      if (this.reverse) {
        classNames.push(getClass('reverse'))
      }

      return classNames
    }
  }
}
