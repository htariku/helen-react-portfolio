
import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../assets/images/port-profile.png";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Helen!</h2>
        <p>Thanks for visting my Portfolio!</p>
        <Link to="portfolio">
          <button>My Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}


export default Home;