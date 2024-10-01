import React from 'react';
import './App.css';
import firebase from './firebase';
import 'firebase/auth';
import 'firebase/database'; // or 'firebase/firestore'

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Logged in as:', user.email);
      } else {
        console.log('Logged out');
      }
    });
  }, []);

  return (
    <div className="App">
    <header className="App-header">
      <p>Quiz Game</p>
    </header>
  </div>
  );
}

export default App;
