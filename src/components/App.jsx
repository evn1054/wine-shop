import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleWines from "../sample-wines";
import Wine from "./Wine";
import { object } from "prop-types";

class App extends React.Component {
  state = {
    wines: {},
    order: {},
  };

  addWine = (wine) => {
    const wines = { ...this.state.wines };
    wines[`wine${Date.now()}`] = wine;
    this.setState({ wines });
  };

  loadWineList = () => {
    this.setState({ wines: sampleWines });
  };

  render() {
    return (
      <>
        <div className="wine-paradise">
          <div className="menu">
            <Header title="Wine shop №" amount={10} />
            <ul className="wines">
              {Object.keys(this.state.wines).map((key) => {
                return (
                  <Wine key={key} index={key} details={this.state.wines[key]} />
                );
              })}
            </ul>
          </div>

          <Order />
          <MenuAdmin addWine={this.addWine} loadWineList={this.loadWineList} />
        </div>
      </>
    );
  }
}

export default App;
