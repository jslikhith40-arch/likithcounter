import React from "react";
function r() {
  function handleClick() {
    alert("Button Clicked Successfully!");
  }
  return (
    <div>
      <h2>Button Click Event in React</h2>
      <button onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
}
export default ButtonClick;
