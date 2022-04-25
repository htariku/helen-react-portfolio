import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <main>
        <Routes>
      
            
           
            <Route exact path="/About" element={<About />}> </Route>
            <Route exact path="/Contact" element={<Contact />}> </Route>
            <Route exact path="/Portfolio" element={<Portfolio />}></Route> <Route/>
            <Route exact path="/" element={<Home />}></Route> <Route/> 
            </Routes>

          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';




// function App() {
//   const [categories] = useState([
//     {
//       name: 'protfolio',
//       description: 'portfolio and my programming projects ',
//     },
//     { name: 'projects', description: 'code projects' }
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Home currentCategory={currentCategory}></Home>
//             <About></About>
//           </>
//         ) : (
//           <Contact></Contact>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;