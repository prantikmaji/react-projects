import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); //getting DATA from context
  if(!user) return (<div>please log in</div>);
  return (<div>welcome : {user.username}</div>);
}

export default Profile;
