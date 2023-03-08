import HomePage from "../view"
import other from "../view/other"
import animal from "../component/animal"

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
]

export default routers