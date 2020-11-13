import {style} from 'typestyle'
import { Color, Font } from '../var'

export const productsStyle = style({
    width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	$nest: {
		'& .list': {
			width: '100%',
			maxWidth: '1024px',
			display: 'flex',
			padding: '50px 0px',
			justifyContent: 'space-between',
			flexDirection: 'column',
			$nest: {
				'& .item': {
					display:'flex',
					justifyContent: 'space-between',
					marginTop:'50px' ,
					'$nest':{
						'& .info': {
							width: '50%',
							$nest:{
								'& .title': {
									fontSize: Font.subtitle
								},
								'& .text': {
									fontSize: Font.normal,
									textAlign: 'left',
									padding: '30px 0'
								},
								'& .btn': {
									borderBottom: '1px solid',
									borderColor: Color.black,
									color: Color.black,
									width: '500px',
									$nest: {
										'&:hover':{
											backgroundColor:'rgba(246,217,233,1)'
										}
									}
								}
							}
						},
						'& img': {
							width: '40%'
						}
					}
				},
			}
		}
	}
})