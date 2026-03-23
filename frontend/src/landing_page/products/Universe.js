import React from 'react'

function Universe() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <h>The Zerodha Universe</h>
          <p className="mb-5 p-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-4 p-4 ">
            <img src="media/images/smallcaseLogo.png" />
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>

          <div className="col-4 p-4  ">
            <img src="media/images/sensibullLogo.svg" />
            <p className="text-small text-muted">Algo and strtegy platform</p>
          </div>

          <div className="col-4 p-4 ">
            <img className="w-50" src="media/images/zerodhaFundhouse.png" />
            <p className="text-small text-muted">Assest management</p>
          </div>

          <div className="col-4 p-4 p-4 ">
            <img src="media/images/goldenpiLogo.png" />
            <p className="text-small text-muted">Bonds trending platform</p>
          </div>

          <div className="col-4  ">
            <img className="mw-100 w-50" src="media/images/dittoLogo.png" />
            <p className="text-small text-muted">Insurance</p>
          </div>

          <div className="col-4  ">
            <img className="mw-100 w-50" src="media/images/streakLogo.png" />
            <p className="text-small text-muted">option trading platform</p>
          </div>

          <button
            className="p2 btn btn-primary mt-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    )
    
}

export default Universe;