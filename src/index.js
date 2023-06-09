import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA81hMBW6tN31un9jVcNQUiorjNJf-DLmU",
  authDomain: "casio-react-store.firebaseapp.com",
  projectId: "casio-react-store",
  storageBucket: "casio-react-store.appspot.com",
  messagingSenderId: "36920273204",
  appId: "1:36920273204:web:8b25091970efe2b9f01d61"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

 
