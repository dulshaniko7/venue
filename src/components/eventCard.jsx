import React from "react";

const cardCss = {
  width: "15rem",
  height:'15rem',
  margin:'auto'
};

const imageCss ={
     height: '100px',
     width:'50px',
     margin:'auto'
}
const Card = (props) => {
  return (
    <div class="card" style={cardCss}>
      <img  style={imageCss} src={props.icon} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <hr />
        <p class="card-text">{props.date}</p>
        <p class="card-text">{props.location}</p>
       
        <p>{props.time}</p>
      </div>
    </div>
  );
};

export default Card;
