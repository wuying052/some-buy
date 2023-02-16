import MyCarousel from '../component/Carousel/index.tsx'
import airpods from '../assets/airpods.png'
import iphone from '../assets/iphone.png'
import tablet from '../assets/tablet.png'

const HomePage = ()=>{
  const arr1 = [
    { title: 'xPhone',desc:'Lots to love. Less to spend.',prices:'Starting at $399.',style:{ color:'white',backgroundColor:'#101010'}, url: `url(${iphone})` },
    { title: 'Tablet',desc:'Just the right amount of everything.',prices:'',style:{color:'black'}, url: `url(${tablet})` }, 
    { title: 'Buy a Tablet or xPhone for college.Get arPods.',desc:'',prices:'',style:{color:'black'}, url: `url(${airpods})` }
  ]
  return (
    <MyCarousel arr={arr1} />
  )
}
export default HomePage