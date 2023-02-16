import HomePage from "../view"
import other from "../view/other"

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
]

export default routers