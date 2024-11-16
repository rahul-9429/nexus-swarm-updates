import React from 'react'
import '../App.css'
import Job_card from './job_card'

const Home = () => {
    const obj ={
        title:"UiPath Community Day Hyderabad",
        description :"The biggest in-person event 30 Nov 2024 T Hub Madhapur, Hyderabad",
        rdate:"11/12/2024",
        location:"Visakhapatnam",
        location_link:""
        };
  return (
   <>
   <div className="cars-display">
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>
      <Job_card obj={obj}/>

      </div>
   </>
  )
}

export default Home