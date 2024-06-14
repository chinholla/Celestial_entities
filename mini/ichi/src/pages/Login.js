import React, { useState } from 'react';
import axios from 'axios';
import video from '../assets/bg.mp4';
import  '../Login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/login', { username, password });
      console.log(response.data); 
      window.location.href = '/home'; 
      alert("LOGIN SUCCESSFUL");
    } catch (error) {
      console.error('Error:', error);
      alert("INVALID CREDENTIALS");
    }
  };

  return (
    <div>
        <video src={video} autoPlay loop muted playsInline className="bg" />
        <div className='login'>
            <h1>LOGIN</h1>
    <form >
      <input className='box' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className='box' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className='button-28' onClick={handleLogin}><span class="text">Research</span></button>
    </form>
        </div>
    </div>
  );
};

export default Login;