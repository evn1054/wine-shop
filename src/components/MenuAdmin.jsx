import React from "react";
import AddWineForm from "./AddWineForm";
import EditWineForm from "./EditWineForm";

const MenuAdmin = (props) => {
  return (
    <>
      <div className="menu-admin">
        <h2>Управление Меню</h2>
        {Object.keys(props.wines).map((key) => {
          return (
            <EditWineForm
              key={key}
              index={key}
              wine={props.wines[key]}
              updateWine={props.updateWine}
              deleteWine={props.deleteWine}
            />
          );
        })}
        <AddWineForm addWine={props.addWine} />
        <button className="menu-admin__load-wines" onClick={props.loadWineList}>
          Загрузить список вин
        </button>
      </div>
    </>
  );
};

export default MenuAdmin;
