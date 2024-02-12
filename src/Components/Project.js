import React, { useState } from "react";
import pic5 from "./Images/mobile.png";
import pic3 from "./Images/IMG_20231024_214643_505.jpg";
import pic4 from "./Images/sample.png";
import pic6 from "./Images/hotel.png";
import pic7 from "./Images/employee.png";
import pic8 from "./Images/port.png";
import pic9 from "./Images/calculator.png";
import pic10 from "./Images/whatsap.png";
import pic11 from './Images/react-portfolio.png'
import Contact from "./Contact";
export const Project = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className="project">
        <h1 className="aaa">
          <span>P</span>rojects
        </h1>
        <div className="projectnames">
          <div className='fadeInLeft'>
          <button
            onClick={() => handleButtonClick(1)}
            exact to="/" activeClassName="active">
            ALL
          </button>
          <button onClick={() => handleButtonClick(2)} activeClassName="active">
            HTML
          </button>
          <button onClick={() => handleButtonClick(3)} activeClassName="active">
            JAVASCRIPT
          </button>
          <button onClick={() => handleButtonClick(4)} activeClassName="active">
            REACT JS
          </button>
</div>
<div className="fadeInUp">
          {activeButton === 1 && (
            <div className="web">
              <div className="nann row">
                <div class="card xx">
                  <img src={pic5} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">
                      Mobile & Gadgets E-commerce Project
                    </h5>
                    <p class="card-text">
                      Designed and implemented SN Store, an end-to-end
                      e-commerce platform for mobiles and gadgets using HTML and
                      CSS.
                    </p>
                    <a
                      href="https://naniakana.github.io/mobile-store/"
                      class="btn btn-primary button"
                      target="_blank"
                    >
                      Open Project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic6} className="card-img-top pro" />
                  <div class="card-body">
                    <h5 class="card-title">Hostel Booking Platform</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly hostel booking
                      platform utilizing HTML, CSS, Bootstrap, and JavaScript.
                    </p>
                    <a
                      href="https://naniakana.github.io/hostel-website/"
                      target="_blank"
                      class="btn btn-primary button"
                    >
                      open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic10} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Whatsapp Clone</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly hostel booking
                      platform utilizing HTML, CSS and JavaScript.
                    </p>
                    <a
                      href="https://joyful-cucurucho-75eac8.netlify.app"
                      class="btn btn-primary button" target="_blank"
                    >
                      open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic4} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Sample Software Website</h5>
                    <p class="card-text">
                      Designed and implemented SN Store, an end-to-end
                      e-commerce platform for mobiles and gadgets using HTML and
                      CSS.
                    </p>
                    <a
                      href="https://naniakana.github.io/software-company-website/index.html"
                      class="btn btn-primary button"
                      target="_blank"
                    >
                      open Project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic9} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Calculator</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly Calculator
                      platform utilizing HTML, CSS and JavaScript.
                    </p>
                    <a
                      href="https://naniakana.github.io/calculator/"
                      class="btn btn-primary button"
                      target="_blank"
                    >
                      Open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic7} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Employee To-Do List</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly Calculator
                      platform utilizing HTML, CSS and JavaScript.
                    </p>
                    <a
                      href="https://naniakana.github.io/Employee-data-to-do-list/"
                      class="btn btn-primary button"
                    >
                      Open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic8} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Portfolio</h5>
                    <p class="card-text">
                      Designed and implemented SN Store, an end-to-end
                      e-commerce platform for mobiles and gadgets using HTML and
                      CSS.
                    </p>
                    <a
                      href="https://naniakana.github.io/portfolio-old/"
                      class="btn btn-primary button"
                    >
                      Open Project
                    </a>
                  </div>
                  
                </div>
                <div class="card xx">
                  <img src={pic11} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Portfolio</h5>
                    <p class="card-text">
                    Developed a responsive and user-friendly 
                      platform utilizing React JS.
                    </p>
                    <a href="https://github.com/NaniAkana/Portfolio-React" class="btn btn-primary button">
                      Open Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeButton === 2 && (
            <div className="web">
              <div className="nann row">
                <div class="card xx">
                  <img src={pic5} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">
                      Mobile & Gadgets E-commerce Project
                    </h5>
                    <p class="card-text">
                      Designed and implemented SN Store, an end-to-end
                      e-commerce platform for mobiles and gadgets using HTML and
                      CSS.
                    </p>
                    <a
                      href="https://github.com/NaniAkana/mobile-store"
                      class="btn btn-primary button"
                      target="_blank"
                    >
                      Open Project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic4} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Sample Software Website</h5>
                    <p class="card-text">
                      Designed and implemented SN Store, an end-to-end
                      e-commerce platform for mobiles and gadgets using HTML and
                      CSS.
                    </p>
                    <a
                      href="https://naniakana.github.io/software-company-website/index.html"
                      class="btn btn-primary button"
                      target="_blank"
                    >
                      open Project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic8} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Portfolio</h5>
                    <p class="card-text">
                      Designed and implemented SN Store, an end-to-end
                      e-commerce platform for mobiles and gadgets using HTML and
                      CSS.
                    </p>
                    <a
                      href="https://naniakana.github.io/portfolio-old/"
                      class="btn btn-primary button"
                    >
                      Open Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeButton === 3 && (
            <div className="web">
              <div className="nann row">
                <div class="card xx">
                  <img src={pic6} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Hostel Booking Platform</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly hostel booking
                      platform utilizing HTML, CSS, Bootstrap, and JavaScript.
                    </p>
                    <a
                      href="https://naniakana.github.io/hostel-website/"
                      target="_blank"
                      class="btn btn-primary button"
                    >
                      open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic10} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Whatsapp Clone</h5>
                    <p class="card-text">
                      Developed a Whatsapp Clone platform utilizing HTML, CSS
                      and JavaScript.
                    </p>
                    <a
                      href="https://github.com/NaniAkana/Whatsapp"
                      target="_blank"
                      class="btn btn-primary button"
                    >
                      open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic9} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Calculator</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly Calculator
                      platform utilizing HTML, CSS and JavaScript.
                    </p>
                    <a
                      href="https://naniakana.github.io/calculator/"
                      target="_blank"
                      class="btn btn-primary button"
                    >
                      Open project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic7} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Employee To-Do List</h5>
                    <p class="card-text">
                      Developed a responsive and user-friendly Calculator
                      platform utilizing HTML, CSS and JavaScript.
                    </p>
                    <a
                      href="https://naniakana.github.io/Employee-data-to-do-list/"
                      class="btn btn-primary  button"
                    >
                      Open project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeButton === 4 && (
            <div className="web">
              <div className="nann row">
                <div class="card xx">
                  <img src={pic11} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Portfolio</h5>
                    <p class="card-text">
                    Developed a responsive and user-friendly 
                      platform utilizing React JS.
                    </p>
                    <a href="https://github.com/NaniAkana/Portfolio-React" class="btn btn-primary  button">
                      Open Project
                    </a>
                  </div>
                </div>
                <div class="card xx">
                  <img src={pic3} className="card-img-top pro" />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary button">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
      
    </>
    
  );
};
export default Project;
