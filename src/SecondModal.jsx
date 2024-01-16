import React from 'react'

const SecondModal = () => {
  return (
    <div class="modal-bg">
        <span className='close-modal'>X</span>
          <div class="modal">
              <div class="modal-header">
                  <h4 className='est'>Earn, Share, Trend (EST)</h4>
                  <p style={{textAlign:"left", color:"white", fontSize:"25px"}}>Get Ready</p>
              </div>
              <div className='steps'>
                <p style={{color:"white", fontSize:"18px"}}>Step 1 - Obtain test collaterals</p>
                <p>1.Ensure you’re connected to the Mumbai testnet in your wallet. (If you don’t know how to connect, click here).</p>
                <p>2.Go to Aavefaucets , Connect your wallet.</p>
                <p>3.Switch to Polygon Market V3.</p>
                <p>4.Request for test assets, (Tether USDT, USDC and DAI).</p>
              </div>

              <div className='steps'>
                <p style={{color:"white", fontSize:"18px", marginTop:"10px"}}>Step 2 - Obtain test Matic</p>
                <p>1.Go to Alchemy Mumbai faucet</p>
                <p>2.Connect your wallet and obtain Test MATIC.</p>
                <p>3.This will help you pay gas fees on polygon test network.</p>
              </div>

              <div style={{marginTop:"20px"}}>
                <button class="continue_to_app">Next</button>
            </div>
            <div className="tabBtns">
                <div className='active'></div>
                <div></div>
            </div>
          </div>
      </div>
  )
}

export default SecondModal