import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import io  from 'socket.io-client';
import './Chat.css'
import Infobar from '../Infobar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import Particle from '../Particles/Particle';


let socket;
const Chat = (props) => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [users, setUsers] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'https://realtime-chat-box.herokuapp.com/';

    useEffect (() =>{
        
        const { name, room }= queryString.parse(props.location.search)
        socket = io(ENDPOINT)
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room } , () =>{
 
        });

        return ()=>{
            socket.emit('disconnect');
            socket.off();   
        }
    },[ENDPOINT,props.location.search])

    useEffect(() => {
        socket.on('message', (message)=>{
            setMessages([...messages, message]);
        })
        socket.on("roomData",({users}) => {
            setUsers(users)
        })
    }, [messages]);
    
    //funtion for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(messages, message)
 
    return (
       
        ( <div className='outerContainer'>
            <Particle />
        <div className='container'>
        <Infobar room={room}/>
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div> 
        <TextContainer users={users}/>
    </div>)
    )
}



export default Chat
