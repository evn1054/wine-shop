import React from "react";

class AddWineForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  typeRef = React.createRef();
  regionRef = React.createRef();
  producerRef = React.createRef();
  fortressRef = React.createRef();
  volumeRef = React.createRef();
  grapeRef = React.createRef();
  imageRef = React.createRef();

  createWine = (event) => {
    event.preventDefault();
    const wine = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0),
      status: this.statusRef.current.value,
      type: this.typeRef.current.value,
      region: this.regionRef.current.value,
      producer: this.producerRef.current.value,
      fortress: parseFloat(this.fortressRef.current.value || 0),
      volume: parseFloat(this.volumeRef.current.value || 0),
      grape: this.grapeRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addWine(wine);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="wine-edit" onSubmit={this.createWine}>
        <input
          ref={this.nameRef}
          name="name"
          type="text"
          placeholder="Name"
          autocomplit="off"
          className="wine__form-name"
        />
        <input
          ref={this.priceRef}
          name="price"
          type="text"
          placeholder="Price"
          autocomplit="off"
        />
        <select
          ref={this.statusRef}
          name="status"
          className="wine__form-status"
        >
          <option value="available">Доступно</option>
          <option value="unavailable">Не доступно</option>
        </select>
        <input
          ref={this.typeRef}
          className="wine__form-type"
          name="type"
          type="text"
          placeholder="Type of wine"
          autocomplit="off"
        />
        <input
          ref={this.regionRef}
          className="wine__form-region"
          name="region"
          type="text"
          placeholder="Region"
          autocomplit="off"
        />
        <input
          ref={this.producerRef}
          className="wine__form-producer"
          name="producer"
          type="text"
          placeholder="Producer"
          autocomplit="off"
        />
        <input
          ref={this.fortressRef}
          className="wine__form-fortress"
          name="fortress"
          type="text"
          placeholder="Fortress"
          autocomplit="off"
        />
        <input
          ref={this.volumeRef}
          className="wine__form-volume"
          name="volume"
          type="text"
          placeholder="Volume"
          autocomplit="off"
        />
        <input
          ref={this.grapeRef}
          className="wine__form-grape"
          name="grape"
          type="text"
          placeholder="Grape"
          autocomplit="off"
        />
        <input
          ref={this.imageRef}
          className="wine__form-img"
          name="image"
          type="text"
          placeholder="Image"
          autocomplit="off"
        />
        <button type="submit">+ Добавить в список</button>
      </form>
    );
  }
}

export default AddWineForm;
