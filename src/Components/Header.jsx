import React from 'react'
import img1 from '../assets/one.png'

function Header() {
  return (
    <div className='header_main'>
        <div className="row w-100">
    <div className="col-lg-6 mx-auto header_col">
    <div className="header_heading">
    Actually do the work.
    </div>
    <div className='header_sub'>
        Accountability, community, and productivity coaching to help you start and finish the work.
    </div>
    <div className="trial_button">
    <i class="fa-solid fa-play me-2"></i> See How It Works
    </div>
</div>   
<div className="col-lg-6 header_second  trial_col">
        <img src={img1} alt="" />
    </div>                 
</div>
    </div>
  )
}

export default Header