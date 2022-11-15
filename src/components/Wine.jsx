import React from "react";

class Wine extends React.Component {
  render() {
    const {
      image,
      name,
      type,
      region,
      producer,
      fortress,
      volume,
      grape,
      price,
      status,
    } = this.props.details;
    const isAvailable = status === "available";
    return (
      <>
        <li className="menu-wine">
          <div className="image-container">
            <img src={image} alt={name} />
          </div>
          <div className="wine-details">
            <h3 className="wine-name">
              {name}
              <span className="price">{price}₽</span>
            </h3>
            <div className="wine-details__other-info">
              <p>Вино: {type}</p>
              <p>Регион: {region}</p>
              <p>Производитель: {producer}</p>
              <p>Крепость: {fortress}%</p>
              <p>Объем: {volume}л.</p>
              <p>Сорт винограда: {grape}</p>
            </div>
            <button
              className="buttonOrder"
              disabled={!isAvailable}
              onClick={() => this.props.addToOrder(this.props.index)}
            >
              {isAvailable ? "Заказать" : "Временно нет"}
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default Wine;
