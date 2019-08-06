import React from "react";

function ViewBtn(props) {
  return (
    <button className="badge badge-primary" {...props}>
      <a target="_blank" href={props.link}>
        View this book!
      </a>
    </button>
  );
}

export default ViewBtn;
