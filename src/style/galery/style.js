import { style } from "typestyle"

export const galeryStyle = style({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '10px',
    padding: '50px 0',
    $nest: {
        '& .item': {
            display:'grid',
            $nest: {
                '& img': {
                    width: '100%'
                }
            }
        }
    }
})