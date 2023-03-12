import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const cartShowHandler = (event) => {
    setCartShown(true);
  }
  const cartHideHandler = (event) => {
    setCartShown(false);
  }
  return (
    <div>
      {cartShown && <Cart onCloseCart={cartHideHandler}/>}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
