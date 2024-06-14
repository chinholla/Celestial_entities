import { useEffect,useState } from 'react';
import React from 'react'
import video2 from '../assets/stars.mp4';
import  '../Login.css';
import Nav from '../components/Nav';
import axios from 'axios';
function Sta() {
    const [data,setData] = useState([]);
    const [star_id,setStarid]=useState("");
    const [snam,setSnam]=useState("");
    const [siz,setSiz]=useState("");
    const [galid,setGalid]=useState("");
    const [tecid,setTecid]=useState("");
    const[stadel,setStadel]=useState("");
  useEffect(()=>{
    fetch('http://localhost:8081/api/star')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));
    

  },[] )
  function handleSubmit(event){
    axios.post('http://localhost:8081/api/starin',{star_id,snam,siz,galid,tecid})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    
  }
  function dell(){
    axios.post('http://localhost:8081/api/stadel',{stadel})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    window.location.reload();
  }

  return (
    <div>
     <video src={video2} autoPlay loop muted playsInline className="bg"/>
    <Nav/>
    <div className='container'>
    <div className='fix'> 
    <h1 className="size" style={{color:'white'}}>Star</h1>
      <table>
        <thead>
          <th>Star.id</th>
          <th>Name</th>
          <th>Size</th>
          <th>Galaxy.id</th>
          <th>Tech.id</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.star_id}</td>
              <td>{d.name}</td>
              <td>{d.size}</td>
              <td>{d.galaxy_id}</td>
              <td>{d.tech_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='hello'>
      <form className='inputholder'>
                
                <input placeholder='Star ID' type="text" style={{height:'30px'}} value={star_id} onChange={e => setStarid(e.target.value)} />
                <input placeholder='Name' type="text" style={{height:'30px'}} value={snam} onChange={e => setSnam(e.target.value)} />
                <input placeholder='Size' type="text" style={{height:'30px'}} value={siz} onChange={e => setSiz(e.target.value)} />
                <input placeholder='Galaxy ID' type="text" style={{height:'30px'}} value={galid} onChange={e => setGalid(e.target.value)} />
                <input placeholder='Tech Id' type="text" style={{height:'30px'}}  value={tecid} onChange={e => setTecid(e.target.value)} />
                <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={handleSubmit}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Insert</span><span style={{color:'white',fontSize:'20px'}}>INSERT</span></button>
            
                <input placeholder='ID' type="text" style={{height:'30px'}} value={stadel} onChange={e => setStadel(e.target.value)} />
                <button className='button-57' type="submit" style={{width:'100px',height:'40px'}} onClick={dell}><span class="text" style={{fontSize:'20px',color:'#24549c'}}>Delete</span><span style={{color:'white',fontSize:'20px'}}>Delete</span></button>
            </form>
            </div>
    </div>
    </div>
    )
  }
  
  export default Sta