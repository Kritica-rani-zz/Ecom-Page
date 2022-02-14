import productsData from './productsData';

import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar'
class App extends React.Component {
  constructor() {
    super()
    this.state = { productsData: productsData } //Maintaining  State
  }

  // On Clicking Add

  handleAdd = (id) => {

    const updatedItem = this.state.productsData.map((item) => {
      if (item.id === id) {
        item.product_qty = item.product_qty + 1
        return item;
      }
      return item; //return all items
    })
    this.setState({ productsData: updatedItem })
  }

  handleDelete = (id) => { // For Delete Button

    const DeleteList = this.state.productsData.map((item) => {
      if (item.id === id && item.product_qty > 0) {
        item.product_qty = item.product_qty - 1;
        return item;
      }
      return item;
    })
    this.setState({ productsData: DeleteList })
  }
  handleRemove = (id) => {
    // console.log("I am removed")
    const filteredArray = this.state.productsData.filter((item) => {
      return item.id !== id;
    })
    this.setState({ productsData: filteredArray })
  }
  CartNumberTotal = () => {    // Calculate Total Items in cart
    console.log("productCount", this.state.productsData)
    let count = 0;
    this.state.productsData.forEach(item => {
      count = count + item.product_qty
    });
    return count;
  }
  componentWillMount() {
    // load items array from localStorage, set in state
    let itemsList = localStorage.getItem('productsData')
    if (itemsList) {
      this.setState({
        productsData: JSON.parse(localStorage.getItem('productsData'))
      })
    }
  }
  componentDidUpdate() {
    // on each update, sync our state with localStorage
    localStorage.setItem('productsData', JSON.stringify(this.state.productsData))
  }


  render() {

console.log("productcart" ,this.CartNumberTotal())
    console.log("productqty", this.state.product_qty)

    return (
      <>
      
        <Navbar CartNumberTotal={this.CartNumberTotal()} />
        {this.state.productsData.map((item, index) => {

          return (<div key={item.id}>
            <div>



              <CartItem

                key10={item.id}
                productName={item.product_brand_title}
                productDesc={item.product_description}
                productPrice={item.product_price}
                productQty={item.product_qty}
                productImage={item.product_image}
                handleAdd={this.handleAdd}
                handleDelete={this.handleDelete}
                handleRemove={this.handleRemove}

              />

            </div>
          </div>);
        })}
      </>
    );
  }
}
export default App;
