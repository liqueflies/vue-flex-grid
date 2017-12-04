import Grid from './components/Grid'
import Row from './components/Row'
import Column from './components/Column'

const VueGrid = {
  install (Vue) {
    Vue.component(Grid.name, Grid)
    Vue.component(Row.name, Row)
    Vue.component(Column.name, Column)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGrid)
}

export { Grid, Row, Column }
export default VueGrid
