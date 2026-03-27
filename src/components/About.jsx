import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const stats = [
    { value: '150+', label: 'Problems Solved' },
    { value: '10+', label: 'Projects Built' },
  ];

  return (
    <section className="about" id="about">
      <div className={`about__inner ${isVisible ? 'about__inner--visible' : ''}`} ref={ref}>
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Crafting Digital <br /><span className="gradient-text">Experiences</span></h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p className="about__paragraph">
              I am a frontend-focused developer dedicated to crafting seamless user experiences 
              using React.js. My approach combines visual storytelling with technical rigor.
            </p>
            <p className="about__paragraph">
              Beyond the UI, I have a solid foundation in Java and Data Structures. I've 
              successfully tackled 150+ coding problems across various competitive platforms, 
              honing my analytical mindset.
            </p>
          </div>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <div className="about__stat" key={i} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
