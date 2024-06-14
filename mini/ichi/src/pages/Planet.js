import { useEffect,useState } from 'react';
import React from 'react'
import video1 from '../assets/planets.mp4';
import  '../Login.css';
import Nav from '../components/Nav';
import axios from 'axios';
function Pla() {
    const [data,setData] = useState([]);
    const [plaid,setPlaid]=useState("");
    const [pnam,setPnam]=useState("");
    const [star_id,setStarid]=useState("");
    const [hav_moon,setHav]=useState("");
    const [N_moons,setNmoon]=useState("");
    const[pladel,setPladel]=useState("");
  useEffect(()=>{
    fetch('http://localhost:8081/api/planet')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));
    

  },[] )
  function handleSubmit(event){
    axios.post('http://localhost:8081/api/planin',{plaid,pnam,star_id,hav_moon,N_moons})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    
  }
  function dell(){
    axios.post('http://localhost:8081/api/pladel',{pladel})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    window.location.reload();
  }

  return (
    <div>
     <video src={video1} autoPlay loop muted playsInline className="bg"/>
    <Nav/>
    <div className='container'>
    <div className='fix'> 
    <h1 className="size" style={{color:'white'}}>Planet</h1>
      <table>
        <thead>
          <th>Planet.id</th>
          <th>Name</th>
          <th>Star.id</th>
          <th>Have.moon</th>
          <th>N.moons</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.planet_id}</td>
              <td>{d.name}</td>
              <td>{d.star_id}</td>
              <td>{d.hav_moon}</td>
              <td>{d.N_moons}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='hello'>
      <form className='inputholder'>
                
                <input placeholder='Planet ID' type="text" style={{height:'30px'}} value={plaid} onChange={e => setPlaid(e.target.value)} />
                <input placeholder='Name' type="text" style={{height:'30px'}} value={pnam} onChange={e => setPnam(e.target.value)} />
                <input placeholder='Star ID' type="text" style={{height:'30px'}} value={star_id} onChange={e => setStarid(e.target.value)} />
                <input placeholder='Have Moons?' type="text" style={{height:'30px'}} value={hav_moon} onChange={e => setHav(e.target.value)} />
                <input placeholder='No of Moons' type="text" style={{height:'30px'}} value={N_moons} onChange={e => setNmoon(e.target.value)} />
                <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={handleSubmit}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Insert</span><span style={{color:'white',fontSize:'20px'}}>INSERT</span></button>
                <input placeholder='ID' type="text" style={{height:'30px'}} value={pladel} onChange={e => setPladel(e.target.value)} />
            <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={dell}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Delete</span><span style={{color:'white',fontSize:'20px'}}>Delete</span></button>
                       
            </form>
            </div>
    </div>
    </div>
    )
  }
  
  export default Pla