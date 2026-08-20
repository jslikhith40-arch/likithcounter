import React from "react";
function ConditionalRender() {
  const isLoggedIn = true;
  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      {
        isLoggedIn ?
        <h3>Welcome User!</h3> :
        <h3>Please Login</h3>
      }
    </div>
  );
}
export default ConditionalRender;
