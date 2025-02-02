import React, {useState} from 'react'


export default function TextForm(props) {

const handleUpClick =()=>{
   // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success");
}
const handleDownClick =()=>{
  // console.log("Lowercase was clicked: " + text);
   let newText = text.toLowerCase();
   setText(newText)
   props.showAlert("Converted to LowerCase!","success");
}
const handleClearText =()=>{
  // console.log("ClearText was clicked: " + text);
   let newText = '';
   setText(newText)
}

const handleOnChange =(event)=>{
    //console.log("On Change");
    setText(event.target.value);
}
const handleCopyText=()=>{
  console.log("Here is the copy");
  var text =document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

const handleExtraSpace =()=>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
}

const [text, setText] = useState('');
//text = "new text"; //Wrong way to Change the state
//setText('new text'); //Correct way to Change the state
  return (
    <>
    <div className='container'style ={{color:props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
    <div className ="mb-3">
            <textarea className="form-control" value={text} style ={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here."}</p>
    </div>
    </>
  )
}
