import React, { useState } from 'react';
import MidSection from './MidSection';
import '../style.css'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault(); 
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const users = await response.json();

      const user = users.find(user => user.email.toLowerCase() === email.toLowerCase());

    
      if (user) {
        console.log('Login successful!', user);
        alert(`Login successful! Welcome, ${user.name}`);
        
      
        setEmail('');
        setPassword('');
      } 
    } catch (err) {
      console.error('Login error:', err);
    } 
  };
  return (
    <div>
      
      <MidSection /> 
      <div className="container wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;