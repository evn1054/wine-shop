import React from "react";

const EditWineForm = (props) => {
  const handleChange = (event) => {
    const updatedWines = {
      ...props.wines,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    props.updateWine(props.index, updatedWines);
  };

  return (
    <>
      <div className="wine-edit">
        <input
          name="name"
          type="text"
          className="wine__form-name"
          value={props.wine.name}
          onChange={handleChange}
        />
        <input
          name="price"
          type="text"
          value={props.wine.price}
          onChange={handleChange}
        />
        <select
          name="status"
          className="wine__form-status"
          value={props.wine.status}
          onChange={handleChange}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">Не доступно</option>
        </select>
        <input
          className="wine__form-type"
          name="type"
          type="text"
          value={props.wine.type}
          onChange={handleChange}
        />
        <input
          className="wine__form-region"
          name="region"
          type="text"
          value={props.wine.region}
          onChange={handleChange}
        />
        <input
          className="wine__form-producer"
          name="producer"
          type="text"
          value={props.wine.producer}
          onChange={handleChange}
        />
        <input
          className="wine__form-fortress"
          name="fortress"
          type="text"
          value={props.wine.fortress}
          onChange={handleChange}
        />
        <input
          className="wine__form-volume"
          name="volume"
          type="text"
          value={props.wine.volume}
          onChange={handleChange}
        />
        <input
          className="wine__form-grape"
          name="grape"
          type="text"
          value={props.wine.grape}
          onChange={handleChange}
        />
        <input
          className="wine__form-img"
          name="image"
          type="text"
          value={props.wine.image}
          onChange={handleChange}
        />
        <button onClick={() => props.deleteWine(props.index)}>
          Удалить из списка
        </button>
      </div>
    </>
  );
};

export default EditWineForm;
