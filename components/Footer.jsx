import React from 'react';    
import {AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Fortune Store All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiOutlineFacebook/>
      </p>
      <p>POWERED BY <a href='https://fortunedev.netlify.app' className='trademark'>FORTUNE</a></p>

    </div>
  )
}

export default Footer