import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  const [showComponentB, setShowComponentB] = useState(false);

  function handleButton() {
    setShowComponentB(true);
  }



  return <div>
    <button onClick={handleButton}>Change Component</button>
    {!showComponentB && <div><ComponentA /></div>}
    {showComponentB && <div><ComponentB /></div>}
    </div>
}

export default App;
