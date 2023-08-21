
import { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Content } from './Components/Content';

function App() {

  const [displayText, setDisplyText] = useState("Press any button");

  function handleClick(name){
    setDisplyText(name);
  }

  return (
    <div className="App">
      <Button 
        
        btnName="TRUE"
        handleClick={handleClick}
      />
      <Button 
        btnName="FALSE"
        handleClick={handleClick}
      />
      <Content 
        text = {displayText}
      />
    </div>
  );
}

export default App;
