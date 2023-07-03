import "./AboutmeComponent.css";
import Cascade from "react-awesome-reveal";

const AboutmeComponent = () => {
  return (
    <div className='about-me-div'>
      <Cascade>
        <h1 className='about-me'>
          As a sophomore student at Texas State University in San Marcos, I'm
          thrilled to be embarking on an exciting academic journey with a double
          major in Computer Science and Mathematics. Beyond my regular
          coursework, I'm actively pursuing advanced studies to further refine
          my skills and knowledge in quantitative trading and software
          engineering.
        </h1>
      </Cascade>
    </div>
  );
};

export default AboutmeComponent;
