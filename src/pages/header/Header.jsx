import React from 'react'
import style from './Header.module.css'
import { Link, useNavigate } from 'react-router'

const Header = () => {
  return (

    
    <div className={style.container}>
        <Link to={"/"}>Home</Link>
        <Link to={"/basket"}>Basket</Link>
        <Link to={"/wishlist"}>Wishlist</Link>
    </div>
  )
}

export default Header
