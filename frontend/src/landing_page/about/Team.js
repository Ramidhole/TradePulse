import React from "react"

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className=" text-center">people</h1>
      </div>

      <div
        className="row p-5 text-center text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%", marginTop: "-10px" }}
          />
          <h3 className="mt-3">Nithin Kamath</h3>
          <h5>Founder and ceo</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded in 2010 to overcome the hurdles he
            faced during hid decade long stint as a trader.Today Zerodha has
            changed the ladscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI secondary market advisory comittee(SMAC)
            and the Market Data advisory Committee(MDAC)
          </p>
          <p>Playing basketbll is his zen.</p>
          <p>
            connect on <a href="">/Homepage</a> <a href="">/Twitter</a>
            <a href="">/TradingQna</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
