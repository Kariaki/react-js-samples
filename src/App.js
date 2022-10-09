import React from 'react'
import './App.css';
import WithCounter from './componets/WithCounter';
import { ContextProvider } from './componets/Usercontext'
import Hover from './componets/Hover';
import Http from './componets/Http';
import PostForm from './componets/PostForm';
function App() {
  return (
    <div className="App">
      <PostForm />
    </div>
  );
}
//https://contactmentor.com/best-react-projects-for-beginners-easy/

export default App;
