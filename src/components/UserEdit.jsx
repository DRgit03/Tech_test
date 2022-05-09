import React, { useEffect, useState } from "react";
import {User}  from "./User";




export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };



  const onEdit = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
       
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  

  return (
    <div className="App">
    <h1>Users</h1>
   {/* {loading ? <Loader/> : */}
   
    
      {users.map((user) =>  (
        <User
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          address ={user.address.suite}
          onEdit={onEdit}
          
        />
      ))}
      
      
    </div>
  );
}
