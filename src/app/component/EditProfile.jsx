"use client"
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../context";
import { useRouter } from 'next/navigation'



const EditProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (state && state.user) {
        console.log("user from state => ", state.user);
      setName(state.user.name);
      setEmail(state.user.email);
    }
  }, [state && state.user]);
  console.log(name)

  return (<>
        <h1>Edit Profile</h1>
        
    </>)
}
export default EditProfile