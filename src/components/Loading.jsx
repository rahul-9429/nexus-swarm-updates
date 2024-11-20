import React from "react";
import '../App.css'
import p1 from '../photos/1.png'
import p2 from '../photos/3.png'

 const Loading = () => {
   return (
     <>

      <div className="load-wrap">
         
         <img src={p1} alt="" className="loading_cls1" />
         <img src={p2} alt="" className="loading_cls2" />
         <img src="" alt="" className="loading_cls3" />
         {/* <img src="" alt="" className="loading_cls" />
         <img src="" alt="" className="loading_cls" />
         <img src="" alt="" className="loading_cls" />
         <img src="" alt="" className="loading_cls" />
         <img src="" alt="" className="loading_cls" />
         <img src="" alt="" className="loading_cls" />
         <img src="" alt="" className="loading_cls" /> */}
      </div>
     
     </>
   )
 }
 
 export default Loading