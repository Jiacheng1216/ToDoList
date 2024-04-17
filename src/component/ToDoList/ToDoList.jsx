import React, { useState, useEffect } from "react";
import "./ToDoList.css";
import ok from "../../Assets/ok.png";
import plus from "../../Assets/plus.png";
import pan from "../../Assets/pan.png";
import del from "../../Assets/delete.png";
import finished from "../../Assets/finished.png";

const ToDoList = ({ language, setLanguage }) => {
  //從本機儲存空間取得todolist資料
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });

  //分類篩選器
  const [filter, setFilter] = useState("全部");
  //完成度篩選器
  const [completedFilter, setCompletedFilter] = useState("全部");
  //排序功能
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("default");

  //渲染網頁 更新list
  useEffect(() => {
    return () => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    };
  }, [todoList]);

  const handleSelect = (select) => {
    setSelectedCategory(select);
  };

  //增加list
  const handleAddList = () => {
    const input = document.getElementById("MyInput");
    const newItem = input.value.trim();
    if (newItem && selectedCategory) {
      setTodoList([...todoList, { category: selectedCategory, task: newItem }]);
      input.value = "";
    }
  };

  //刪除list
  const handleDelete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  //編輯list
  const handleEdit = (index, updatedTask) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].task = updatedTask;
    setTodoList(updatedTodoList);
  };

  //修改狀態為已完成或未完成
  const handleToggleComplete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  //列表排序
  const sortedTodoList = [...todoList].sort((a, b) => {
    switch (sortOption) {
      case "completed":
        return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
      case "length":
        return a.task.length - b.task.length;
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="todolistPage">
      <div className="todolistTitle">{language.todoList}</div>
      {/* 選擇類別 */}
      <div className="todolistSelect">
        <a
          className={selectedCategory === "工作" ? "selected" : ""}
          onClick={() => handleSelect("工作")}
        >
          {language.work}
        </a>
        <a
          className={selectedCategory === "學習" ? "selected" : ""}
          onClick={() => handleSelect("學習")}
        >
          {language.learning}
        </a>
        <a
          className={selectedCategory === "運動" ? "selected" : ""}
          onClick={() => handleSelect("運動")}
        >
          {language.exercise}
        </a>
        <a
          className={selectedCategory === "家庭" ? "selected" : ""}
          onClick={() => handleSelect("家庭")}
        >
          {language.family}
        </a>
        <a
          className={selectedCategory === "旅行" ? "selected" : ""}
          onClick={() => handleSelect("旅行")}
        >
          {language.travel}
        </a>
      </div>
      {/* 輸入框和加號按鈕 */}
      <div className="todolistInput">
        <input placeholder={language.inputToDo} id="MyInput"></input>
        <img
          src={plus}
          width={50}
          height={50}
          id="plus"
          onClick={handleAddList}
        ></img>
      </div>
      {/* list */}
      <div className="todolistBody">
        <div className="selectDiv">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="全部">{language.all}</option>
            <option value="工作">{language.work}</option>
            <option value="學習">{language.learning}</option>
            <option value="運動">{language.exercise}</option>
            <option value="家庭">{language.family}</option>
            <option value="旅行">{language.travel}</option>
          </select>

          <select onChange={(e) => setCompletedFilter(e.target.value)}>
            <option value="全部">{language.all}</option>
            <option value="已完成">{language.finished}</option>
            <option value="未完成">{language.nofinish}</option>
          </select>

          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="defaultt">{language.defaultt}</option>
            <option value="completed">{language.finished}</option>
            <option value="length">{language.length}</option>
            <option value="category">{language.category}</option>
          </select>
        </div>

        {sortedTodoList
          .filter((item) => filter === "全部" || item.category === filter)
          .filter(
            (item) =>
              completedFilter === "全部" ||
              (completedFilter === "已完成" ? item.completed : !item.completed)
          )
          .map((item, index) => (
            <div key={index} className="listBody">
              <div className="listClass">{language[item.category]}</div>
              <p>{item.task}</p>
              <img
                src={item.completed ? finished : ok}
                width={50}
                height={50}
                onClick={() => handleToggleComplete(index)}
              ></img>
              <img
                src={pan}
                width={50}
                height={50}
                onClick={() =>
                  handleEdit(index, prompt("請輸入您要修改的名稱", item.task))
                }
              ></img>
              <img
                src={del}
                width={50}
                height={50}
                onClick={() => handleDelete(index)}
              ></img>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
