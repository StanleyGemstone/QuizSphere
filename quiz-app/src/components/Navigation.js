// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const Navigation = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Signed out successfully");
    }).catch((error) => {
      // An error happened.
      console.error("Sign-out error", error);
    });
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>MyLogo</Link>
      </div>
      <div>
        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
        {user ? (
          <button onClick={handleSignOut} style={{ margin: '0 1rem' }}>Signout</button>
        ) : (
          <Link to="/signin" style={{ margin: '0 1rem' }}>Signin</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
