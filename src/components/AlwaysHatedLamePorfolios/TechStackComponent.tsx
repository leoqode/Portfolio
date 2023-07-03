import "./TechStackComponent.css";
import 'react-awesome-reveal'
import Fade from 'react-awesome-reveal'
const TechStackComponent = () => {
  return (
    <div className='tech-stack-div'>
      <Fade cascade>
      <h3 style={{color:'white'}}>Relevant Coursework</h3>
      <h1 className='tech-stack-text'>Data Structures & Algorithms - C++</h1>
      <h1 className='tech-stack-text'>Data Structures & Algorithms - Python</h1>
      <h1 className='tech-stack-text'>Discrete Mathematics</h1>
      <h1 className='tech-stack-text'>Calculus - I || II || III</h1>
      <h1 className='tech-stack-text'>Programming Fundamentals - I || II || III</h1>
      </Fade>

    </div>
  );
};

export default TechStackComponent;
