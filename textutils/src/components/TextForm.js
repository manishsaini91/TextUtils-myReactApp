import React,{useState}  from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to LowerCase","success");
    }
    const handleCopy=()=>{
        // console.log("Uppercase was clicked");
        var text1=document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Text is copied to clipboard","success");
    }
    
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked");
        let newText="";
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const[text,setText]=useState("Enter text here");
    // setText("new Text");
  return (
    <>
    <div className='container' style={{color:
            props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor:
            props.mode==='light'?'white':'#13466e',color: props.mode==='dark'?'white':'black'
        }}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear the text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color:
            props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0
        }).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(/\s+/).filter((element)=>{
            return element.length!==0
        }).length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
