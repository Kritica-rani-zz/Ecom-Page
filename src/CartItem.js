import productsData from './productsData.json';
import React from 'react';
import './index.css'


class CartItem extends React.Component  {
    
    
    render(){

   const {productName, productDesc, productPrice, productQty, productImage,key10} = this.props  // Recieving Data from Parent
   
    return (
        <>
        <div className='Item-all'>
             <div className='image-left'><img src={productImage} id="item-img" /></div> 
             <div className='about-right'> 
            <div>Product Name: {productName}  </div> 
              <div>Description: { productDesc}</div>
              <div>Price: Rs.{productPrice}</div>
              <div>Qty: {productQty}</div>
             <div className='btns'>
                  <button onClick={()=>this.props.handleAdd(key10)}>Add</button>
                  <button onClick={()=>this.props.handleDelete(key10)}>Subtract</button>
                  <button onClick={()=>this.props.handleRemove(key10)}>Remove Item</button>
              </div>
             </div>
        </div>
        </>

    )
    }
    }
    export default CartItem;
