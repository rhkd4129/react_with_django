import React,{useEffect, useState} from 'react';
import  Axios  from 'axios';
const apiUrl = 'http://127.0.0.1:8000/api/posts/'

function Post({post}){
    const {id,caption,location,photo} = post;
                // return <div>{JSON.stringify(post)}</div>;
                return (
                    <div key={id}>
                        {caption},{location}
                        <img src={photo} alt={caption} style={{width:'100px'}}/>
                    </div>
                );
}