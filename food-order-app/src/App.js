import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown, setCartIshown] = useState(false);

  const showCartHandler = () => {
    setCartIshown(true);
  };

  const hideCartHandler = () => {
    setCartIshown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}      
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
