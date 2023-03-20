import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };
    const orderHandler = () => {
        setIsCheckout(true);
    };
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />))}</ul>;
    
    const modalActions = <div className={classes.actions}><button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>{hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}</div>
    
    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://shopkeydotcom-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cardModalContent = (
    <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onCloseCart}/>}
        {!isCheckout && modalActions}
    </React.Fragment>
    );

    const isSubmittingModalContent = <p className={classes.orderSubmission}>Sending Order Data...</p>;
    const didSubmitModalContent = (
    <React.Fragment>
        <p className={classes.orderSubmission}>Order Successfully Placed!</p>
        <div className={classes.actions}><button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button></div>
    </React.Fragment>
    );

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {!isSubmitting && !didSubmit && cardModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting &&didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;