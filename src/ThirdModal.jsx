import React from 'react'

const ThirdModal = () => {
  return (
    <div class="modal-bg">
        <span className='close-modal'>X</span>
          <div class="modal">
              <div class="modal-header">
                  <h4 className='est'>Earn, Share, Trend (EST)</h4>
                  <p style={{color:"white", fontSize:"25px"}}>What can I do to earn points?</p>
              </div>
              <div className="est2-container">
                <div>
                    <p>
                        <span style={{fontWeight:"bold"}}>Borrow:</span> Borrow Streal test token against your obtained collaterals to earn points, you deposit the tokens into the protocol to get Streal in return. Each successful Borrow gives you 50 points.
                    </p>
                    <p>
                        <span style={{fontWeight:"bold"}}>Redeem collateral:</span> When you redeem collateral, you return the borrowed Streal and get your deposited tokens back and you’ll be charged 3% fee from your deposited asset. Each successful interaction give you 50 points
                    </p>
                    <p>
                        <span style={{fontWeight:"bold"}}>Tweet:</span> Tweet about Streal from your dashboard and include Streal hashtags or mention Streal to get 100 points.
                    </p>
                </div>
                <div className="vr"></div>
                <div>
                    <p>
                        <span style={{fontWeight:"bold"}}>Deposit:</span> The protocol allows you to deposit your Streal test token and get the USDT, USDC and DAI test token In return. This interaction gives you 50 points
                    </p>
                    <p>
                        <span style={{fontWeight:"bold"}}>Transfer:</span> Transfer Streal Test tokens to 10 wallets and get 100 point after each ten successful transfers
                    </p>
                    <p>
                        <span style={{fontWeight:"bold"}}>Redeem collateral:</span> The protocol allows you to deposit your Streal test token and get the USDT, USDC and DAI test token In return. This interaction gives you 50 points
                    </p>
                </div>
              </div>

              <div style={{marginTop:"20px", display:"flex", justifyContent:"center", gap:"5px"}}>
                <div class="modal-form">
                      <button>Back to previous page</button>
                  </div>
                <button class="continue_to_app" style={{margin:"0"}}>Alright, i'm ready</button>
            </div>
            <div className="tabBtns">
                <div></div>
                <div className='active'></div>
            </div>
          </div>
      </div>
  )
}

export default ThirdModal