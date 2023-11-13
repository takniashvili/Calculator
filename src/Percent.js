import React from 'react';
let array = ["5%", "10%", "15%", "25%", "50%"];

function ClearComponent(props) {

   let handleClick = (element) => {
     let number = parseInt(element); // Extracting the number from the percentage
       props.setPercent(number);
  };

  return (
    <div> <div className="Select-Tip"> Select Tip % </div>
    <div className="percentDisplay">
      {array.map((element, index) => (
        <div
        className={`percentTogether ${(props.percent === element) ? "chechked" : ""}`} key={index} 
          onClick={() => {
            handleClick(element);
           }
          }
          >
          {element}
        </div>
      ))}
     <div>
      <input className="CustomInput" type="number" placeholder="Custom" onChange={(event) => {
       props.setPercent(event.target.valueAsNumber);
      }}/>
      </div> 
    </div>
   </div> 
  );
}

export default ClearComponent;

