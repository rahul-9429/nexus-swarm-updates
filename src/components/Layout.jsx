import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../photos/NEXUSSwarm.png';
import P3 from '../photos/3.png';
import P2 from '../photos/2.png';
import P5 from '../photos/5.png';
import P6 from '../photos/6.png';
import P7 from '../photos/7.png';
import P8 from '../photos/8.png';


const Layout = () => {
  const [email, setEmail] = useState('');
  const [subState, setSubState] = useState(false);
  const [currDate, setCurrDate] = useState(new Date().toISOString().slice(0, 10));
  const [currTime, setCurrTime] = useState();
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form = document.querySelector('.sub-form'); 
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwooL7MSd4795Hrev2aLQ9mA6mvCw31hS_hmn91EGQorSrf_83iptfD2Oi5Y9-4q6ls/exec',
        {
          method: 'POST',
          body: formData,
        }
      );
      setSubState(true);
      form.reset(); 
      const contentType = response.headers.get('Content-Type');
      let result;
  
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = await response.text(); 
      }
  
      // console.log('Success:', result);
      // alert('Subscription successful!');
    } catch (error) {
      // console.error('Error:', error);
      // alert('Subscription failed.');s
    }
  };

  return (
    <>
      <header>
        <div className="head-logo">
          <img src={Logo} alt="Nexus Swarm Logo" />
        </div>
        <h1 className="logo-caption">Where Ideas Converge</h1>
        
          <p className="news-sub">
            Join our hive and Stay ahead of the curve with the latest tech trends!
            <br />
            Catch all the latest happenings before anyone else.
          </p>
          <span className="date-dis">
             <span>{currDate}</span>
             <span>{currTime}</span>
               </span>
        
      </header>

      <img src={P3} alt="Tech Image" className="p3" />
      <img src={P2} alt="Tech Image" className="p2" />
      <img src={P2} alt="Tech Image" className="p2 p2-sub" />
      <img src={P5} alt="Tech Image" className="p5" />
      <img src={P6} alt="Tech Image" className="p6" />
      {/* <img src={P7} alt="Tech Image" className="p7" /> */}
      {/* <img src={P8} alt="Tech Image" className="p8" /> */}





      <div className="socials">
        <a href="https://www.whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P">
          <img
            src="https://img.icons8.com/?size=30&id=16733&format=png&color=000000"
            alt="WhatsApp Icon"
          />
        </a>
        <a href="https://www.linkedin.com/company/nexus-swarm/posts/?feedView=all&viewAsMember=true">
          <img
            src="https://img.icons8.com/?size=30&id=8808&format=png&color=000000"
            alt="LinkedIn Icon"
          />
        </a>
        <a href="https://www.instagram.com/nexus_swarm">
          <img
            src="https://img.icons8.com/?size=30&id=dz63urxyxSdO&format=png&color=000000"
            alt="Instagram Icon"
          />
        </a>
      </div>

      <main>
        <Outlet />
      </main>

      <footer>
        <p className="footer-para">
          Stay ahead in tech! Subscribe to our newsletter for the latest updates, trends, and insights—delivered straight to your inbox!
        </p>
        <form action="" className="sub-form" onSubmit={handleEmail}>
          <input
            type="email"
            name="Email"
            placeholder="Enter your mail"
            className="input-sub"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="button-submit sub-mail-div" type="submit">
          <span className={subState ? ' subbbb fade-in' : ' subbbb fade-out'}>
                {subState ? 'Subscribed' : 'Subscribe'}
         </span>
          </button>
        </form>

        <hr />

        <div className="social-links">
          <div className="part-1">
            <img src={Logo} alt="Footer Logo" className="footer-logo" />
            <ul>
              <li>Unite</li>
              <li>Empower</li>
              <li>Explore</li>
            </ul>
          </div>
          <div className="footer-sm">
          <div className="part part-2">
            <a href="https://whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P">
              <span>Whatsapp <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
            <a href="https://www.instagram.com/nexus_swarm">
              <span>Instagram <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
            <a href="https://www.linkedin.com/company/nexus-swarm/?viewAsMember=true">
              <span>LinkedIn <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
            <a href="https://www.youtube.com/@nexus_swarm?sub_confirmation=1">
              <span>Youtube <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
          </div>

          <div className="part-3 part">
            <a href="https://whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P">
              <span>Telegram <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
            <a href="https://forms.gle/M3ihxsHfSY8tQYYf6">
              <span>Campus Ambassadors <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
            <a href="https://forms.gle/TeJrQmC6HwbLCVHA8">
              <span>Speaker Interest<svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
            <a href="mailto:nexuswarm@gmail.com">
              <span>Contact <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            </a>
          </div></div> 
        </div>

        <p className="news-sub-small">
          All rights reserved
          <br />
          Designed and Developed by Nexus Swarm
        </p>
      </footer>
    </>
  );
};

export default Layout;
