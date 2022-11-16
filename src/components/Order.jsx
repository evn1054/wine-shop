import React from "react";

class Order extends React.Component {
  renderOrder = (key) => {
    const wine = this.props.wines[key];
    const count = this.props.order[key];

    const isAvailable = wine && wine.status === "available";

    if (!wine) return null;

    if (!isAvailable) {
      return (
        <li className="unavailable" key={key}>
          Извините, {wine ? wine.name : "вино"} временно недоступно
        </li>
      );
    }

    return (
      <li key={key}>
        <span>
          <span>{count}</span>
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
          <ul className="order">{orderIds.map(this.renderOrder)}</ul>
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
