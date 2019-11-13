import React, {useEffect, useState} from 'react';
import './App.css';
import io from 'socket.io-client';
import axios from 'axios'

function App() {
  const [socket, setSocket] = useState(null)
  const [text, setText] = useState("")
  const [test, setTest] = useState("")
  const handle = () => {
    console.log("masuk");
    axios({
      url: 'http://192.168.100.95:3000/makan',
      method: 'post',
      data: {
        text
      }
    })
    .then(({data}) => {
      // socket.emit('chat message', text)
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    // socket.emit('chat message', text);
  }
  useEffect(() => {
    setSocket(io('http://localhost:3000'))
  }, [])
  useEffect(() => {
    if(socket){
      socket.on('balesan', function (data) {
        setTest(data)
      });
    }

  },[socket])

  return (
    <div>
      <input type="text" onChange={event => setText(event.target.value)}/>
      <button onClick={handle}>send</button>
      <p>{test}</p>
    </div>
  );
}

export default App;
