import React from 'react'
import Home from './components/home'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(){
      return(
        <div className='App'>
        <Home></Home>
        <ToastContainer></ToastContainer>
        </div>
      );
}

export default App;