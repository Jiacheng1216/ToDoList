import React from "react";
import "./ResumeComponent.css";
import home from "../../Assets/home.png";
import item from "../../Assets/item.png";
import cart from "../../Assets/cart.png";
import profile from "../../Assets/profile.png";

const ResumeComponent = () => {
  return (
    <div className="ResumePage">
      <h1>
        網站首頁 更多資訊請參考
        <a href="https://github.com/Jiacheng1216/E-commerce?tab=readme-ov-file">
          Github
        </a>
      </h1>
      <img src={home}></img>
      <h2>商品一覽</h2>
      <img src={item}></img>
      <h2>購物車頁面</h2>
      <img src={cart}></img>
      <h2>使用者頁面</h2>
      <img src={profile}></img>
    </div>
  );
};

export default ResumeComponent;
