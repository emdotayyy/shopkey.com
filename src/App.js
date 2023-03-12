import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const cartShowHandler = (event) => {
    setCartShown(true);
  }
  const cartHideHandler = (event) => {
    setCartShown(false);
  }
  return (
    <CartProvider>
      {cartShown && <Cart onCloseCart={cartHideHandler}/>}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
