import axios from "axios"
import React, { useEffect, useState } from 'react'
import Pusher from "pusher-js"
const Two = () => {
  const [messages, setMessages] = useState([]);
  let allMessages = [];
  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('a33275ebdd0250ed96ee', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat'); // channel
    channel.bind('message', function (data) { // event
      // alert(JSON.stringify(data));
      allMessages.push(data);
      setMessages(allMessages)
    });
  }, [])


  const handleTwo = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/api/send", {
      owner: "Two",
      message: "This is Two"
    }, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    if (response.data.status === "success") {
      console.log("two sends message");
    }
    else {
      console.log("failed");
    }

  }
  return (
    <div>
      <ul>
        {messages && messages.map(
          (messages, index) => (
            <>
              <span>{messages.owner} : </span>
              <li key={index}>{messages.message}</li>
            </>
          )
        )}
      </ul>
      <button onClick={handleTwo}>two</button>
    </div>
  )
}

export default Two;