import VueTypes from 'vue-types'
import pick from 'lodash.pick'

import { getClass } from '../utils/getClass'
import { TagNameType, ViewportSizeType, ColumnSizeType } from '../utils/types'

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
}

export default {
  name: 'column',
  props: {
    tagName: TagNameType,
    xs: ColumnSizeType,
    sm: ColumnSizeType,
    md: ColumnSizeType,
    lg: ColumnSizeType,
    xl: ColumnSizeType,
    xsOffset: VueTypes.number,
    smOffset: VueTypes.number,
    mdOffset: VueTypes.number,
    lgOffset: VueTypes.number,
    xlOffset: VueTypes.number,
    first: ViewportSizeType,
    last: ViewportSizeType
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
      return pick(this.$props, Object.keys(classMap))
    },
    classNames: function () {
      const classNames = []
    
      if (this.first) {
        classNames.push(getClass('first-' + this.first));
      }
    
      if (this.last) {
        classNames.push(getClass('last-' + this.last));
      }
    
      for (let key in this.pickedProps) {
        const value = this.pickedProps[key]
        if (!!value) {
          classNames.push(getClass(classMap[key] + '-' + value))
        }
      }

      return classNames
    }
  }
}
