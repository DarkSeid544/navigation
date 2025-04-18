import { BrowserRouter, Route, Routes } from 'react-router'
import Basket from '../pages/basket/Basket'
import Wishlist from '../pages/wishlist/Wishlist'
import Layout from '../pages/layout/Layout'

const Router = () => {

  return (

    <BrowserRouter>

    <Routes>
      
      <Route element={<Layout/>}> 
        <Route path='basket' element={<Basket/>}/>
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='/' element={<Home/>}/>
      </Route>

      </Routes> 

  </BrowserRouter>


  )
}

export default Router