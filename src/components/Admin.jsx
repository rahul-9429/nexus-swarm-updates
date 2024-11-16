import React from 'react'
import { useState } from 'react'
import '../App.css'
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase_config';

const Admin = () => {
    const [title, setTitle] = useState("");
    const [para1, setPara1] = useState('');
    const [para2, setPara2] = useState('');
    const [extUrl, setExtUrl] = useState('');
    
     const handleTitle = (e) =>{
        setTitle(e.target.value);
        setPara1(e.target.value); 
     } 
     const handlePara1 = (e) =>{
        setPara1(e.target.value);
     } 
     const handlePara2 = (e) =>{
        setPara2(e.target.value);
     } 
     const handleextUrl = (e) =>{
        setExtUrl(e.target.value);
     } 

     const handleSubmit = async  (e) =>{
        e.preventDefault()
        console.log(title,para1,para2,extUrl);

        try{
            const docRef = await addDoc(collection(db, "nexus-updates"), {
                title: title,
                para1: para1,
                para2: para2,
                extUrl: extUrl,
                timestamp: new Date()
            });
            setTitle("");
            setPara1("");
            setPara2("");
            setExtUrl("");
        }
        catch(e){
            console.error("Error adding document: ", e);}
     }; 

  return (
    <div className="admin-form">
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" onChange={handleTitle } />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" onChange={handlePara1}/>
        </div>
        <div className="form-group">
            <label htmlFor="para2">Para2</label>
            <input type="text" className="form-control" id="para2" onChange={handlePara2}/>
        </div>
        <div className="form-group">
            <label htmlFor="ext-url">ext-url</label>
            <input type="date" className="form-control" id="ext-url" onChange={handleextUrl}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Admin