import React from "react";
import img from'../resources/images/slide_one.jpg' 
const backImage = img

const mainImage ={
    height:'95vh',
   //  backgroundPosition:'center',
     width:'100vw',
     backgroundSize: 'cover'

}

const image = () => {
     return (<div>
          <img src={backImage} alt="" style={mainImage}/>
     </div>  );
}
 
export default image;