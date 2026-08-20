import React from "react";
function StringLiteral() {
  const name = "John";
  return (
    <div>
      <h2>String Literal Example</h2>
      <h3>{`Welcome ${name} to React JS`}</h3>

    </div>
  );
}
export default StringLiteral;
