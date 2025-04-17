import style from './Router.module.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import axios from 'axios'
import Card from '../pages/card/Card'
import Basket from '../pages/basket/Basket'
import Header from '../pages/header/Header'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  
  const [data, setData] = useState([])

  const getData = () => {

    axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))

  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <BrowserRouter>
      
      <Header/>

      <Routes>
        
        <Route path='basket' element={<Basket/>}/>
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='header' element={<Header/>} />
        <Route path='/' element={
            <div className={style.main}>
              
              <div className={style.cards}>
                
                {data && data.map((item) => <Card item={item} props={"normal"}/>)}

              </div>

            </div>
        }
        />
        
        </Routes>    

    </BrowserRouter>

  )
}

export default Router