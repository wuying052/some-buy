import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // 路由插件
import FontAwesome from "react-fontawesome";

import { GlobalContext } from "../../state/globalContext";

// 数据源
const source = [
  { name: "首页", url: "/" },
  { name: "书籍", url: "/book" },
  { name: "算法", url: "/sort" },
  {
    name: "动画",
    child: [
      { name: "canvas", url: "/canvas" },
      { name: "carrousel", url: "/other" },
    ],
  },
];

// 初始化数据
function initData() {
  return source.map((i) => (i.child ? { ...i, arrow: true } : i));
}

const Menu = () => {
  // 切换子菜单
  const [list, setList] = useState(initData());

  function clickMenuItem(cur) {
    const temp = list.map((i) =>
      i.name === cur.name ? { ...i, arrow: !i.arrow } : i
    );
    setList(temp);
  }

  const menuItem = (arr) => {
    return (
      <ul className="menu">
        {arr &&
          arr.map((i, index) => (
            <li key={index}>
              {i.child ? (
                <a onClick={() => clickMenuItem(i)}>{i.name}</a>
              ) : (
                <Link to={i.url}>{i.name}</Link>
              )}
              {i.child && i.arrow && menuItem(i.child)}
            </li>
          ))}
      </ul>
    );
  };

  // 切换主题
  const { globalData, updateGlobalData } = useContext(GlobalContext);

  const changMode = () => {
    const newMode = globalData.mode === "dark" ? "light" : "dark";
    updateGlobalData({ mode: newMode });
  }

  return (
    <div className="header">
      <div>
        <div className="logo">
          <img
            className="icon"
            alt=""
            src={require("../../assets/logo.svg").default}
          />
          <div className="name">Some Buy</div>
        </div>
        <div className="slogon">诗三百，一言以蔽之</div>
      </div>
      {menuItem(list)}
      <div>
        {/* <i data-feather="circle"></i> */}
        <FontAwesome
          name={globalData.mode === "dark" ? "toggle-off" : "toggle-on"}
          onClick={changMode}
        />
      </div>
    </div>
  );
};
export default Menu;
