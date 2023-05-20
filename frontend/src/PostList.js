import React,{useEffect, useState} from 'react';
import  Axios  from 'axios';
const apiUrl = 'http://127.0.0.1:8000/api/posts/'

function PostList(){
const [postList,setPostList] = useState([]);
    useEffect(()=>{
        Axios.get(apiUrl)
        .then(response=>{
            const { data} = response;
            console.log('성공',response)
            setPostList(data);
    })
        .catch(error=>{
            //error.response
        });
        console.log('mounted');
    },[]);




    return(
        <div>
            <h1>PostList</h1>
            {postList.map(post=>(
            <div>{JSON.stringify(post)}</div>
            ))}
        </div> 
    );
    
}

export default PostList;