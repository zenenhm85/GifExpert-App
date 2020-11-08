import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const {setUser} = useContext(UserContext);

  const handleLogin = ()=>{
    const user = {
      id:1234,
      name:"Zenén Hernández Martínez",
      email:"zenen@gmail.com"
    }
    setUser(user);
  }

  return (
    <div>
      <h2>Login Screen</h2>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={()=>handleLogin()}

      >
        Add User
      </button>
    </div>
  );
};
