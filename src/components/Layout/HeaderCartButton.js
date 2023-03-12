import { useContext, useEffect, useState } from 'react';
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
    const [btnHighlight, setBtnHighlight ] = useState(false);

    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((currNumber, item)=>{
        return currNumber + item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;
    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnHighlight(true);
        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    },[items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;