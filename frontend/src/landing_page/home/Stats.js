import React from 'react'

function Stats() {
    return ( 
    
        <div className='container p-3'>

            <div className='row p-5'>

                <div className='col-6 p-5 '>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h3>Customer first always</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crore worth of equity and investments.  </p>
                    <h3>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam,"gamification", or annoying push notifications.High quality apps that you use at your pace, the way you like  </p>
                    <h3>The tradeing Universe</h3>
                    <p className='text-muted'> Not just an sites but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.  </p>
                    <h3>Do better with money </h3>
                    <p className='text-muted'>With initiative like Nudge and kill swithc, we don't just facilitatte transactions, but actively help you do better with your money  </p>
            </div>

                <div className='col-6 p-5 '>

                    <img src='media/images/ecosystem.png' style={{ width: "85%" }} />

                    <div className='texr-center mt-3'>
                        <a href='' className='mx-5'>Explore Our Products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                            <a href=''>Try Kite Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    </div>
                </div>

            </div>


        </div>
         );
}

export default Stats;