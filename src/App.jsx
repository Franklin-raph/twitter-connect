import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="modal-bg">
          <div class="modal">
              <div class="modal-header">
                  <h4>You have to connect your wallet and twitter account to continue. 🤝🏻</h4>
                  <p>Your wallet helps us create a decentralised profile for you, and your twitter account so you can easily share tweets and earn more <span>$STREAL.</span> </p>
              </div>
              <div class="modal-btns">
                  <div class="modal-top-btns">
                      <button>Connect Wallet</button>
                      <button>Connect Twitter</button>
                  </div>
                  <div>
                      <button class="continue_to_app">Continue to app</button>
                  </div>
              </div>
              <div class="hr"></div>
              <div class="modal-footer">
                  <h4>It’s totally optional,</h4>
                  <p>But the fact is, you stay ahead of the rest with our weekly newsletters. ✅</p>
                  <div class="modal-form">
                      <input placeholder="What’s your email address?" type="text" />
                      <button>Yes, I’m interested</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
