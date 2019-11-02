import React from 'react'
import './App.scss'
import { Message } from '@line/bot-sdk'

const liff = window.liff

const App: React.FC = () => {
  const sendMessage = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      const message: Message = {
        type: 'text',
        text: 'Send Message'
      }
      liff.sendMessages([message])
    })
  }
  return (
    <div className="App">
      <button className="button" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  )
}

export default App
