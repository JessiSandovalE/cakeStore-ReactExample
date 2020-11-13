import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
//Style
import {productsStyle} from '../../style/products/style'
import { Button } from '../../style/var'
//Components
import Banner from '../banner/index'
import Galery from '../galery/index'
//Context
import {ProductsContext} from '../../context/products/index'

const Products = ()=> {
	const  {
		list,
		setView,
		setColorView,
		setTextView,
		setBanner,
		listProduct
	} =  useContext(ProductsContext)

	const loader = product => {
		setView(product.type)
		setColorView(product.color)
		setTextView({title: product.title, title2: product.phrase})
		setBanner(product.banner)
		window.scrollTo(0,0)
	}
	return (
		<div className={productsStyle}>
			<Banner
				background='https://static.wixstatic.com/media/f61af8_c8c41a32bb184101817e356580044a1f~mv2_d_2540_1400_s_2.jpg/v1/fill/w_1260,h_700,al_c,q_85,usm_0.66_1.00_0.01/f61af8_c8c41a32bb184101817e356580044a1f~mv2_d_2540_1400_s_2.webp'
				text = 'PRODUCTOS HECHOS CON AMOR'
				color = 'white'
			/>
			<div className="list">
			{list.map((item, i)=>
			<div className="item" key={i}>
				<div className="info">
					<div className="title">{item.title}</div>
					<div className="text">{item.text}</div>
					<Link to={`/ViewProduct#${item.type}`} onClick={ ()=> loader(item)} className={`${Button} btn`}>
							{item.button}
						</Link>
				</div>
					<img src={item.img} alt=""/>
			</div>
			)}
			</div>
			<div className="galery">
				<Galery list={listProduct} />
			</div>
		</div>
	)
}

export default Products