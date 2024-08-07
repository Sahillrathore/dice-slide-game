import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {

  const [state, setState] = useState([]);

  const fetchData = async () => {
    try{
      const response = await axios.get("https://strapi-backend-8hgz.onrender.com/api/users");
      console.log('Data:', response.data);
      return response.data;
    }
    catch(err) {
      console.log(err);
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
        <h1 className='text-3xl font-bold text-zinc-100'>Homepage</h1>
        
        <div className="games-cards">
            <Link to='dice'>
             <div className="game-banner h-52 w-48">
              <img src="https://cdn.sanity.io/images/tdrhge4k/production/d6c83f64afe535d4e980564808ba5569f1e8bedd-1201x631.png" alt="..img" className='h-full w-full object-cover object-center' />
             </div>
            </Link>
        </div>
    </>
  )
}

export default Homepage