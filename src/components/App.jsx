import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="wine-paradise">
          <div className="menu">
            <Header title="Wine shop №" amount={10} />
          </div>

          <Order />
          <MenuAdmin />
        </div>
      </>
    );
  }
}

export default App;
