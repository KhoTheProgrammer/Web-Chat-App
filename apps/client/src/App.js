import React from 'react'
import Sidebar from './Components/Sidebar'
import Message from './Components/Message'
import Conversation from './Components/Conversation'


const App = () => {
  return (
    <div className='flex w-full'>
     <Sidebar></Sidebar>
     <Message></Message>
     <Conversation></Conversation>
    </div>
  )
}

export default App
