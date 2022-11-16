import React from "react";

class EditWineForm extends React.Component {
  handleChange = (event) => {
    const updatedWines = {
      ...this.props.wines,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateWine(this.props.index, updatedWines);
  };

  render() {
    return (
      <>
        <div className="wine-edit">
          <input
            name="name"
            type="text"
            className="wine__form-name"
            value={this.props.wine.name}
            onChange={this.handleChange}
          />
          <input
            name="price"
            type="text"
            value={this.props.wine.price}
            onChange={this.handleChange}
          />
          <select
            name="status"
            className="wine__form-status"
            value={this.props.wine.status}
            onChange={this.handleChange}
          >
            <option value="available">Доступно</option>
            <option value="unavailable">Не доступно</option>
          </select>
          <input
            className="wine__form-type"
            name="type"
            type="text"
            value={this.props.wine.type}
            onChange={this.handleChange}
          />
          <input
            className="wine__form-region"
            name="region"
            type="text"
            value={this.props.wine.region}
            onChange={this.handleChange}
          />
          <input
            className="wine__form-producer"
            name="producer"
            type="text"
            value={this.props.wine.producer}
            onChange={this.handleChange}
          />
          <input
            className="wine__form-fortress"
            name="fortress"
            type="text"
            value={this.props.wine.fortress}
            onChange={this.handleChange}
          />
          <input
            className="wine__form-volume"
            name="volume"
            type="text"
            value={this.props.wine.volume}
            onChange={this.handleChange}
          />
          <input
            className="wine__form-grape"
            name="grape"
            type="text"
            value={this.props.wine.grape}
            onChange={this.handleChange}
          />
          <input
            className="wine__form-img"
            name="image"
            type="text"
            value={this.props.wine.image}
            onChange={this.handleChange}
          />
          <button onClick={() => this.props.deleteWine(this.props.index)}>
            Удалить из списка
          </button>
        </div>
      </>
    );
  }
}

export default EditWineForm;
