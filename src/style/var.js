import {style} from "typestyle"

//COLORS

export const Color = {
    white: '#ffffff',
    black: '#000000'
}

export const Font = {
    title: '58px',
    subtitle: '30px',
    normal: '18px',
    mini: '15px',
}

export const Button = style({
    minWidth: '300px',
    padding: '15px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: Color.white,
    fontSize: Font.mini,
    appearance: 'none',
    border: 'none',
    $nest: {
        '&:focus': {
            outline: 'none'
        }
    }
})