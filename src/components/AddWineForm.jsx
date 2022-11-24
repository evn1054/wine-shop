import React, { useRef } from "react";

const AddWineForm = (props) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const typeRef = useRef();
  const regionRef = useRef();
  const producerRef = useRef();
  const fortressRef = useRef();
  const volumeRef = useRef();
  const grapeRef = useRef();
  const imageRef = useRef();

  const createWine = (event) => {
    event.preventDefault();
    const wine = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value || 0),
      status: statusRef.current.value,
      type: typeRef.current.value,
      region: regionRef.current.value,
      producer: producerRef.current.value,
      fortress: parseFloat(fortressRef.current.value || 0),
      volume: parseFloat(volumeRef.current.value || 0),
      grape: grapeRef.current.value,
      image: imageRef.current.value,
    };

    props.addWine(wine);
    event.currentTarget.reset();
  };

  return (
    <form className="wine-edit" onSubmit={createWine}>
      <input
        ref={nameRef}
        name="name"
        type="text"
        placeholder="Name"
        autocomplit="off"
        className="wine__form-name"
      />
      <input
        ref={priceRef}
        name="price"
        type="text"
        placeholder="Price"
        autocomplit="off"
      />
      <select ref={statusRef} name="status" className="wine__form-status">
        <option value="available">Доступно</option>
        <option value="unavailable">Не доступно</option>
      </select>
      <input
        ref={typeRef}
        className="wine__form-type"
        name="type"
        type="text"
        placeholder="Type of wine"
        autocomplit="off"
      />
      <input
        ref={regionRef}
        className="wine__form-region"
        name="region"
        type="text"
        placeholder="Region"
        autocomplit="off"
      />
      <input
        ref={producerRef}
        className="wine__form-producer"
        name="producer"
        type="text"
        placeholder="Producer"
        autocomplit="off"
      />
      <input
        ref={fortressRef}
        className="wine__form-fortress"
        name="fortress"
        type="text"
        placeholder="Fortress"
        autocomplit="off"
      />
      <input
        ref={volumeRef}
        className="wine__form-volume"
        name="volume"
        type="text"
        placeholder="Volume"
        autocomplit="off"
      />
      <input
        ref={grapeRef}
        className="wine__form-grape"
        name="grape"
        type="text"
        placeholder="Grape"
        autocomplit="off"
      />
      <input
        ref={imageRef}
        className="wine__form-img"
        name="image"
        type="text"
        placeholder="Image"
        autocomplit="off"
      />
      <button type="submit">+ Добавить в список</button>
    </form>
  );
};

export default AddWineForm;
