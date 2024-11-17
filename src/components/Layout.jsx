
import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Job_card from './job_card'
import Adminn from './Admin'
import Logo from '../photos/NEXUSSwarm.png'
import P3 from "../photos/3.png";

// import N_bee from './nexus-bee.png'

const Layout = () => {
  return (
    <>
    <header>
     <div className="head-logo">
      <img src={Logo} alt="" />
     </div>
     <h1 className='logo-caption'>Where Ideas Converge</h1>
     <form action="">
      <p className='news-sub'>Join our hive and Stay ahead of the curve with the latest tech trends!
        <br/>
        Subscribe to our monthly newsletter for all the must-known updates and insider news.
      </p>
     </form>
    </header>
    <img src={P3} alt="" className='p3' />
    <div className="socials">
      {/* <img src={N_bee} alt="" className='n_bee'/>
      <img src={N_bee} alt="" className='n_bee'/>
      <img src={N_bee} alt="" className='n_bee'/> */}
      <a href="https://www.whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P">
      <img src="https://img.icons8.com/?size=30&id=16733&format=png&color=000000" alt="" />
        </a>
        
        <a href="https://www.linkedin.com/company/nexus-swarm/posts/?feedView=all&viewAsMember=true">
        <img src="https://img.icons8.com/?size=30&id=8808&format=png&color=000000" alt="" />
          </a>
          
          <a href="https://www.instagram.com/nexus_swarm">
          <img src="https://img.icons8.com/?size=30&id=dz63urxyxSdO&format=png&color=000000" alt="" />

          </a>
      
      
      
      </div>
     <main>
        <Outlet />
      </main>
    <footer>
    
      <div className="input__container">
        <div className="shadow__input" />
        <button className="input__button__shadow">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
            <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#17202A" />
          </svg>
        </button>
        <input type="text" name="text" className="input__search" placeholder="What do you want to search?" />
      </div>
   
  <hr />
  <p className='news-sub'>
    All rights reserved
    <br />Designed and Developed by Nexus Swarm</p>
    </footer>
    </>
  )
}

export default Layout