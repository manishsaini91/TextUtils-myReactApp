import React from 'react'

export default function About(props) {
    // const[myStyle,setmyStyle]=useState(
    // {
    //     color:'black',
    //     backgroundColor:'white',
        
    // });
    let myStyle={
      color:props.mode==='dark'?'white':'rgb(36 74 104)',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
      // border:'2px solid',
      // borderColor:'dark'?'white':'#042743'
    }
    // const[btntext,setbtntext]=useState("Enable Dark Mode");
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setbtntext("Enable Light Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext("Enable Dark Mode");
    //     }
    // }

  return (
    <div className='container' >
        <h1 className='my-3' style={{ color:props.mode==='dark'?'white':'rgb(36 74 104)'}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character count or LowerCase to UpperCase, UpperCase to LowerCase, CopyText etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is sutiable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome,Firefox,Safari,Opera. It suits to count characters in facebook ,blog ,books,excel document ,pdf document ,essays ,etc. 
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3"> */}
{/* <button type="button" onClick={toggleStyle} class="btn btn-primary">{btntext}</button> */}
{/* </div> */}
    </div>
  )
}
