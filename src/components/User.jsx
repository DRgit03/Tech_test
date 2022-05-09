import React, { useState } from "react";

export const User = ({ name, email, id, onEdit, address }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value );
    setIsEdit(!isEdit);
  };

  return (
    <div >
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (

        
        <div className="user">
          
          
             
          <span className="user-id" id="id">{id}</span>
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <span className="user-address">{address}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            
          </div>
        </div>
      )}
    </div>
  );
};
