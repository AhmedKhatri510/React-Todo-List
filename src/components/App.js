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
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const removeAlert = () => {
    setAlert({ show: false, msg: "", type: "" });
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

        <List list={list} />
      </section>
    </div>
  );
};

export default App;
