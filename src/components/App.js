import React, { useState } from "react";

import "./App.css";

import Alert from "./Alert";
import List from "./List";

const App = () => {
  const [todo, setTodo] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!todo) {
      //display alert of please enter some text
      showAlert(true, "Please enter some text", "danger");
    } else if (todo && isEditing) {
      //dealing with editing
    } else {
      //render the todo into the list
      const newItem = { id: new Date().getTime().toString(), title: todo };
      setList([...list, newItem]);
      setTodo("");
      showAlert(true, "Item added to the list", "success");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const removeAlert = () => {
    showAlert("", "");
  };

  const clearList = () => {
    showAlert(true, "All items removed", "danger");
    setList([]);
  };

  const removeTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert(true, "Item removed", "danger");
  };

  return (
    <div className="container">
      <section className="section">
        <form className="form-container" onSubmit={onFormSubmit}>
          {alert.show ? <Alert {...alert} removeAlert={removeAlert} /> : null}
          <h1>TODO LIST</h1>
          <div className="field-container">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="form-input"
            />
            <button type="submit" className="form-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>

        <List list={list} clearList={clearList} removeTodo={removeTodo} />
      </section>
    </div>
  );
};

export default App;
