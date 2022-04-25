import React from 'react';

import image0 from "../../assets/images/bookfinder.png";
import image1 from "../../assets/images/buzzerbeater.png";
import image2 from "../../assets/images/codequiz.png";
import image3 from "../../assets/images/runbuddy.png";
import portfolio from '../../components/Portfolio/portfolio';

function Portfolio(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter("abcde");
//   }, ["xyz"]);



  return (
    
    <div style={{display:"flex"}}>
    {portfolio.map(portfolio => <portfolio heading={portfolio.heading} url={portfolio.url} image={portfolio.image} alt={portfolio.alt}  />)}
         <section>
           <h1>Code Quiz</h1>
           <a href="https://htariku.github.io/code-quiz/">
             {" "}
             <img src={image2} alt="codequiz" />{" "}
           </a>
           <p>
             <a href="https://htariku.github.io/code-quiz/">
             Code Quiz
             </a>
           </p>
         </section>
         <section>
         <h1>Book Finder </h1>
         <a href="https://htariku.github.io/book-finder-1//">
           {" "}
           <img src={image0} alt="Book Finder" />{" "}
         </a>
         <p>
           <a href="https://htariku.github.io/book-finder-1//">
           Book Finder
           </a>
         </p>
       </section>
       <section>
         <h1>Buzzer Beater </h1>
         <a href="https://restful-api101.herokuapp.com/">
           {" "}
           <img src={image1} alt="Buzzer Beater"  />{" "}
         </a>
         <p>
           <a href="https://restful-api101.herokuapp.com/">
       Buzzer Beater
           </a>
         </p>
       </section>
       
       <section>
         <h1>Run Buddy</h1>
         <a href="https://htariku.github.io/run-buddy/">
           {" "}
           <img src={image3} alt="Run Buddy"  />{" "}
         </a>
         <p>
           <a href="https://htariku.github.io/run-buddy/">
             Run Buddy 
           </a>
         </p>
       </section>
       
      </div>
 
  );
}

export default Portfolio;


