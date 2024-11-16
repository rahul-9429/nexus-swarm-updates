import React, { useEffect } from 'react';
import '../App.css';
import Job_card from './job_card';
import { collection, getDocs } from "firebase/firestore"; // Correct imports
import { db } from './firebase_config.js'; // Firestore instance

const Home = () => {
    const obj = {
        title: "UiPath Community Day Hyderabad",
        description: "The biggest in-person event 30 Nov 2024 T Hub Madhapur, Hyderabad",
        rdate: "11/12/2024",
        location: "Visakhapatnam",
        location_link: ""
    };

    const fetchFirestoreData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'nexus-updates')); 
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`, doc.data());
                {<Job_card obj={doc.data()} />}
            });
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
                <Job_card obj={obj} />
                <Job_card obj={obj} />
                <Job_card obj={obj} />
                <Job_card obj={obj} />
                <Job_card obj={obj} />
                <Job_card obj={obj} />
                <Job_card obj={obj} />
                <Job_card obj={obj} />
            </div>
        </>
    );
};

export default Home;
