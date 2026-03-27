import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  const responsibilities = [
    'Architected responsive web modules using modern CSS frameworks.',
    'Collaborated on optimizing frontend performance and load times.',
    'Integrated REST APIs with React.js state management.',
  ];

  return (
    <section className="experience" id="experience">
      <div className={`experience__inner ${isVisible ? 'experience__inner--visible' : ''}`} ref={ref}>
        <span className="section-label">Professional Stint</span>
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>

        <div className="experience__content">
          <div className="experience__card">
            <div className="experience__card-header">
              <div className="experience__role-info">
                <h3 className="experience__role">Web Developer Intern</h3>
                <p className="experience__company">ST Software Solutions</p>
              </div>
              <div className="experience__meta">
                <span className="experience__badge">Internship</span>
              </div>
            </div>

            <ul className="experience__list">
              {responsibilities.map((item, i) => (
                <li className="experience__list-item" key={i}>
                  <span className="experience__list-icon">
                    <span className="material-icons">arrow_right</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="experience__tech-tags">
              {['React.js', 'CSS', 'REST APIs', 'Performance'].map(tag => (
                <span className="experience__tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
