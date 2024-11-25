import React from 'react'
import img1 from '../assets/two.png'

function TrialTwo() {
  return (
    <>
    
    <div className='trial_maintwo'>
    <div className="row w-100">
        <div className="col-lg-6 trial_second  trial_col">
    <img src={img1} alt="" />
    </div> 
    <div className="col-lg-6 mx-auto trial_col">
    <div className="trial_twoheading">
    Tired of not finishing that script?
    </div>
    <div className='trial_sub trial_twosub'>
        <i className="fa-solid fa-xmark"></i> 
        <span>Hitting snooze</span>
    </div>
    <div className='trial_sub trial_twosub'>
        <i className="fa-solid fa-xmark"></i>
        <span>Endless procrastinating</span>
    </div>
    <div className='trial_sub trial_twosub'>
        <i className="fa-solid fa-xmark"></i>
        <span>Never finding the time</span>
    </div>
    <div className='trial_sub trial_twosub'>
        <i className="fa-solid fa-xmark"></i>
        <span>Missing goals</span>
    </div>
    <div className="trial_button">
        Start Your Free Trial
    </div>
    </div>
    </div>
    </div>
    <div className='trial_svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffc800" fill-opacity="1" d="M0,128L120,160C240,192,480,256,720,288C960,320,1200,320,1320,320L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg></div>
    </>
  )
}

export default TrialTwo