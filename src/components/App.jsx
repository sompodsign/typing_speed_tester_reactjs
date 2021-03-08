import React, {useState} from "react";
import Header from "./Header"



function App(){

    const [newText, setText] = useState("Text will appear here.")

    function handleChange(event){
        const newValue = event.target.value
        setText(newValue)
    }

    return <div className="container">
        <Header />
        <h2>{newText}</h2>
        <input onChange={handleChange} type="textarea"  placeholder="Start typing"/>
        <button>RESET</button>
    </div>
}
export default App;