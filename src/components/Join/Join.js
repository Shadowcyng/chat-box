import React, { useState } from 'react'
import'./Join.css'


import { Link } from 'react-router-dom';
import axios from 'axios';
import Particle from '../Particles/Particle';

const Join = (props) => {


    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [error, setError] = useState('');



    const handleSignin =( event )=> {
        event.preventDefault();
            const userData = { name, room}
            const fetchData = async (userData) =>{
         const { data } =  await axios.post('https://realtime-chat-box.herokuapp.com/user',userData)
                console.log('data',data.error)
               data.error !== undefined ? setError(data.error) : setError('')
                return data.error
            }
          fetchData(userData).then(data=>data === undefined ?  props.history.push(`/chat?name=${name}&room=${room}`) : null)
            
        }
           

            

    return (
        <div className='joinOuterContainer'>
            <Particle />
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <form>
                <div><input placeholder='Name' className='joinInput' type='text' onChange={(e)=>setName(e.target.value)} /></div>
                <div><input placeholder='Room' className='joinInput' type='text' onChange={(e)=>setRoom(e.target.value)} /></div>
                    <button className='button mt-20' type='submit' onClick={handleSignin} >Sign in</button>    
          {error ?  <div><h6 className='error'>{error}</h6></div> :  null   }         
            </form>
            </div>
        </div>
    )
}

export default Join
