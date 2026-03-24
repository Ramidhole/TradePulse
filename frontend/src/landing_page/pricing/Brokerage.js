import React from 'react'

function Brokrage() {
    return (
      <div className="container  ">
        <div className="row mt-5 p-5 mb-5  border-top">
          <div className="col-8">
            <a href="">
              <h1 className="fs-5 p-5 ">Brokerage calculator</h1>{" "}
            </a>

            <ul>
              <li>
                cell & trade and RMS auto-support additional charges of RS.50 +
                GST per order
              </li>
              <li>Digital contract notes will be send via e-mail</li>
              <li>
                Physical copies of contract notes if required shall be charged
                Rs 20 per contract note. Courier charges apply
              </li>
              <li>
                For NRI account (non-PIS) 0.5% or Rs 100 per executed order for
                equity(whichever is lower)
              </li>
              <li>
                For NRI account(PIS) 0.5% or Rs 200 per executed order for
                equity(whichever is lower)
              </li>
              <li>
                If the account is in debit balance any order placed will be
                charged Rs 40 per executed order instead of Rs 20 per executed
                order
              </li>
            </ul>
          </div>

          <div className="col-4">
            <a href="">
              <h1 className="fs-5 p-5">List of charges</h1>{" "}
            </a>
          </div>
        </div>
      </div>
    )
}

export default Brokrage;