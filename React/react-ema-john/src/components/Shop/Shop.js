import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, functionProducts]=useState([])
const [cart, functionCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>functionProducts(data))
    },[])


    const addtoCart = (product)=>{
        console.log(product)
        const newCart = [...cart, product]
        functionCart(newCart)
    }
    return (
        <div className='shop-container'>
        <div className="shoe-container">
            {
                products.map(product=><Product addtoCart={addtoCart} product={product}></Product>)
            }
        </div>
            <div className="cart-container">
            <p>Order Summery: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;