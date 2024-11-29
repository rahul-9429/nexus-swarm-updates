import React, { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase_config";
import Del_con from "./Del_con";

const AdminDis = ({ data }) => {
  const [delReq, setdelReq] = useState(false);

  const togglePopup = () => {
    setdelReq(!delReq);
  };

  const deleteDocument = async () => {
    const docRef = doc(db, "nexus-updates", data.id);
    try {
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      setdelReq(false);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  if (!data?.id) {
    console.error("Invalid or missing `data.id`");
    return <p>Invalid data</p>;
  }

  return (
    <div className="admin-dis-warp">
      <div className="part-admin-show1">
        <h2>{data.title}</h2>
        {/* <p>{data.description}</p> */}
      </div>
      <div className="part-admin-show2">
        {delReq ? (
          <Del_con 
            data={data.title}
            onConfirm={deleteDocument} 
            onCancel={togglePopup} 
          />
        ) : (
          <button onClick={togglePopup} className="delete-button">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminDis;
