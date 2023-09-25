import HomePage from "../view"
import loginPage from "../view/login/login"
import BookPage from "../view/book"
import BookDetail from "../view/book/detail"
import other from "../view/other"
import animal from "../component/animal"
import SortChart from '../component/sort-chart'
import MyCanvas from '../component/animal/canvas'


const routers = [
  {
    name:'login',
    path:'/login',
    nohead:'true',
    components: loginPage
  },
  {
    name:'home',
    path:'/',
    components: HomePage
  },
  {
    name:'book',
    path:'/book',
    components: BookPage
  },
  {
    name:'bookdetail',
    path:'/book/detail',
    components: BookDetail
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
  {
    name:'css',
    path:'css',
    // components: MyCanvass
  },
]

export default routers