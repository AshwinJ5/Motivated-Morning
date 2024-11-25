import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_heading">
        Questions? Let's Talk.
        </div>
        <div className='footer_content'>We'll help you determine if Motivated Mornings is the right fit for you and answer any of your questions.</div>
        <div className="footer_button">
            Let's Talk
        </div>
        <div className='d-flex footer_social'>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="footer_email">
            Email:hello@motivatedmornings.work
        </div>
        <div className="footer_copyright">
        © 2020 Motivated Mornings, Inc. All rights reserved. Site by 
        <a href="/">Knapsack.</a>
        <div>
            <a href="/">guidelines</a>
            <a href="/">privacy</a>
            <a href="/">terms</a>
            <a href="/">members</a>
        </div>
        </div>
        <div className="footer_help_button">
            <div className="footer_help ms-auto m-3 ">
                <i className="fa-regular fa-circle-question"></i>Help
            </div>
        </div>
        
    </div>
  )
}

export default Footer