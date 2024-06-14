import { useEffect,useState } from 'react';
import React from 'react'
import video4 from '../assets/moon.mp4';
import  '../Login.css';
import Nav from '../components/Nav';
import axios from 'axios';
function Moo() {
    const [data,setData] = useState([]);
    const [moid,setMoid]=useState("");
    const [name,setName]=useState("");
    const [size,setSize]=useState("");
    const [tech_id,setTecid]=useState("");
    const [plaid,setPlaid]=useState("");
    const[moodel,setMoodel]=useState("");
  useEffect(()=>{
    fetch('http://localhost:8081/api/moon')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));
    

  },[] )
  function handleSubmit(event){
    axios.post('http://localhost:8081/api/moonin',{moid,name,size,tech_id,plaid})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    
  }

  function dell(){
    axios.post('http://localhost:8081/api/moodel',{moodel})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    window.location.reload();
  }
  return (
    <div>
     <video src={video4} autoPlay loop muted playsInline className="bg2"/>
    <Nav/>
    <div className='container'>
    <div className='fix'> 
    <h1 className="size" style={{color:'white'}}>Moon</h1>
      <table>
        <thead>
          <th>Moon.id</th>
          <th>Name</th>
          <th>Size</th>
          <th>Tech.id</th>
          <th>Planet.id</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.moon_id}</td>
              <td>{d.name}</td>
              <td>{d.size}</td>
              <td>{d.tech_id}</td>
              <td>{d.planet_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='hello'>
      <form className='inputholder'>
                
                <input placeholder='Moon ID' type="text" style={{height:'30px'}} value={moid} onChange={e => setMoid(e.target.value)} />
                <input placeholder='Name' type="text" style={{height:'30px'}} value={name} onChange={e => setName(e.target.value)} />
                <input placeholder='Size' type="text" style={{height:'30px'}} value={size} onChange={e => setSize(e.target.value)} />
                <input placeholder='Tech ID' type="text" style={{height:'30px'}} value={tech_id} onChange={e => setTecid(e.target.value)} />
                <input placeholder='Planet ID' type="text" style={{height:'30px'}}value={plaid} onChange={e => setPlaid(e.target.value)} />
                <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={handleSubmit}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Insert</span><span style={{color:'white',fontSize:'20px'}}>INSERT</span></button>
                <input placeholder='ID' type="text" style={{height:'30px'}} value={moodel} onChange={e => setMoodel(e.target.value)} />
            <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={dell}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Delete</span><span style={{color:'white',fontSize:'20px'}}>Delete</span></button>
            
            </form>
            </div>
    </div>
    </div>
    )
  }
  
  export default Moo