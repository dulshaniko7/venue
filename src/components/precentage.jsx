import React from "react";

const amount = "30%";

const amountCss = {
     color:'red',
     fontSize:'8rem',
     textAlign:'left'
}
const off = {
     color:'black',
     fontSize:'3rem',
     textAlign:'left',
     marginTop: '-1rem'
}


const Precentage = () => {
  return (
    <div>
      <h1 style={amountCss}>{amount}</h1>
      <h2 style={off}>OFF</h2>
    </div>
  );
};

export default Precentage;
