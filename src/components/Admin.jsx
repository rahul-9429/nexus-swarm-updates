import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from './firebase_config';
import '../App.css';

const Admin = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionlen, setDescriptionLen] = useState(0);
    const [titleLen, setTitleLen] = useState(0);
    const [date, setDate] = useState('');
    const [externalUrl, setExternalUrl] = useState('');
    const [location, setLocation] = useState('');
    const [locationUrl, setLocationUrl] = useState('');
    const [Qualification, setQualification] = useState('');
    const [err, setErr] = useState('Start Typing....');
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            }
        });
        return unsubscribe; 
    }, [navigate]);

    const handleTitle = (e) => 
        {setTitle(e.target.value);
        setTitleLen(e.target.value.length);
        }
    const handleDescription = (e) =>{ setDescription(e.target.value)
        setDescriptionLen(e.target.value.length);
    };
    // console.log(descriptionlen);
    const handleDate = (e) => setDate(e.target.value);
    const handleExternalUrl = (e) => setExternalUrl(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleLocationUrl = (e) => setLocationUrl(e.target.value);
    // const handleQualification = (e) => setQualification(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (titleLen > 45) {
            setErr("Title is too long! Limit to 45 chars");
            return;
        }
    
        if (descriptionlen < 186 || descriptionlen > 210) {
            setErr(`Description must be between 186 and 210 characters. Remaining: ${(descriptionlen < 186) ? 186 - descriptionlen : 0}`);
            return;
        }
    
        setErr("");
    
        try {
            await addDoc(collection(db, "nexus-updates"), {
                title,
                description,
                date,
                externalUrl,
                location,
                locationUrl,
                Qualification,
                timestamp: new Date(),
            });
    
            setTitle('');
            setDescription('');
            setDate('');
            setExternalUrl('');
            setLocation('');
            setLocationUrl('');
            setErr("Submission successful!"); 
        } catch (error) {
            console.error("Error adding document: ", error);
            setErr("Failed to add document. Please try again.");
        }
    };
    

    return (
        <div className="admin-form">
            <form onSubmit={handleSubmit} className='admins-form'>
                <h1 className="admin-name">Hello, Queen Bee {}</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                    placeholder='Enter event name'
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={handleTitle}
                        required
                        max={45}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                    placeholder='Enter event description'
                        cols={30}
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={handleDescription}
                        max={210}
                        min={186}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control date-ip"
                        id="date date-ip"
                        value={date}
                        onChange={handleDate}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="external-url">External URL</label>
                    <input
                    placeholder='Enter registration url'
                        type="url"
                        className="form-control"
                        id="external-url"
                        value={externalUrl}
                        onChange={handleExternalUrl}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                    placeholder='Enter location'
                        type="text"
                        className="form-control"
                        id="location"
                        value={location}
                        onChange={handleLocation}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location-url">Location URL</label>
                    <input
                    placeholder='Enter location url'
                        type="text"
                        className="form-control"
                        id="location-url"
                        value={locationUrl}
                        onChange={handleLocationUrl}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                    placeholder='BTech/BE/Diplamo/Any'
                        type="text"
                        className="form-control"
                        onChange={handleQualification}
                        required
                    />
                </div>  */}
                <p className='error-para'>
                {err}
                </p>
                <button type="submit" className="button-submit bnt-admin sub-mail-div">
                    Post
                </button>
            </form>
        </div>
    );
};

export default Admin;
