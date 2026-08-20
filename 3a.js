import React, { useState } from "react"; 
function ClickCounter() { 
  const [clicks, setClicks] = useState(0); 
  function handleIncrease() { 
    setClicks(clicks + 1); 
  } 
  return ( 
    <div align="center"> 
      <h1>Click Counter</h1> 
      <p>Total Clicks: {clicks}</p> 
      <button onClick={handleIncrease}> 
        Add Click 
      </button> 
    </div> 
  ); 
} 
export default ClickCounter;