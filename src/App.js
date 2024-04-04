import Header from "./componenets/Layout/Header";
import { Fragment } from "react";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Card";

function App() {
  // console.log("sdds");
  return (
    <Fragment>
      <Cart/>
      <Header />
          <Meals />
      </Fragment>
    
  );
}

export default App;
