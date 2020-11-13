import React from 'react'

import {galeryStyle} from '../../style/galery/style'

const Galery  = ({list}) => {
    return (
        <div className= {galeryStyle}>
                {list.map((item,i)=>
                    <div className= 'item' key= {i}>
                        <img src={item.img} alt=""/>
                    </div>
                )}
        </div>
    )
}

export default Galery