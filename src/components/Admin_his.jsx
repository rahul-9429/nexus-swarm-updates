import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase_config.js';
import AdmDis from './AdminDis.jsx';    

const Admin_his = () => {
    const [fetchData, setFetchData] = useState([]);
    
    useEffect(() => {
        const fetchDataFromFirestore = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'nexus-updates'));
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setFetchData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchDataFromFirestore();
      }, []);
    return(
        <>
         <div className="admin_his_wrap">
         {fetchData.map((item) => (
    <AdmDis key={item.id} data={item} />
  ))}
         </div>
        </>
    )
}

export default Admin_his;