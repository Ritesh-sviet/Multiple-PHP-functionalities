import React, { useEffect, useState } from 'react'
import './Three.css';
const Four = () => {
    const [username, setUsername] = useState('username');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Add any necessary initialization logic here
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message !== '') {
            console.log(message, "<-------------message");
            setMessages([...messages, { "username": "three", "message": message }]);
            setMessage("");
        }
        else {
            alert("enter the message");
        }
    };

    return (
        <>
            <div>
                <span className='absolute top-10 left-32 italic font-extralight shadow-blue-800 shadow-inner rounded-3xl w-[10rem]'>{username}</span>
            </div>
            <ul className="chat-thread">
                {messages.map((msg, index) => (
                    <li key={index}>{msg.message}</li>
                ))}
            </ul>
            <form className="chat-window" onSubmit={handleSubmit}>
                <input className="chat-window-message" name="chat-window-message" type="text" autoComplete="off" autoFocus value={message} onChange={e => setMessage(e.target.value)} />
                <button type='submit' className='absolute shadow-red-800 shadow-inner rounded-3xl hover:scale-110 active:scale-100'>✈️</button>
            </form>
        </>
    );
}

export default Four