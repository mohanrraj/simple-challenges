
import { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Content } from './Components/Content';
import ListItem from './Components/ListItem';
import Input from './Components/Input';

function App() {

  const [skills, setSkills] = useState([]);
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState(1);

  function handleChange(e){
    setInputText(e.target.value)
  }

  function handleClick(){
    
    setSkills((prevValue) => {
      return [...prevValue, inputText]
    })
    setKey(key+1);
    setInputText("");
  }

  return (
    <div className="App">
      <h1>I have below skills</h1>
      <ListItem key={key} skills={skills} />
      <hr />
      <h2>Add new skills</h2>
      <Input 
        inputText = {inputText}
        handleChange = {handleChange}
        handleClick={handleClick}
      />
    </div>
  );
}

function ButtonChallenge() {

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
