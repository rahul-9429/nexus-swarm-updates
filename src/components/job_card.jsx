import React from 'react';
import '../App.css';
import Logo from '../photos/NEXUSSwarm.png';
import N_bee from '../photos/nexus-bee.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ obj, highlighted }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Check out this job: ${obj.title}`,
          text: obj.description,
          url: `${window.location.origin}?id=${obj.id}`,
        })
        .then(() => console.log("Job shared successfully"))
        .catch((error) => console.error("Error sharing job:", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div id={obj.id} className='container-wrap}'>
      <div className={`card ${highlighted ? 'highlight' : ''}`}>
        <div className="card-header">
          <img src={Logo} alt="Nexus Swarm Logo" className="card-nexus-logo" />
        </div>
        <div className="header">
          <span className="icon">
            <img src={N_bee} alt="" className="n_bee" />
          </span>
          <p className="alert">{obj.title}</p>
        </div>
        <p className="message">{obj.description}</p>
        <p className="message-2">
          <div className="fa-aws">
            <FontAwesomeIcon icon={faCalendar} />
            <span className="date_loc">{obj.date}</span>
            <br />
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <a href={obj.location_link}>
              <span className="date_loc">{obj.location}</span>
            </a>
            <br />
            {/* <FontAwesomeIcon icon={faGraduationCap} />
            <span className="date_loc">{obj.Qualification}</span> */}
          </div>
        </p>
        <div className="actions">
          <div>
            <a className="mark-as-read Share test-ui" onClick={handleShare}>
              Share
            </a>
          </div>
          <div>
            <a className="mark-as-read apply" href={obj.externalUrl}>
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
