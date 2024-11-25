import React from 'react'

function Plan() {
  return (
    <>
    <div className='plan_main'>
        <div className="plan_heading text-center">
            Start with a free trial. Change your plan anytime.
        </div>
        <div className="row">
        <div className="col-lg-3">
            <div className="plan_name">
                Momo
            </div>
            <div className="plan_price">
                $49/mo.
            </div>
            <div className="plan_description">
                Get the motivation and accountability you need to get real work done.
            </div>
        </div>
        <div className="col-lg-3">
        <div className="plan_name">
                Momo Pro
            </div>
            <div className="plan_price">
                $399/mo.
            </div>
            <div className="plan_description">
            Take it to the next level with your own personal productivity coach.
            </div>
        </div>                   
        </div>
        <div className="trial_button mx-auto">
                View Plans Details
                </div>
    </div>
                <div className="bg_cover">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffc800" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,192C960,181,1200,107,1320,69.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                </div>
                </>
  )
}

export default Plan