import React, { useState, useEffect } from 'react';
import '../App.css';
import Job_card from './job_card';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase_config.js';

const Home = () => {
    const [obj, setObj] = useState([]); 
    const fetchFirestoreData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'nexus-updates'));
            const fetchedData = [];

            querySnapshot.forEach((doc) => {
                fetchedData.push({ id: doc.id, ...doc.data() });
            });

            setObj(fetchedData); 
        } catch (error) {
            console.error('Error retrieving Firestore data:', error);
        }
    };

    useEffect(() => {
        fetchFirestoreData();
    }, []);

    return (
    <>
        <div className="cars-display">
            {obj.length > 0 ? (
                obj.map((item) => (
                    <Job_card key={item.id} obj={item} />
                ))
            ) : (
                <p>Loading...</p> 
            )}
        </div></>
    );
};

export default Home;
