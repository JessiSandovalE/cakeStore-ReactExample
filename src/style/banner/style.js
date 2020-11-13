import { style } from "typestyle"

import { Font} from '../var.js'

export const bannerStyle = style({
    width: '100%',
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    $nest: {
        '& .info': {
            width: '1024px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            $nest: {
                '& .text': {
                    width: '50%',
                    fontSize: Font.title,
                    textAlign: 'left'
                },
                '& .btn':{
                    width: '20%',
                    marginTop: '50px'
                }

            }
        }
    }
})