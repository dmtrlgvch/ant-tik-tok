import React from 'react';
import './App.css';
import { useAuth } from "./hooks/use-auth.js";
import { useRouter } from "./hooks/use-router.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Post from './components/Post'
import PostFullScreen from './components/PostFullScreen'
import FormSignIn from "./components/FormSignIn";
import FormLogIn from "./components/FormLogIn";
import UserPage from "./components/UserPage";

function App() {
  const auth = useAuth();
  const router = useRouter();

  return (
    <> 
      <Header />
      
      <div className='feed'>
        <div className='container'>
          <FormSignIn /> 
          <FormLogIn />    
          <UserPage />  
          <Post />     
        </div>
      </div>

      <PostFullScreen />
    </>
  );
}

export default App;
