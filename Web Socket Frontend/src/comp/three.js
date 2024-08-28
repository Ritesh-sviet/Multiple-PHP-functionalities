import React, { useEffect, useRef, useState } from 'react';
import './Three.css';
import Pusher from "pusher-js"
import axios from 'axios';

const Three = () => {
    const [username, setUsername] = useState('username');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const chatListRef = useRef(null);
    let allMessages = [];
    useEffect(() => {
        Pusher.logToConsole = true;
        const pusher = new Pusher('a33275ebdd0250ed96ee', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function (data) {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        return () => {
            pusher.unsubscribe('chat');
        };
    }, []);
    useEffect(() => {
        // Scroll to the bottom of the chat list whenever messages change
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message !== '') {
            // console.log(message, "<-------------message");
            // setMessages([...messages, { "username": "three", "message": message }]);
            await axios.post("http://localhost:8000/api/message", {
                username,
                message
            }, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            setMessage("");
        }
        else {
            alert("enter the message");
        }
    };

    return (
        <>
            <div>
                <input
                    className='absolute top-10 left-32 italic font-extralight shadow-blue-800 shadow-inner rounded-3xl w-[10rem] text-black text-center'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <ul ref={chatListRef} className="chat-thread max-h-[32rem] rounded-s-3xl shadow-2xl shadow-gray-900 pt-5">
                {messages.map((msg, index) => (
                    <>
                        <li key={index} className={msg.username !== username ? "left text-wrap max-w-[300px]" : "right text-wrap max-w-[300px]"}>
                            <span className="username">- by {msg.username}</span>
                            {msg.message}
                        </li>
                    </>
                ))}
            </ul>
            <form className="chat-window" onSubmit={handleSubmit}>
                <input className="chat-window-message" name="chat-window-message" type="text" autoComplete="off" autoFocus value={message} onChange={e => setMessage(e.target.value)} />
                <button type='submit' className='absolute shadow-red-800 shadow-inner rounded-3xl hover:scale-110 active:scale-100'>✈️</button>
            </form>
        </>
    );
};

export default Three;
