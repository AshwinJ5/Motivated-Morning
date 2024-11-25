import React from 'react'
import img4 from '../assets/four.png'
import img5 from '../assets/five.png'
import img6 from '../assets/six.png'
import img7 from '../assets/seven.png'
import img8 from '../assets/eight.png'

function Features() {
  return (
    <div className='features_main'>
        <div className="features_heading">
            Motivated Mornings is a virtual coworking community proven to help you do work.
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-4">
                <div className="col_img">
                    <img src={img4} alt="" />
                </div>
                <div className="col_heading">
                Morning Kick-Off Calls
                </div>
                <div className="col_description">
                Build healthy habits. Jumpstart each day with a 10min group video call with an inspiring thought about creating. Stay accountable and motivated.
                Offered Mon-Fri at 5am and 7am.
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="col_img">
                <img src={img5} alt="" />
                </div>
                <div className="col_heading">
                    Virtual Coworking
                </div>
                <div className="col_description">
                    Following Morning Kick-Off Calls, virtually cowork with fellow creators (MoMos). Feel the momentum of a 2- hour silent group coworking sesh.
                    Celebrate benchmarks with your peers.
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="col_img">
                <img src={img6} alt="" />
                </div>
                <div className="col_heading">
                Private Slack Group
                </div>
                <div className="col_description">
                Stay connected with what your fellow MoMos are doing, creating, and accomplishing. A space for relationship building, inspiration, feedback, and celebrating momentum
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="col_img">
                <img src={img8} alt="" />
                </div>
                <div className="col_heading">
                Productivity Coaching Sessions*
                </div>
                <div className="col_description">
                A weekly 30-minute private meeting to discuss goals, setbacks, breakthroughs, strategies, and create ways to be sure the momentum keeps going.
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="col_img">
                <img src={img7} alt="" />
                </div>
                <div className="col_heading">
                Tailored Action Plans*
                </div>
                <div className="col_description">
                Our personal coaching is more than rah-rah. You will go away with specific action plans to keep you moving in the right direction. Forward.
                </div>
            </div>
        </div>
        <div className="text-center contition_features">
            *Available exclusively with the Pro plan
        </div>
    </div>
  )
}

export default Features