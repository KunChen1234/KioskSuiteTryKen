import { useState } from 'react';
import './App.css';
import useSocket from './context/socket';

function App() {
  const socket = useSocket();
  const [isTestVisible, setIsTestVisible] = useState(false);
  function onClick() {
    socket.emit("beginTest");
    setIsTestVisible(true);
    socket.once("aa", (msg) => {
      console.log(msg)
    })
  }

  return (<div className="grid grid-flow-4 h-screen">
    <div className="bg-black grid grid-cols-3 gap-2">
      <div className="text-white text-sm">aa</div>
      <div className="text-center ">
        <p className="text-white text-sm">ck</p>
      </div>
      <div className="grid grid-flow-3 text-white text-sm text-right">
        <div className="row-span-2 text-sm">bb</div>
        <div className="mb-0">dd</div>
      </div>
    </div>
    <div className="row-span-2 items-center">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg  items-center space-x-4">
        <p className="text-xl font-medium text-primary">ChitChat</p>
        <p className="text-secondary">You have a new message!</p>
        <button onClick={onClick}>start</button>
      </div>
    </div>
    <div className="bg-black">bottom</div>
  </div>);
}
//a
export default App;
