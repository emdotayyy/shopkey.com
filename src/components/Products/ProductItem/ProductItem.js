import { useContext } from "react";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            key: props.id, 
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.product}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.shortDescription}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <ProductItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default ProductItem;