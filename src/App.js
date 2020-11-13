
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom"

import Aplication from './component'
//context
import { HomeProvider } from './context/home'
import {ProductsProvider } from './context/products'

function App() {
  return (
    <div className="App">
      <HomeProvider>
        <ProductsProvider>
          <Router>
              <Aplication/>
          </Router>
        </ProductsProvider> 
      </HomeProvider>
    </div>
  );
}

export default App;
