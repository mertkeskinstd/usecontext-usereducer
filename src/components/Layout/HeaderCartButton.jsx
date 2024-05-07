import React, { useContext } from 'react';
import "./HeaderCartButton.css"
import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../context/CartProvider';

const HeaderCartButton = ({onShowCart}) => {
    const cartCtx=useContext(CartContext);

    const totalItemsInCart=cartCtx.items.reduce((accumulator,currentItem)=>{
        return accumulator+currentItem.amount;
    },0)
    return (
        <button onClick={onShowCart} className='button'>
            <span className='icon'>
                <CartIcon/>
            </span>
            <span>Sepetim</span>
            <span className="badge">{totalItemsInCart}</span>
        </button>
    );
};

export default HeaderCartButton;
