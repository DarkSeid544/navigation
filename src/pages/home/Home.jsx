import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import Card from '../card/Card'

const Home = () => {
    
  const [data, setData] = useState([])

  const getData = () => {

    axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={style.main}>
    
        <div className={style.cards}>
            
            {data && data.map((item) => <Card item={item} props={"normal"}/>)}

        </div>

    </div>
  )
}

export default Home