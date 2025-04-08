import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Comments() {
  let {id} = useParams();
  let [comments, setComments] = useState([]);

  async function fetchData() {
    try {
        let response = await fetch('');
        if(!response.ok) {
            throw new Error('New Error');
        }

        let data = await response.json()
        setComments(ImageData)
    }catch(err) {
        console.error(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {comments.map(comment => {
        return <div key={comment.id}>
            <h3>{comment.email}</h3>
            <p>{comment.name}</p>
            </div>
      })}
    </div>
  )
}
