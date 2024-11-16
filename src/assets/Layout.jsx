
import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Job_card from './job_card'
import Adminn from './Admin'
import Logo from '../NEXUSSwarm.png'
// import N_bee from './nexus-bee.png'

const Layout = () => {
  return (
    <>
    <header>
     <div className="head-logo">
      <img src={Logo} alt="" />
     </div>
     <h1 className='logo-caption'>#Where Ideas Converge</h1>
     <form action="">
      <p>join our hive and</p>
     </form>
    </header>
    <div className="socials">
      {/* <img src={N_bee} alt="" className='n_bee'/>
      <img src={N_bee} alt="" className='n_bee'/>
      <img src={N_bee} alt="" className='n_bee'/> */}
      <img src="https://img.icons8.com/?size=30&id=16733&format=png&color=000000" alt="" />
      <img src="https://img.icons8.com/?size=30&id=8808&format=png&color=000000" alt="" />
      <img src="https://img.icons8.com/?size=30&id=dz63urxyxSdO&format=png&color=000000" alt="" />
      </div>
     <main>
        <Outlet />
      </main>
    <footer>
  <hr />
  <p>Designed and Developed by RahulKasimikota</p>
    </footer>
    </>
  )
}

export default Layout