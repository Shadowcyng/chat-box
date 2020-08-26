import React from 'react'
import './Input.css'

const Input = ({message, sendMessage, setMessage}) => {
    return (
        <form className='form'>
         <input 
        className='input'
        type='text'
        placeholder='Type a message'
        value = {message}
        onChange={(e)=> setMessage(e.target.value)} 
        onKeyPress={(event)=> event.key === 'Enter' && sendMessage(event) }
        /> 
            <button className='sendButton' onClick={(event)=>sendMessage(event)}>Send</button>
        </form>
    )
}

export default Input
