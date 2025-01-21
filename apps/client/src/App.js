import React from 'react'
import Sidebar from './Components/Sidebar'
import Message from './Components/Message'
import Conversation from './Components/Conversation'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    // <div className='flex w-full'>
    //  <Sidebar></Sidebar>
    //  <Message></Message>
    //  <Conversation></Conversation>
    // </div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login></Login>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Signup></Signup>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
