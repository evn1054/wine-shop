import React, { useState } from "react";
import shops from "../sample-shops";

const Landing = (props) => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const displayList = () => {
    setDisplay(!display);
  };

  const getTitle = (shop) => {
    const { title, url } = shop;
    setDisplay(false);
    setTitle(title);
    setUrl(url);
  };

  const goToShop = () => {
    props.history.push(`/shop/${url}`);
  };

  return (
    <>
      <div className="shop_select">
        <div onClick={displayList} className="shop_select_top">
          <div className="shop_select_top-header">
            {title ? title : "Выберите магазин"}
          </div>

          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        {display ? (
          <div className="shop_select_bottom">
            <ul>
              {shops.map((shop) => (
                <li onClick={() => getTitle(shop)} key={shop.id}>
                  {shop.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {title && !display ? (
          <button onClick={goToShop} className="shop_select-button">
            Перейти в магазин
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Landing;
