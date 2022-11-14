import React from "react";
import AddWineForm from "./AddWineForm";

class MenuAdmin extends React.Component {
  render() {
    return (
      <>
        <div className="menu-admin">
          <h2>Управление Меню</h2>
          <AddWineForm addWine={this.props.addWine} />
          <button
            className="menu-admin__load-wines"
            onClick={this.props.loadWineList}
          >
            Загрузить список вин
          </button>
        </div>
      </>
    );
  }
}

export default MenuAdmin;
