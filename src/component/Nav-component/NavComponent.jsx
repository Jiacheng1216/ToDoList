import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavComponent.css";
import zhTW from "../../lang/zh-TW.json";
import zhCN from "../../lang/zh-CN.json";
import en from "../../lang/en.json";

const NavComponent = ({ language, setLanguage }) => {
  return (
    <ul>
      <li>
        <Link to="/">{language.home}</Link>
      </li>
      {/* 切換頁面 */}
      <li className="dropdown">
        <a>{language.options}</a>

        <div className="dropdownContent">
          <Link to="resume">{language.resume}</Link>

          <Link to="todolist">{language.todoList}</Link>
        </div>
      </li>
      {/* 切換語系 */}
      <li className="dropdown">
        <a>{language.switchLanguage}</a>
        <div className="dropdownContent">
          <a onClick={() => setLanguage(zhTW)}>繁體中文</a>
          <a onClick={() => setLanguage(zhCN)}>简体中文</a>
          <a onClick={() => setLanguage(en)}>English</a>
        </div>
      </li>
    </ul>
  );
};

export default NavComponent;
