import React, { useState } from 'react'

export default function Posts(){
    const [posts , setPosts] = useState([]);

    async function ftechPosts() {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts",{"method": "GET"});
        let json = await res.json();
        setPosts(json);
        
    }
    return (
        <div><button onClick={ftechPosts}>Click Me</button>
        {posts.map((post,index) => (<h1 key={index}>{post.title}</h1>))




        }
        
        
        </div>
      );
    
}
  
