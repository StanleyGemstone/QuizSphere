// src/components/SignUp.js
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [nationality, setNationality] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userClass, setUserClass] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setMessage("Sign up successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setMessage("Sign up failed");
      });
  };

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type={showPassword ? "text" : "password"} 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <input 
        type={showPassword ? "text" : "password"} 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        placeholder="Confirm Password" 
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
      <input 
        type="text" 
        value={fullName} 
        onChange={(e) => setFullName(e.target.value)} 
        placeholder="Full Name" 
      />
      <input 
        type="text" 
        value={nationality} 
        onChange={(e) => setNationality(e.target.value)} 
        placeholder="Nationality" 
      />
      <input 
        type="text" 
        value={stateOfOrigin} 
        onChange={(e) => setStateOfOrigin(e.target.value)} 
        placeholder="State of Origin" 
      />
      <input 
        type="tel" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        placeholder="Phone Number" 
      />
      <input 
        type="date" 
        value={dateOfBirth} 
        onChange={(e) => setDateOfBirth(e.target.value)} 
        placeholder="Date of Birth" 
      />
      <input 
        type="text" 
        value={userClass} 
        onChange={(e) => setUserClass(e.target.value)} 
        placeholder="Class" 
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;