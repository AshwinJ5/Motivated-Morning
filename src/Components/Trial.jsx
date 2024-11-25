import React from 'react'

function Trial() {
  return (
    <div className='trial_main'>
        <div className="row w-100">
        <div className="col-lg-6 mx-auto trial_col">
            <div className="trial_heading">
            There's a better way.
            </div>
            <div className='trial_sub'>
                <i className="fa-solid fa-circle-check"></i> 
                <span>Experincing your habits transform</span>
            </div>
            <div className='trial_sub'>
                <i className="fa-solid fa-circle-check"></i>
                <span>Accessing tools, people, and expertise</span>
            </div>
            <div className='trial_sub'>
                <i className="fa-solid fa-circle-check"></i>
                <span>Seeing your work move forward</span>
            </div>
            <div className="trial_button">
                Start Your Free Trial
            </div>
        </div>
        <div className="col-lg-6 trial_second  trial_col">
            "Get more done before 9am than you used to get done all day."
        </div>                    
        </div>
    </div>
  )
}

export default Trial