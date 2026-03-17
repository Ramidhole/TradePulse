import React from "react"

function Hero() {
  return (
    <div className="container" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model In India
          <br></br>
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 mb-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August,2010 with the goal
            of breaking all barriers that traders and investores face in India
            in terms of cost, support,and technology.we named the company
            Tradepulse
          </p>
          <p>
            Today. our disruptive pricing models and in-house technnology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all indian retail trading platform.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of populer open online educational and
            community initiatives to empower retail traders and investors
          </p>
          <p>
            Rainmatter,our fintech fund and incubator has invested in several
            fintech startups with the goal of growing the indian capitaal
            markets.
          </p>
          <p>
            And yet we are always up to something new every day catch up on the
            latest updates on our blog or share the media is saying about us
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
