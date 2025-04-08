import React, { useState } from 'react'
import axios from 'axios'

export default function ApiAxios() {
    const [titleText, setTitleText] = useState('')
    const [bodyText, setBodyText] = useState('')
    const [data, setData] = useState({})

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(data=> console.log(data.data))
    // .catch(err=> console.log(err))

    async function fetchData() {
        try {
            let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: titleText,
                body: bodyText,
                userId: 1
            })

            if(response.data) {
                console.log(response.data);
                setData(response.data)
                setMessage('Сұраныс сәтті аяқталды!')
                setError('')
                setTitleText('')
                setBodyText('')
            }
        }catch(err) {
           if(err.status == 404) {
            setError('Сізде API-мен проблема бар!');
           }else if(err.message) {
            setError(err.message);
           }
        }
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        fetchData()
        setMessage('Серверге сұраныс жасау басталды!')
    }
  return (
    <div>
      <h1>Post Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          name='title'
          value={titleText}
          placeholder='Enter title'
          onChange={(e)=>setTitleText(e.target.value)}
        />
        <label htmlFor="dene">Body text</label>
        <input 
          type="text" 
          name='dene'
          value={bodyText}
          placeholder='Enter body text'
          onChange={(e)=>setBodyText(e.target.value)}
        />
        {error ?
          (
              <p style={{color:'red'}}>{error}</p>
          ):message && <p style={{color:'green'}}>{message}</p>
        }
        <button type='submit'>Send</button>
      </form>
      {data &&
        <div>
            <p>ID: {data.id}</p>
            <h2>Title: {data.title}</h2>
            <p>Body: {data.body}</p>
        </div>
      }
    </div>
  )
}
