import React from "react"
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-bottom text-center">
        <h1>Pricing</h1>
        <p className="text-muted">
          Free equity investments and flat &#8377; 20 trady and F&O trades
        </p>
      </div>

      <div className="row p-5 text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricingMF.svg" />
          <h1>Free equity delivery</h1>
          <p>
            All equity delivery investment(NSE,BSE), are absolutely free -
            &#8377; 0 brokrage
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" />
          <h1>Intraday a
            nd F&O trades</h1>
          <p>
            Flat Rs.20 or 0.03%(whichever is lower) per executed order on
            intraday trades across equity currency and commodity trades
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingMF.svg" />
          <h1>Free direct MF</h1>
          <p>
            All direct mutual fund investment are absolutely free &#8377;
            commisions & DP charges
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
