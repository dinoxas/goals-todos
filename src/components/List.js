import React from "react";
export default function List(props) {
  return (
    <div className="">
      {props.items.map(item => (
        <div className="panel-block" key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{
              display: "inline-block",
              marginRight: "5px",
              borderColor: "red",
              textDecoration: item.complete ? "line-through" : "none"
            }}
          >
            {item.name}
          </span>
          <button
            className="delete is-small"
            onClick={() => props.remove(item)}
          ></button>
        </div>
      ))}
    </div>
  );
}
