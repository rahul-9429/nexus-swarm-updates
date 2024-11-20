import React from 'react';
import '../App.css';
import Logo from '../photos/NEXUSSwarm.png';
import N_bee from '../photos/nexus-bee.png'
import P1 from '../photos/1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt ,faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ obj }) => {
  return (
    <>
      <div className="container-wrap">
        {/* <div class="bee-icon">
        </div> */}
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
                <span className="date_loc">{obj.date}</span>
                <br/>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                <a href={obj.location_link}>
                <span className="date_loc">
                {obj.location}
                </span></a>
                <br />
                <FontAwesomeIcon icon={faGraduationCap} />
                <span className="date_loc">
                {obj.Qualification}
                </span>
                
            </div>
          </p>
          <div className="actions">
            <div><a className="mark-as-read Share" href="#">
              Share
            </a></div>
            <div><a className="mark-as-read" href={obj.externalUrl}>
              Apply
            </a></div>
             </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
