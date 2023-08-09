import HomePage from "../view"
import other from "../view/other"
import animal from "../component/animal"
import SortChart from '../component/sort-chart'
import MyCanvas from '../component/animal/canvas'

const routers = [
  {
    name:'home',
    path:'/',
    components: HomePage
  },
  {
    name:'other',
    path:'other',
    components: other
  },
  {
    name:'animal',
    path:'animation',
    components: animal
  },
  {
    name:'sort',
    path:'sort',
    components: SortChart
  },
  {
    name:'canvas',
    path:'canvas',
    components: MyCanvas
  },
]

export default routers