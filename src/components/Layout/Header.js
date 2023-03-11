import { Fragment } from "react";
import classes from './Header.module.css';
import header from "../../assets/header.png";
import mainImg from "../../assets/mainImg.png";
import ProductsSummary from "../Products/ProductsSummary";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <img className={classes.imgHeader} src={header}/>
                <HeaderCartButton />
            </header>
            <div>
                <div className={classes['main-image']}>
                    <img src={mainImg}/>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;