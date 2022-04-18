import React from 'react';
import coverImage from '../../assets/cover/cover-img.jpeg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
         Hi, My name is Helen Tariku. I am an aspiring full-stack developer with an eagerness to learn and dive into this transition. I love tackling on new projects and challenges to that will expand my skillset, as well as collaborating and learning from other evelopers. Feel free to reach out to me through my listed contact information. 
         Thank you!
        </p>
      </div>
    </section>
  );
}

export default About;
