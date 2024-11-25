import React from 'react'
import img3 from '../assets/three.png'

function FreeGuide() {
  return (
    <div className='guide_main'>
        <div className="row">
            <div className="col-lg-5 first_col">
                <div className="free_guide">
                    FREE GUIDE
                </div>
                <div className="guide_heading">
                    8 Secrets to Doing Work That Matters
                </div>
                <div className='guide_points'>
                    <ul>
                        <li>
                            Focus on what's important
                        </li>
                        <li>
                            Make massive progress
                        </li>
                        <li>
                            Actually get the work done
                        </li>
                    </ul>
                </div>
                <div className="guide_input">
                    <form>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="email" placeholder='Email Address' />
                    </form>
                </div>
                <div className="guide_button">
                <i class="fa-solid fa-down-long"></i> DOWNLOAD THE GUIDE
                </div>
            </div>
            <div className="col-lg-7">
                <img src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default FreeGuide