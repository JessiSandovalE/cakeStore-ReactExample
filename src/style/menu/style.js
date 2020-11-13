import { style } from 'typestyle'
import { Color, Font } from '../var'

export const menuStyle = style({
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    zIndex: 10,
    position: 'fixed',
    backgroundColor:Color.white,
    borderBottom: '1px solid #CCCCCC',
    top: 0,
    $nest: {
        '& .fixed': {
        width: '100%',
        maxWidth: '1024px',
        padding: '20px',
        justifyContent: 'center',
        $nest:{
            '& .list':{
                display: 'flex',
                $nest: {
                    '& .link': {
                        padding: '0 10px',
                        color: Color.black,
                        textDecoration: 'none',
                        fontWeight: '400',
                        fontSize: Font.normal

                    }
                }
            }
        }
        }
    }
})