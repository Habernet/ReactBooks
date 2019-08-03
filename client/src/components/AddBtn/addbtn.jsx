import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    // <span className="add-btn" {...props} role="button" tabIndex="0">
    //   Save This Book!
    // </span>
    <button type="button" className="btn btn-info" {...props}>
      Save this book!
    </button>
  );
}

export default AddBtn;
