import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = (key) => {
    const wine = this.props.wines[key];
    const count = this.props.order[key];

    const isAvailable = wine && wine.status === "available";

    if (!wine) return null;

    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li className="unavailable" key={key}>
            Извините, {wine ? wine.name : "вино"} временно недоступно
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            шт. {wine.name}
            <span> {count * wine.price} ₽</span>
            <button
              className="cancellItem"
              onClick={() => this.props.deleteWineFromOrder(key)}
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const wine = this.props.wines[key];
      const count = this.props.order[key];

      const isAvailable = wine && wine.status === "available";
      if (isAvailable) {
        return prevTotal + wine.price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <>
        <div className="order-wrap">
          <h2>Ваш Заказ</h2>
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>
          <div className="total">
            <div className="total_wrap">
              <div className="total_wrap-final">Итого: {total} ₽</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
