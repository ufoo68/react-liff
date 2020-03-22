import React from 'react'
import './App.scss'
import { buildReplyText } from 'line-message-builder'

const liff = window.liff

const App: React.FC = () => {
  const sendMessage = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({})
      }
      liff
        .sendMessages(buildReplyText(['Send Message']))
        .then(() => {
          console.log('message sent')
        })
        .catch(err => {
          alert(err)
        })
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
