import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = () => {
    return (
        <button>
            <span><CartIcon /></span>
            <span></span>
        </button>
    );
};

export default HeaderCartButton;