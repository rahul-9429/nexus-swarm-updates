import React from "react";

const Del_con = ({ data, onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{data}</h2>
        <p>Are you sure you want to delete this event?</p>
        <div className="button_wrap"><button onClick={onConfirm} className="confirm-button">
          Yes, Delete
        </button>
        <button onClick={onCancel} className="cancel-button">
          Cancel
        </button></div>
        
      </div>
    </div>
  );
};

export default Del_con;
