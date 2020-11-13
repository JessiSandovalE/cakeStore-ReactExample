import React, {createContext, useState} from 'react'
const ProductsContext = createContext()
const { Provider, Consumer } = ProductsContext

const ProductsProvider = ({children}) => {
    const [list, setList] = useState([
        {
            img: 'https://cdn.pixabay.com/photo/2017/07/28/14/12/macarons-2548777_960_720.jpg',
            title: 'Galletas',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor leo, class rutrum sollicitudin. Vehicula dui luctus arcu tincidunt natoque montes turpis, habitasse fusce scelerisque cursus dapibus blandit curae nibh, euismod in himenaeos phasellus a senectus. Primis senectus donec vel nullam feugiat ut inceptos quis, magna dapibus habitant augue parturient imperdiet mollis, pretium lobortis dignissim bibendum felis elementum dictum',
            button: 'Ir a Galletas',
            phrase: '/ ELIGE TU GALLETA',
            type: 'cookies',
            banner: 'https://cdn.pixabay.com/photo/2019/02/08/22/28/valentines-day-3984154_960_720.jpg',
            color:'#F0CAE0'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2014/10/13/16/11/cake-486874_960_720.jpg',
            title: 'Tortas',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor leo, class rutrum sollicitudin. Vehicula dui luctus arcu tincidunt natoque montes turpis, habitasse fusce scelerisque cursus dapibus blandit curae nibh, euismod in himenaeos phasellus a senectus. Primis senectus donec vel nullam feugiat ut inceptos quis, magna dapibus habitant augue parturient imperdiet mollis, pretium lobortis dignissim bibendum felis elementum dictum',
            button: 'Ir a Tortas',
            phrase: '/ ELIGE TU TORTA',
            type: 'cake',
            banner: 'https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_960_720.jpg',
            color:'#CACAE6'
        },
        {
            img: 'https://www.pazchocolatier.com/638-tm_home_default/bombones-chocolate-rellenos-25-unidades.jpg',
            title: 'Chocolates',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor leo, class rutrum sollicitudin. Vehicula dui luctus arcu tincidunt natoque montes turpis, habitasse fusce scelerisque cursus dapibus blandit curae nibh, euismod in himenaeos phasellus a senectus. Primis senectus donec vel nullam feugiat ut inceptos quis, magna dapibus habitant augue parturient imperdiet mollis, pretium lobortis dignissim bibendum felis elementum dictum',
            button: 'Ir a Chocolates',
            phrase: '/ ELIGE TUS CHOCOLATES ',
            type: 'chocolate',
            banner: 'https://cdn.pixabay.com/photo/2017/11/20/16/59/praline-2966091_960_720.jpg',
            color: '#ACBEE8'
        },
    ])
    const [cookies, setCookies] = useState([
        {
            img: 'https://static.wixstatic.com/media/f61af8_353b9c005467422b80eefb54a30d80d4~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_353b9c005467422b80eefb54a30d80d4~mv2.webp',
            title: 'JAM & POPPY SEED BITES',
            price: '$ 1.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_e97476d90037447dbcbd4cf42ef5d564~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_e97476d90037447dbcbd4cf42ef5d564~mv2.webp',
            title: 'POPPY SEED BITES',
            price: '$2.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_11c55770394e448ab875cf13a837d2b7~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_11c55770394e448ab875cf13a837d2b7~mv2.webp',
            title: 'OATMEAL BITES',
            price: '$2.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_1b3458bed72c4f5290fc0c834f8aeb22~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_1b3458bed72c4f5290fc0c834f8aeb22~mv2.webp',
            title: 'SOFT BUTTER COOKIES',
            price: '$2.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_f51f8bed00c540d5a0b0fe652758167b~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_f51f8bed00c540d5a0b0fe652758167b~mv2.webp',
            title: 'PARMESAN BITES',
            price: '$2.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_16af665135c44689825e77f8bcc68492~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_16af665135c44689825e77f8bcc68492~mv2.webp',
            title: 'WHITE CHOCOLATE BITES',
            price: '$1.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_7e8a55c41c0e4c378b7297dbcdced9eb~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_7e8a55c41c0e4c378b7297dbcdced9eb~mv2.webp',
            title: 'JAM BITS',
            price: '$1.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_ec5c841b9cf643b186e85ba89b332a05~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_ec5c841b9cf643b186e85ba89b332a05~mv2.webp',
            title: 'CHOCOLATE CHIPS',
            price: '$2.00'
        },
        {
            img:'https://static.wixstatic.com/media/f61af8_2cf5a2ff20e54e029f48ca64373b2dab~mv2.png/v1/fill/w_310,h_310,al_c,q_85,usm_0.66_1.00_0.01/f61af8_2cf5a2ff20e54e029f48ca64373b2dab~mv2.webp',
            title:'NUTS & CARAMEL BITES',
            price: '$2.00'
        }
    ])
    const [cake,setCake] = useState([
        {
            img: 'https://monstercakes.com.co/425-home_default/torta-de-twix-.jpg',
            title: 'TWIX',
            price: '$ 20.00'
        },
        {
            img: 'https://monstercakes.com.co/625-home_default/tres-leches-de-cookies-and-cream-.jpg',
            title: 'COOKIES AND CREAM',
            price: '$ 15.00'
        },
        {
            img: 'https://monstercakes.com.co/619-home_default/tres-leches-de-ron-con-pasas.jpg',
            title: 'RON CON PASAS',
            price: '$ 15.00'
        },
        {
            img: 'https://monstercakes.com.co/556-home_default/torta-de-banana-split-con-crema-de-cheesecake-chocolate-y-fresa.jpg',
            title: 'BANANA SPLIT',
            price: '$ 15.00'
        },
        {
            img: 'https://monstercakes.com.co/394-home_default/torta-de-yogur-de-frutos-del-bosque-con-semillas-de-chia.jpg',
            title: 'FRUTOS DEL BOSQUE',
            price: '$ 15.00'
        },
        {
            img: 'https://monstercakes.com.co/530-home_default/mini-torta-arequipe-burbuja.jpg',
            title: 'MINI TORTA AREQUIPE BURBUJA',
            price: '$ 15.00'
        },
    ])
    const [chocolate,setChocolate] = useState([
        {
            img:'https://www.pazchocolatier.com/479-tm_large_default/bombon-relleno-fresa-naranja-frambuesa.jpg',
            title:'BOMBÓN DE FRAMBUESA',
            price:'$1.00'
        },
        {
            img:'https://www.pazchocolatier.com/360-tm_home_default/bombon-chocolate-relleno-dulce-de-leche.jpg',
            title:'BOMBÓN DULCE DE LECHE',
            price:'$1.00'
        },
        {
            img:'https://www.pazchocolatier.com/380-tm_home_default/chocolate-trufa-relleno-cafe-bombon.jpg',
            title:'BOMBÓN DE CAFÉ',
            price:'$1.00'
        },
        {
            img:'https://www.pazchocolatier.com/523-tm_home_default/bombon-relleno-fresa-naranja-mora.jpg',
            title:'BOMBÓN DE MORA',
            price:'$5.00'
        },
        {
            img:'https://www.pazchocolatier.com/464-tm_home_default/chocolate-bombon-relleno-yerbabuena.jpg',
            title:'BOMBÓN DE NARANJA',
            price:'$5.00'
        },
        {
            img:'https://www.pazchocolatier.com/376-tm_home_default/chocolate-bombon-relleno-ron.jpg',
            title:'BOMBÓN DE AMARETO',
            price:'$5.00'
        },
        {
            img:'https://www.pazchocolatier.com/406-tm_home_default/bombones-relleno-maracuya.jpg',
            title:'BOMBÓN DE MARACUYA',
            price:'$5.00'
        }

    ])
    const [banner, setBanner] = useState(null)
    const [View, setView] = useState(null)
    const [ColorView, setColorView] = useState(null)
    const [TextView, setTextView] = useState({title:null, title2:null})
    const [listProduct, setListProduct] = useState([
        {img:'https://static.parastorage.com/services/instagram-cdn/1.531.0/assets/ig-templates-accounts/Editor/Homemade Cookie Store/09.jpg' },
        {img: 'https://static.parastorage.com/services/instagram-cdn/1.531.0/assets/ig-templates-accounts/Editor/Homemade Cookie Store/08.jpg'},
        {img: 'https://static.parastorage.com/services/instagram-cdn/1.531.0/assets/ig-templates-accounts/Editor/Homemade Cookie Store/09.jpg'},
        {img: 'https://static.parastorage.com/services/instagram-cdn/1.531.0/assets/ig-templates-accounts/Editor/Homemade Cookie Store/04.jpg'},
        {img: 'https://static.parastorage.com/services/instagram-cdn/1.531.0/assets/ig-templates-accounts/Editor/Homemade Cookie Store/05.jpg'},
        {img: 'https://static.parastorage.com/services/instagram-cdn/1.531.0/assets/ig-templates-accounts/Editor/Homemade Cookie Store/06.jpg'}
    ])
    return(
        <Provider
        value= {{
            list, setList,
            View, setView,
            ColorView, setColorView,
            TextView, setTextView,
            cookies, setCookies,
            banner, setBanner,
            cake,setCake,
            chocolate,setChocolate,
            listProduct, setListProduct
        }}>
            {children}
        </Provider>
    )
}

export { ProductsProvider, Consumer as ProductsConsumer, ProductsContext}
