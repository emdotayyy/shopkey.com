import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const hasAtTheRate = value => value.includes('@');
const isFiveChar = value => value.trim().length === 5 || value.trim().length === 6;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        email: true,
        city: true,
        street: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const cityInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = hasAtTheRate(enteredEmail);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFiveChar(enteredPostal);

        setFormInputValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            city: enteredCityIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalIsValid
        });

        const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalIsValid;

        if (!formIsValid){
            return;
        }

        props.onConfirm({
            name: enteredName,
            email: enteredEmail,
            city: enteredCity,
            street: enteredStreet,
            postalCode: enteredPostal
        });
    };

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
    const emailControlClasses = `${classes.control} ${formInputValidity.email ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
    const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input ref={nameInputRef} type='text' id='name' />
                {!formInputValidity.name && <p>Name is required.</p>}
            </div>
            <div className={emailControlClasses}>
                <label htmlFor='email'>E-mail</label>
                <input ref={emailInputRef} type='text' id='email' />
                {!formInputValidity.email && <p>Email is required.</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city' />
                {!formInputValidity.city && <p>City is required.</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='Street'>Street</label>
                <input ref={streetInputRef} type='text' id='Street' />
                {!formInputValidity.street && <p>Street is required.</p>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalInputRef} type='text' id='postal' />
                {!formInputValidity.postalCode && <p>Postal Code is required.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;