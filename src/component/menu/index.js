import React , {useRef} from 'react'
import { Link } from 'react-router-dom';
import {menuStyle} from '../../style/menu/style'
const Menu = () => {
	const refFixed = useRef(null)
	return  (
		<div className={menuStyle}>
			<div ref={refFixed} className='fixed' >
				<div className='list' >
					<Link className="link" to='/'onClick={() => window.scrollTo(0, 0,)}>Inicio</Link> 
					<Link className="link" to='/products' onClick={() => window.scrollTo(0, 0,)}>Productos</Link> 
				</div>
			</div>
		</div>
	)
}

export default Menu