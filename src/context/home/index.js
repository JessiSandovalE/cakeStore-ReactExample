import React, {createContext, useState}  from 'react'
const HomeContext = createContext()
const { Provider, Consumer } = HomeContext

const HomeProvider = ({children}) =>  {
    const [product, setProduct] = useState([
        {
            img: 'https://static.wixstatic.com/media/f61af8_16af665135c44689825e77f8bcc68492~mv2.png/v1/fill/w_325,h_358,al_c,q_90,usm_0.66_1.00_0.01/f61af8_16af665135c44689825e77f8bcc68492~mv2.webp',
            title: 'WHITE CHOCOLATE BITES',
            price: '$1.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_c622ee508f0e4b12ad92bce8daf7d5d3~mv2.png/v1/fill/w_325,h_357,al_c,q_90,usm_0.66_1.00_0.01/f61af8_c622ee508f0e4b12ad92bce8daf7d5d3~mv2.webp',
            title: 'OATMEAL BITES',
            price: '$1.00'
        },
        {
            img: 'https://static.wixstatic.com/media/f61af8_353b9c005467422b80eefb54a30d80d4~mv2.png/v1/fill/w_328,h_357,al_c,q_90,usm_0.66_1.00_0.01/f61af8_353b9c005467422b80eefb54a30d80d4~mv2.webp',
            title: 'JAM & POPPY SEED BITES',
            price: '$1.00'
        }
    ])

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
        value={{
            product, setProduct,
            listProduct, setListProduct
        }}
    >
       {children} 
    </Provider>
    )
}
export { HomeProvider, Consumer as HomeConsumer, HomeContext }