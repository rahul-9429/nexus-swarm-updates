import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';
import {auth, db} from './firebase-config';
import { collection, addDoc, doc } from 'firebase/firestore';
import Nexus from "./assets/images/NEXUSSwarm.png";

const Landing = () =>{

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const datee = new Date();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError("Login successful! Redirecting you");
            lastLogin(email);
           //redirect
        } catch (err) {
            setError("Login failed. Please check your email and password.");
        }

    async function lastLogin(eamil) {
        try{
            const userRef = doc(db,'LastLogins', email);
            const loginRef = await addDoc(collection(userRef, 'logins'),{
              one : "one",
              two : "two",
            })  ;
      }
      catch(err){
          console.log(err);
      }
    }

    }
    return(
    
        <>
         <div className="w-full h-screen flex flex-col justify-center items-center">
        {/* <img src={Nexus} alt="" className="h-[44%] fixed sm:h-[100%] -z-10"/> */}
           
        <div className=" w-[80%] h-[74%] mt-8 border-4 border-green-500 bg-transparent backdrop-blur-xs flex flex-col justify-center items-center rounded-2xl z-10 sm:w-[40%]  ">
        <h1 className=''>Hello Nexus Bee!</h1>
         <input type="email" id="email" placeholder='Email'
         onChange={(e)=>setEmail(e.target.value)}
         required
         className="bg-transparent"
         />

            <input type="password" id="password" placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}
            required
         className="bg-transparent"

            />
         <button onClick={handleLogin}>Login</button>
         <span className="error-msg ">
            {error}
         </span>
        </div>
        <span className="mt-6">2024 Nexus Swarm</span>
        </div>
        </>
    )
};

export default Landing;