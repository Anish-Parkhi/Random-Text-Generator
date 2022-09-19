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

        <div>
            <h2>Random Post Generator</h2>
        </div>
        <div className='input-field'>
            <input type= "text"  value={id}   onChange={e => setId(e.target.value)} />
        </div>
        <div>
        <button type='button' className='btn' onClick={handleClick}>Fetch Post </button>
        </div>
        <div>
            <h4>The fetched post is 👇</h4>
            <div className='fetched-post'>{post.title}</div>
        </div>
        
    </div>
  )
}

export default DataFetch