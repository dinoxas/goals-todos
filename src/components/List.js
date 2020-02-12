import React from "react";
export default function List(props) {
  return (
    <ol>
      {props.items.map(item => (
        <li key={item.id}>
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
            className="delete is-medium"
            onClick={() => props.remove(item)}
          ></button>
        </li>
      ))}
    </ol>
  );
}
