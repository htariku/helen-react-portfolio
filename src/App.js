import React, { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)


function App() {
  const [categories] = useState([
    {
      name: "projects",
      description:
        "Picture of projects",
    },
    

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    

        <h2> Made by Helen Tariku <a href="https://github.com/htariku"><FontAwesomeIcon icon={["fab","github"]}></FontAwesomeIcon></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/helen-tariku-5283aa156/"><FontAwesomeIcon icon={["fab","linkedin"]}></FontAwesomeIcon></a>  </h2>
         
    </div>
    
  );
}

export default App;