import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './DataFetch.css'

function DataFetch() {

    const[post, setPost] =  useState({})
    const[id, setId] = useState(1)
    const[idFromButtonClick,setidFromButtonClick] = useState(1)


    const handleClick = () =>{
        setidFromButtonClick(id)
    }
    useEffect( ()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then (res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButtonClick])
  return (
    <div className='post_generator'>
        <input type="text"  value={id}   onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch Post </button>
        <div className='fetched-post'>{post.title}</div>
    </div>
  )
}

export default DataFetch