import React from "react";

const footerCss ={
     background: 'orangeRed',
     height: '30vh',
     color:'white'
}
const Footer = () => {
     return ( <div className='text-center mt-4' style={footerCss}>
          <h1 className='footer'>The Venue</h1>
          <p>Electron 2018. All rights reserved</p>
     </div> );
}
 
export default Footer;