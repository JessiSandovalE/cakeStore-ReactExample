import React from 'react'; 

import { bannerStyle }  from '../../style/banner/style';
import { Button } from '../../style/var';
import { Link } from 'react-router-dom'

const Banner = ({color, background, text , textButton, link}) => {
	return(
		<div className={`${bannerStyle}`} style={{backgroundImage: `url(${background})`}}>
			<div className="info">
				<div className="text" style= {{color: `${color}`}}>
						{text}
				</div>
				{textButton && <Link to={link} className={`${Button} btn`}>
							{textButton}
				</Link>
				}
			</div>

		</div>
	)
}

export default Banner