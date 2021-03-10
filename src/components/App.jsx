import React, {useState} from "react";
import Header from "./Header"



function App(){

    const [newText, setText] = useState("");
    const [words, setwords] = useState(0);

    function handleChange(event){
        const newValue = event.target.value;
        setText(newValue ? newValue : "Text will appear here")
        const newWords = newText.split().length;
        setwords(newWords)
    }
    function handleClick(){
        setText("Text will appear here")
    }
console.log(words)
    return <div className="container">
        <Header />
        <h2>{newText}</h2>
        <input onChange={handleChange} type="textarea" value={newText === "Text will appear here" ? "" : newText} placeholder="Start typing"/>
        <button onClick={handleClick}>RESET</button>
    </div>
}
export default App;