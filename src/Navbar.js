import React from 'react';
import './index.css'

class Navbar extends React.Component {
constructor(props){
    super(props)
    const {CartNumberTotal}= props;
console.log("CartNumber",this.props.CartNumberTotal)

}
render(){
 
return(<>
    <div>
        <div className='header'>
            <div className='CartIcon'><img src ="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"/></div>
            <span className='Number'>{this.props.CartNumberTotal}</span>
        </div>

    </div>
    </>
)
}
} 
export default Navbar;