import React, { useEffect, useState } from 'react'

export default function AralaqBaqylau8() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=> {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, [])

  const handleRegister = () => {
    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };
  
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
    } else {
      alert('Incorrect email or password!');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('user');
    setUser(null);
  };


  const handleGuestLogin = () => {
    setUser({ name: 'Guest' });
  };

  if (user) {
    return (
      <div className='box'>
        <h1>Hello, {user.name}!</h1>
        <button onClick={handleLogout}>Log out</button>
        <button onClick={handleDeleteAccount}>Delete account</button>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Login</h1>
      <input type='text' placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='button-register' onClick={handleRegister}>Register</button>
      <button className='login-button' onClick={handleLogin}>Login</button>
      <button className='guest-button' onClick={handleGuestLogin}>Login as Guest</button>
    </div>
  )
}