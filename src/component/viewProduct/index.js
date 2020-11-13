import React, {useContext} from 'react'
//Style
import {styleViewProduct} from '../../style/viewProduct/style'
//component
import Banner from '../banner/index'
//Context
import { ProductsContext } from '../../context/products/index'
const  ViewProduct = () => {
	const {
		View,
		ColorView,
		TextView,
		cookies,
		cake,
		chocolate,
		banner
	} = useContext(ProductsContext)
	let list =  View === 'cookies' ? cookies : View ==='cake' ? cake :chocolate

	return(
		<div className={styleViewProduct}>
			<Banner 
			background={banner}
			/>
			<div className="title" style={{ backgroundColor: ColorView }}>
					{TextView.title2}
			</div>
			<div className="products">
				<div className="list">
				{list && list.map((item, i) => <div key={i} className='item'>
					<img src={item.img} alt=""/>
					<div className="info">
						<div className="name">
							{item.title}
						</div>
						<div className="price">
							{item.price}
						</div>
					</div>
				</div>
				)}
				</div>
			</div>
		</div>
	)
}

export default ViewProduct