import React, { useEffect,useState } from 'react';

const Ph=(props)=>{ 
       const [n ,setAuthor]=useState([])

    useEffect(()=>{

            fetch('https://conduit.productionready.io/api/articles')
            .then((res)=> res.json())
            .then((n=>setAuthor (n.articles)));
        
    },[]);

    
return (
    <div>
        <h1> Author name</h1>
       <ul>
           {console.log('auth==>', n)}
           {n.map((item)=>(
               <li key={item.id}>{item.author.username}</li>  
           ))
           }
       </ul>
        
      
        </div>
        )
    
            }
            export default Ph