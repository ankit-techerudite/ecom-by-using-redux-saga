import React from 'react'
import Style from '../components/Header.module.css'
import { useSelector } from 'react-redux'

const Header = () => {
    const result=useSelector((state)=>state.cartData)
    console.log(result)
  return (
    <div>
        <div className={Style.head}>
        <div>
        <span className={Style.product}>{result.length}</span>
        <img className={Style.cart} src="./images/cart.png" alt="" />


        </div>
       
        </div>
    </div>
  )
}

export default Header