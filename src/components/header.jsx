import React from "react";

const styles ={
     fontSize: 20,
    background: '#333333'
}
const brandName = {
     fontSize: 30,
     fontFamily:  "Lucida Console"
}

function Header(params) {
    
  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={styles}>
      <a class="navbar-brand" href="#" style={brandName}>
        The Venue
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Header;
