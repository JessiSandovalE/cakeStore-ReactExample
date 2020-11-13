import { style } from "typestyle"
import { Font } from '../var'

export const styleViewProduct = style({
	minHeight: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent:'center',
	$nest: {
		'& .title': {
			width: '100%',
			padding: '30px 0',
			fontSize: Font.subtitle
		},
		'& .products': {
			display: 'flex',
			justifyContent: 'center',
			padding: '50px 0',
			$nest:{
				'& .list' :{
					width: '100%',
					maxWidth: '1024px',
					display: 'grid',
					gridTemplateColumns:'repeat(3,1fr)',
					gridGap: '20px',
					$nest: {
						'& .item': {
							display:'grid',
							$nest: {
								'& .info':{
									padding:'10px 0'
								},
								'& img': {
									width: '100%'
								}
							}
						}

					}
				}
			}
		}
	}
})