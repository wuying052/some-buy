// import './index.css'
// import { Routes, Route } from "react-router-dom";
import MyCarousel from '../../component/Carousel/index.tsx'
import airpods from '../../assets/airpods.png'
import iphone from '../../assets/iphone.png'
import tablet from '../../assets/tablet.png'

const other = ()=>{
  const arr1 = [
    { title: 'xPhone',desc:'Lots to love. Less to spend.',prices:'Starting at $399.',style:{ color:'white',backgroundColor:'#101010'}, url: `url(${iphone})` },
    { title: 'Tablet',desc:'Just the right amount of everything.',prices:'',style:{color:'black'}, url: `url(${tablet})` }, 
    { title: 'Buy a Tablet or xPhone for college.Get arPods.',desc:'',prices:'',style:{color:'black'}, url: `url(${airpods})` }
  ]
  return (
    <div className='flex-page'>
      <div className='page-left'>
        <a >MyCarousel 组件</a>
      </div>
      <div className="page-right">
        <MyCarousel arr={arr1} />
      </div>
    </div>
  )
}

export default other