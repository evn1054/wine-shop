import React from "react";
import shops from '../sample-shops';

class Landing extends React.Component {

  state = {
    display: false,
    title: '',
    url: '',
  }

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  }

  getTitle = (shop) => {
    const { title, url } = shop;
    this.setState({title, url, display: false})
  }

  goToShop = () => {
    console.log('go to shop');
  }

  render(){
    return (
      <>
        <div className="shop_select">
          <div onClick={this.displayList} className="shop_select_top">
            <div className="shop_select_top-header">{this.state.title ? this.state.title : 'Выберите магазин'}</div>

            <div className="arrow_picker">
              <div className="arrow_picker-up"></div>
              <div className="arrow_picker-down"></div>
            </div>
          </div>

          {this.state.display ? <div className="shop_select_bottom">
            <ul>
              {shops.map(shop => <li onClick={() => this.getTitle(shop)} key={shop.id}>{shop.title}</li>)}
            </ul>
          </div> : null}

          {this.state.title && !this.state.display ? <button onClick={this.goToShop} className="shop_select-button">Перейти в магазин</button> : null}
        </div>
      </>
    );
  }
}
export default Landing;