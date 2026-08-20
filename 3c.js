import React from "react"; 
import StudentCard from "./StudentCard"; 
function College() { 
  return ( 
    <div align="center"> 
      <h2>Student Details Using Props</h2> 
      <StudentCard 
        studentName="Rahul" 
        studentBranch="Computer Science" 
        studentRoll="22CSE101" 
      /> 
    </div> 
  ); 
} 
export default College; 