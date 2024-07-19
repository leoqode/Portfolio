import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin, FaApple, FaPython, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiJavascript, SiPytorch } from 'react-icons/si';
import './AboutmeComponent.css';

const AboutmeComponent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-me-container">
      <div className="about-me-section" style={{
        opacity: Math.min(1, Math.max(0, scrollProgress * 2 - 0.5)),
        transform: `translateY(${Math.max(0, 50 - scrollProgress * 100)}px)`
      }}>
        <Fade cascade damping={0.1}>
          <h1 className="about-me-title">About Me</h1>
          <div className="about-me-content">
            <div className="about-me-text">
              <p>👋 Hi there! I'm Leonardo Jimenez, a first-generation undergraduate student at Texas State University.</p>
              <p>🚀 My journey into Computer Science and Mathematics began with a profound moment watching "Interstellar". Since then, I've been on an exciting path of discovery and learning.</p>
              <p>🍎 Currently, I'm working in Apple's College Program while pursuing my dual major in Computer Science and Mathematics.</p>
              <p>🌟 I'm passionate about Deep Learning, particularly with PyTorch, and I'm always working on exciting projects like WhereHungry 🌭.</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/leoqode" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/leonardojim" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </Fade>
      </div>

      <div className="tech-stack-section" style={{
        opacity: Math.min(1, Math.max(0, scrollProgress * 2 - 1)),
        transform: `translateY(${Math.max(0, 100 - scrollProgress * 100)}px)`
      }}>
        <Fade cascade damping={0.1}>
          <h2 className="tech-stack-title">Tech Stack & Achievements</h2>
          <div className="tech-stack-icons">
            <FaPython title="Python" />
            <SiCplusplus title="C++" />
            <SiTypescript title="TypeScript" />
            <SiJavascript title="JavaScript" />
            <FaReact title="React" />
            <SiPytorch title="PyTorch" />
            <FaApple title="Apple" />
          </div>
          <ul className="achievements-list">
            <li>🏆 First Place in Riverhacks Hackathon</li>
            <li>📚 Double Major in Computer Science and Mathematics</li>
            <li>💼 Apple College Program Participant</li>
            <li>🧠 Self-taught in Deep Learning and PyTorch</li>
          </ul>
        </Fade>
      </div>

      <div className="projects-section" style={{
        opacity: Math.min(1, Math.max(0, scrollProgress * 2 - 1.5)),
        transform: `translateY(${Math.max(0, 150 - scrollProgress * 100)}px)`
      }}>
        <Fade cascade damping={0.1}>
          <h2 className="projects-title">Featured Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>WhereHungry 🌭</h3>
              <p>A solution for college students tired of eating at the same places.</p>
              <a href="https://github.com/leoqode/WhereHungry" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Riverhacks23</h3>
              <p>First Place Hackathon Project</p>
              <a href="https://github.com/leoqode/Riverhacks23" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutmeComponent;
