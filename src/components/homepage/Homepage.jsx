import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const images = [
  { img: 'https://cdn.sanity.io/images/tdrhge4k/production/d6c83f64afe535d4e980564808ba5569f1e8bedd-1201x631.png'},
  { img: 'https://imagedelivery.net/OOahao1ejQQJFOoUSSCKqw/game/mines-1/8zSgB95U.png/w=384,h=384,fit=cover,quality=80,format=auto,blur=0'}
]

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
            
        </div>
    </>
  )
}

export default Homepage