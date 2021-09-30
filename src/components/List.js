import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list }) => {
  const renderedList = list.map((item) => {
    return (
      <div className="list-container">
        <h4 className="todo">{item.title}</h4>
        <div className="btn-container ">
          <FaEdit style={{ color: "green" }} />
          <FaTrash style={{ color: "red" }} />
        </div>
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default List;
