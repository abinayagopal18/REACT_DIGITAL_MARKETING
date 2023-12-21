import React, { useState } from 'react';
import './LoginSignup.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
   
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className='login_container'>
        <div>
          <form>
            <h3 style={{color:'white'}}>Login</h3><br/>
            <label>
              <input
                type="text"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br /><br/>
            <center><Link to='/main'><button type="button" class="btn btn-light" onClick={handleLogin} style={{color:"black"}} >Login</button></Link><br/></center><br/>
            <div className='Link' /*onClick={()=>props.onFormSwitch('signup')}*/>New user?<Link to='/signin'>Sign up</Link></div>
          </form>
        </div>
    </div>
  );
};

export default Login;