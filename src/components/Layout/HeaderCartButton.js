import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span className={classes.badge}>4</span>
        </button>
    );
};

export default HeaderCartButton;