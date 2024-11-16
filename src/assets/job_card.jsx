import React from 'react';
import '../App.css';
import Logo from '../NEXUSSwarm.png';
import N_bee from '../nexus-bee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ obj }) => {
  return (
    <>
      <div className="container-wrap">
        <div className="card">
          <div className="card-header"><img src={Logo} alt="Nexus Swarm Logo" className="card-nexus-logo" /></div>
          <div className="header">
            <span className="icon">
              <img src={N_bee} alt="" className='n_bee'/>
            </span>
            <p className="alert">{obj.title}</p>
          </div>
          

          <p className="message">
            {obj.description}
          </p>
          <p className="message-2">
            <div>
                <FontAwesomeIcon icon={faCalendar} /> 
                <span className="date_loc">{obj.rdate}</span>
                <br/>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                <span className="date_loc">
                <a href={obj.location_link}>
                {obj.location}</a>
                </span>
            </div>
          </p>
          <div className="actions">
            <div><a className="mark-as-read Share" href="#">
              Share
            </a></div>
            <div><a className="mark-as-read" href="#">
              Apply
            </a></div>
             </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
