import React , { useContext } from 'react'
//Components
import Banner from '../banner/index'
import Galery from '../galery/index'
//Context
import { HomeContext } from '../../context/home'
//Styles
import  { homeStyle }  from '../../style/Home/style'


const Home = () => {
  const {
   product,
   listProduct
} = useContext(HomeContext)
  console.log(product)
  return (
    <div className={homeStyle}>
      <Banner
        background='https://static.wixstatic.com/media/f61af8_3efc4110eb6c4037a2b3eea83e07e793~mv2_d_2701_1591_s_2.jpg/v1/fill/w_1260,h_700,al_c,q_85,usm_0.66_1.00_0.01/f61af8_3efc4110eb6c4037a2b3eea83e07e793~mv2_d_2701_1591_s_2.webp'
        text = '100% NATURAL. HOMEMADE FRESH PRODUCTS'
        color = 'white'
        textButton= 'Ver Productos'
        link ="/products"
      />
      <div className="bestSeller">
        <div className="subtitle"> / MÁS VENDIDOS</div>
        <div className="text"> Conoce nuestros productos más vendidos</div>
        <div className="products">
          {product.map((product, i)=>
            <div className="item" key={i}>
              <img src={product.img} alt= {product.title}/>
              <div className="name">{product.title}</div>
              <div className="price">{product.price} </div>
             </div>
          )}
        </div>
      </div>
      <div className="galery">
        <div className="title">/ SIGUENOS PARA MÁS PRODUCTOS</div>
        <Galery list={listProduct} />
      </div>
      
    </div>

  
  )
}

export default Home