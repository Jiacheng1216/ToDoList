import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./component/Layout";
import HomeComponent from "./component/Home-component/HomeComponent";
import ResumeComponent from "./component/Resume-component/ResumeComponent";
import ToDoList from "./component/ToDoList/ToDoList";
import zhTW from "./lang/zh-TW.json";
import zhCN from "./lang/zh-CN.json";
import en from "./lang/en.json";

function App() {
  //設置網站預設語言
  let [language, setLanguage] = useState(zhTW);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout language={language} setLanguage={setLanguage} />}
        >
          <Route
            index
            element={
              <HomeComponent language={language} setLanguage={setLanguage} />
            }
          ></Route>
          <Route
            path="resume"
            element={
              <ResumeComponent language={language} setLanguage={setLanguage} />
            }
          ></Route>
          <Route
            path="todolist"
            element={<ToDoList language={language} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
