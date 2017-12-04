import VueTypes from 'vue-types'

export const TagNameType = VueTypes.string.def('div')
export const ViewportSizeType = VueTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
export const ColumnSizeType = VueTypes.oneOfType([VueTypes.number, VueTypes.bool])