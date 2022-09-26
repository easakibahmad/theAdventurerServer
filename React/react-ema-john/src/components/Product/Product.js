import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({product,addtoCart}) => {
    // console.log(props.product)
    // const {product,addtoCart}=props
    const {img, seller, name, price}=product
    
    return (
        <div className='product-container'>
            <img src={img} alt='not found'></img>
            <div className='card'>
            <p>{name.slice(0,15)}</p>
            <p>Price: {price}</p>
            <p>{seller}</p>
            </div>
            <button onClick={()=>addtoCart({product})} className='btn'>Add To Cart 
            <FontAwesomeIcon className='fab' icon={faShoppingBag}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;