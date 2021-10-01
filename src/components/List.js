import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, clearList, removeTodo }) => {
  if (!list.length) return null;

  const renderedList = list.map((item) => {
    return (
      <div className="list-container" key={item.id}>
        <h4 className="todo">{item.title}</h4>
        <div className="btn-container ">
          <FaEdit style={{ color: "green" }} />
          <FaTrash
            style={{
              color: "red",
            }}
            onClick={() => removeTodo(item.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="align-center">
      <div>{renderedList}</div>
      <button className="form-btn margin-top" onClick={clearList}>
        Clear All
      </button>
    </div>
  );
};

export default List;
