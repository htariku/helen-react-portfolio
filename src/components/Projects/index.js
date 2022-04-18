import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";
import image0 from "../../assets/small/projects/buzzerbeater.png";
import image1 from "../../assets/small/projects/bookfinder.png";
import image2 from "../../assets/small/projects/codequiz.png";
import image3 from "../../assets/small/projects/runbuddy.png";
import Project from "./Project"

const PROJECTS =  [ {heading:"BuzzerBeater", url:'https://restful-api101.herokuapp.com/', image:image0, alt:"BuzzerBeater"},
{heading:"Restful-API", url:"https://htariku.github.io/RESTful-API-Group-Project/", image:image1, alt:"Restful-API"},
]

function Projects(props) {
  const { currentCategory } = props;
  return (
    <div style={{display:"flex"}}>
   {PROJECTS.map(proj => <Project heading={proj.heading} url={proj.url} image={proj.image} alt={proj.alt}  />)}
        <section class="card">
          <h1>Book Finder</h1>
          <a href='https://htariku.github.io/book-finder-1//'>
            {" "}
            <img src={image1} alt="Book Finder" class="projectImg" />{" "}
          </a>
          <p>
            <a href='https://htariku.github.io/book-finder-1//'>
              Book Finder
            </a>
          </p>
        </section>
      
      <section class="card">
        <h1> Code Quiz </h1>
        <a href='https://htariku.github.io/code-quiz/'>
          {" "}
          <img src={image2} alt="Code Quiz" class="projectImg" />{" "}
        </a>
        <p>
          <a href='https://htariku.github.io/code-quiz/'>
           Code Quiz
          </a>
        </p>
      </section>
      <section class="card">
        <h1>Run Buddy</h1>
        <a href='https://htariku.github.io/book-finder-1//'>
          {" "}
          <img src={image3} alt="BuzzerBeater" class="projectImg" />{" "}
        </a>
        <p>
          <a href='https://htariku.github.io/book-finder-1//'>
          Run Buddy
          </a>
        </p>
      </section>
     </div>
  );
}
export default Projects;