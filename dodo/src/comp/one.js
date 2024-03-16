import axios from "axios"
import React, { useEffect, useState } from 'react'
import Pusher from "pusher-js"
const One = () => {
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
      console.log(data, "in the data-------------------------------===============");
      allMessages.push(data);
      setMessages(allMessages)
    });
  }, [])


  const handleOne = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/api/send", {
      owner: "One",
      message: "This is one"
    }, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    // if (response.data.status === "success") {
    //   console.log("one sends message");
    //   console.log(response);
    // }
    // else {
    //   console.log("failed");
    // }


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
      <button onClick={handleOne}>one</button>

    </div>
  )
}

export default One;