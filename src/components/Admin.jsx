import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from './firebase_config';
import '../App.css';
console.log(import.meta.env);

const Admin = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [externalUrl, setExternalUrl] = useState('');
    const [location, setLocation] = useState('');
    const [locationUrl, setLocationUrl] = useState('');
    const [Qualification, setQualification] = useState('');
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            }
        });
        return unsubscribe; 
    }, [navigate]);

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleExternalUrl = (e) => setExternalUrl(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleLocationUrl = (e) => setLocationUrl(e.target.value);
    const handleQualification = (e) => setQualification(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
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
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="admin-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
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
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={handleDate}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="external-url">External URL</label>
                    <input
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
                        type="text"
                        className="form-control"
                        id="location-url"
                        value={locationUrl}
                        onChange={handleLocationUrl}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location-url"
                        value={locationUrl}
                        onChange={handleQualification}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Admin;
