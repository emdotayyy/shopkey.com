import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'p1',
        name: 'Apple iPhone 14 Pro (256 GB) - Space Black',
        shortDescription: '15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion',
        longDescription: 'A16 Bionic chip,6-core CPU with 2 performance cores and 4 efficiency cores, 5-core GPU, 16-core Neural Engine.Dynamic Island, a magical new way to interact with iPhone',
        price: 1622.62,
      }].map((item => {<li>{item.name}</li>}))}</ul>;
    
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>1455.98</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;