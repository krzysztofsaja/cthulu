import React, { useState } from "react";
import { auth , googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";

export default Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
    const result = await signInWithPopup(auth,googleProvider);

    const {displayName, email, photoURL, uid} = result.user;

    return uid;
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };
  return (
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Signin</button>
      <button onClick={signInWithGoogle}> Signin with google</button>
      <button onClick={logOut}> logOut</button>
    </div>
  );
};