import { useEffect,useState } from 'react';
import React from 'react'
import video from '../assets/home.mp4';
import  '../Login.css';
import Nav from '../components/Nav';
import axios from 'axios';
function Obs() {
    const [data,setData] = useState([]);
    const [tecid,setTecid]=useState("");
    const [tnae,setTnae]=useState("");
    const [dev,setDev]=useState("");
    const [yr,setYr]=useState("");
    const [coun,setCoun]=useState("");
  useEffect(()=>{
    fetch('http://localhost:8081/api/obs')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));
    

  },[] )
  
    
  
  return (
    <div>
     <video src={video} autoPlay loop muted playsInline className="bg1"/>
     
    <Nav/>
         
    <div className='container'>
    <div className='fix'> 

    <h1 className="size" style={{color:"white"}}>Obs Technology</h1>
      <table>
        <thead>
          <th>Tech.id</th>
          <th>Name</th>
          <th>Developer</th>
          <th>Dev year</th>
          <th>Country</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.tech_id}</td>
              <td>{d.tname}</td>
              <td>{d.developer}</td>
              <td>{d.dev_year}</td>
              <td>{d.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
    )
  
}
  export default Obs