import React, { useState, useEffect } from "react"; 
function UserDetails() { 
  const [users, setUsers] = useState([]); 
  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => response.json()) 
      .then((result) => { 
        setUsers(result); 
      }); 
  }, []); 
  return ( 
    <div> 
      <h2>User Information</h2> 
      {users.map((person) => ( 
        <div key={person.id}> 
          <h4>{person.name}</h4> 
          <p>Email: {person.email}</p> 
          <p>City: {person.address.city}</p> 
          <hr /> 
        </div> 
      ))} 
    </div> 
  ); 
} 
export default UserDetails;