import React, { useState } from 'react';

export default function LoginForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [message, setMessage] = useState();

  const nameValidation = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/

  const handleSubmit = (e)=>{
    e.preventDefault();
    let res = {email, password}
    console.log('Result: ', res);
    if(!nameValidation.test(name)) {
        setMessage('Тек әріптер болсын');
        return;
    }

    if(password.length < 8) {
      setMessage('Кем дегенде 8 таңбадан болуы қажет');
      return;
    }

    if(password == password2) {
        setMessage('Құпия сөз қате')
        return
    }

    if(!email.includes('@')) {
      setMessage('Email-де @ болуы керек');
      return;
    }

    setMessage('');
    setEmail('');
    setPassword('');
    setPassword2('');
    setName('');
    alert('Форма сәтті жіберілді!');
  }

  return (
    <div>
      <h1>Кіру</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name='name'
            value={name}
            placeholder='Enter name'
            onChange={(e)=>setNamel(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pochta">Email</label>
          <input 
            type="text" 
            name='pochta'
            value={email}
            placeholder='exanple@gmail.com'
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pswr">Құпия сөз</label>
          <input 
            type="text" 
            name='pswr'
            value={password}
            placeholder='********'
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pswr2">Құпия сөзді қайталау</label>
          <input 
            type="text" 
            name='pswr2'
            value={password}
            placeholder='********'
            onChange={(e)=>setPassword2(e.target.value)}
            required
          />
        </div>
        {message && <p style={{color:'red'}}>{message}</p>}
        <button type='submit'>Кіру</button>
      </form>
    </div>
  ); 
}
