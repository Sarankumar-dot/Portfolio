import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'web',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
    ],
  },
  {
    title: 'Backend & Languages',
    icon: 'dns',
    skills: [
      { name: 'Java', level: 82 },
      { name: 'Python', level: 70 },
      { name: 'Node.js', level: 65 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: 'build',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Data Structures', level: 80 },
      { name: 'REST APIs', level: 78 },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="skills" id="skills">
      <div className={`skills__inner ${isVisible ? 'skills__inner--visible' : ''}`} ref={ref}>
        <span className="section-label">Technical Arsenal</span>
        <h2 className="section-title">Skills & <span className="gradient-text">Expertise</span></h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life.
        </p>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div className="skills__category" key={i} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              <div className="skills__category-header">
                <span className="material-icons skills__category-icon">{cat.icon}</span>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>

              <div className="skills__list">
                {cat.skills.map((skill, j) => (
                  <div className="skills__item" key={j}>
                    <div className="skills__item-info">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.5 + j * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
