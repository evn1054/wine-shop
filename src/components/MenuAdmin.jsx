import React from "react";
import AddWineForm from "./AddWineForm";
import EditWineForm from "./EditWineForm";

class MenuAdmin extends React.Component {
  render() {
    return (
      <>
        <div className="menu-admin">
          <h2>Управление Меню</h2>
          {Object.keys(this.props.wines).map((key) => {
            return (
              <EditWineForm
                key={key}
                index={key}
                wine={this.props.wines[key]}
                updateWine={this.props.updateWine}
                deleteWine={this.props.deleteWine}
              />
            );
          })}
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
