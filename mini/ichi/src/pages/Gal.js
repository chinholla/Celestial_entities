import { useEffect,useState } from 'react';
import React from 'react'
import video from '../assets/home.mp4';
import  '../Login.css';
import Nav from '../components/Nav';
import axios from 'axios';
function Gal() {
    const [data,setData] = useState([]);
    const [galid,setGalid]=useState("");
    const [name,setName]=useState("");
    const [year,setYear]=useState("");
    const [dis,setDis]=useState("");
    const [con,setCon]=useState("");
    const[galdel,setGaldel]=useState("");
  useEffect(()=>{
    fetch('http://localhost:8081/api/gal')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));
    

  },[] )
  function handleSubmit(){
    axios.post('http://localhost:8081/api/galin',{galid,name,year,dis,con})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    
  }
  function dell(){
    axios.post('http://localhost:8081/api/delete',{galdel})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    window.location.reload();
  }
  return (
    <div>
     <video src={video} autoPlay loop muted playsInline className="bg"/>
    <Nav/>
    <div className='container'>
<div className='fix'> 
    <h1 className="size">Galaxy</h1>
      <table>
        <thead>
          <th>Galaxy.id</th>
          <th>Name</th>
          <th>year_dis</th>
          <th>distance_earth</th>
          <th>Constellations</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.galaxy_id}</td>
              <td>{d.name}</td>
              <td>{d.year_dis}</td>
              <td>{d.distance_earth}</td>
              <td>{d.constellation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='hello'>
      <form className='inputholder'>
                
                <input placeholder='ID' type="text" style={{height:'30px'}}value={galid} onChange={e => setGalid(e.target.value)} />
                <input placeholder='Name' type="text" style={{height:'30px'}} value={name} onChange={e => setName(e.target.value)} />
                <input placeholder='Year' type="text" style={{height:'30px'}} value={year} onChange={e => setYear(e.target.value)} />
                <input placeholder='Distance from Earth' type="text" style={{height:'30px'}} value={dis} onChange={e => setDis(e.target.value)} />
                <input placeholder='Constellation' type="text" style={{height:'30px'}} value={con} onChange={e => setCon(e.target.value)} />
                <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={handleSubmit}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Insert</span><span style={{color:'white',fontSize:'20px'}}>Insert</span></button>
            
            <input placeholder='ID' type="text" style={{height:'30px'}} value={galdel} onChange={e => setGaldel(e.target.value)} />
            <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={dell}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Delete</span><span style={{color:'white',fontSize:'20px'}}>Delete</span></button>
            </form>
        </div>
    </div>
    </div>
    )
  }
  
  export default Gal