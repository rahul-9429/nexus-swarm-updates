import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../photos/NEXUSSwarm.png';
import P3 from '../photos/3.png';

const Layout = () => {
  const [email, setEmail] = useState('');

  const handleEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyBpNDlywDwi7rTlPRnuWPXzCMxIZ7K0w3Y23tDHmD6HrSKBoE6CT3Ma2lPcHjbtpf5/exec',
        {
          method: 'POST',
          body: formData,
        }
      );
  
      const contentType = response.headers.get('Content-Type');
      let result;
  
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = await response.text(); 
      }
  
      console.log('Success:', result);
      alert('Subscription successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('Subscription failed.');
    }
  };
  

  return (
    <>
      <header>
        <div className="head-logo">
          <img src={Logo} alt="Nexus Swarm Logo" />
        </div>
        <h1 className="logo-caption">Where Ideas Converge</h1>
        <form>
          <p className="news-sub">
            Join our hive and Stay ahead of the curve with the latest tech trends!
            <br />
            Catch all the latest happenings before anyone else.
          </p>
        </form>
      </header>

      <img src={P3} alt="Tech Image" className="p3" />

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
            Subscribe
          </button>
        </form>

        <hr />

        <div className="social-links">
          <div className="part part-1">
            <img src={Logo} alt="Footer Logo" className="footer-logo" />
            <ul>
              <li>Unite</li>
              <li>Empower</li>
              <li>Explore</li>
            </ul>
          </div>

          <div className="part part-1">
            <a href="">
              <span>Whatsapp</span>
            </a>
            <a href="">
              <span>Instagram</span>
            </a>
            <a href="">
              <span>LinkedIn</span>
            </a>
            <a href="">
              <span>Youtube</span>
            </a>
          </div>

          <div className="part-2 part">
            <a href="">
              <span>Telegram</span>
            </a>
            <a href="">
              <span>Campus Ambassadors</span>
            </a>
            <a href="">
              <span>Speaker Interest Form</span>
            </a>
            <a href="">
              <span>Contact</span>
            </a>
          </div>
        </div>

        <p className="news-sub">
          All rights reserved
          <br />
          Designed and Developed by Nexus Swarm
        </p>
      </footer>
    </>
  );
};

export default Layout;
