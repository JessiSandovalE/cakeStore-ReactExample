import React from 'react'

import {
    Switch,
    Route
} from 'react-router-dom'

import Home from '../home'
import Products from '../products'
import ViewProduct from '../viewProduct'

const Menu = () => {
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path ="/products"><Products/></Route>
            <Route path ="/viewProduct"><ViewProduct/></Route>
        </Switch>
    )
}

export default Menu
