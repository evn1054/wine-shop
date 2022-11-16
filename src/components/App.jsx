import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleWines from "../sample-wines";
import Wine from "./Wine";
import base from "../base";
// import { object } from "prop-types";

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

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      this.props.match.params.shopId
    );
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${this.props.match.params.shopId}/wines`, {
      context: this,
      state: "wines",
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.shopId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  updateWine = (key, updatedWine) => {
    const wines = { ...this.state.wines };
    wines[key] = updatedWine;
    this.setState({ wines });
  };

  deleteWine = (key) => {
    const wines = { ...this.state.wines };
    wines[key] = null;
    this.setState({ wines });
  };

  deleteWineFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
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
                  <Wine
                    key={key}
                    index={key}
                    addToOrder={this.addToOrder}
                    details={this.state.wines[key]}
                  />
                );
              })}
            </ul>
          </div>

          <Order
            wines={this.state.wines}
            order={this.state.order}
            deleteWineFromOrder={this.deleteWineFromOrder}
          />
          <MenuAdmin
            addWine={this.addWine}
            loadWineList={this.loadWineList}
            wines={this.state.wines}
            updateWine={this.updateWine}
            deleteWine={this.deleteWine}
          />
        </div>
      </>
    );
  }
}

export default App;
