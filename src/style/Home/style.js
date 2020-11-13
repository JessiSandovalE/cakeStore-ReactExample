import { style }  from 'typestyle'
import { Color, Font } from '../var'

export const homeStyle = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	$nest: {
		'& .bestSeller': {
			width: '100%',
			maxWidth: '1024px',
			padding: '50px 0',

			$nest: {
				'& .subtitle': {
					fontSize: Font.subtitle,
					marginBottom: '20px'
				},
				'& .text': {
					fontSize: Font.normal,
					marginBottom: '40px'
				},
				'& .products': {
					display: 'grid',
					gridTemplateColumns: 'repeat(3,1fr)',
					gridGap:'30px',
					$nest: {
						'& .item': {
							$nest: {
								'& img': {
									width: '100%'
								},
								'& .name': {
									marginTop: '10px'
								},
								'& .price': {
									marginTop: '10px'
								}
							}
							}
					}
				}
			}
		},
		'& .galery': {
			width: '1024px',
			borderTop: '1px solid #000',
			padding: '50px 0px',
			$nest: {
				'& .title': {
					fontSize: Font.subtitle,
					marginBottom: '20px'
				}
			}
		}
	}
})