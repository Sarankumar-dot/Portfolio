import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const educationData = [
  {
    period: '2022 — Present',
    institution: 'PSNA College of Engineering and Technology',
    degree: 'B.Tech CSBS (Computer Science and Business Systems)',
    status: 'active',
  },
  {
    period: '2020 — 2022',
    institution: 'Saradha Vidhyalaya',
    degree: 'Class 12th (Higher Secondary)',
    status: 'completed',
  },
  {
    period: '2019 — 2020',
    institution: 'Saradha Vidhyalaya',
    degree: 'Class 10th (SSLC)',
    status: 'completed',
  },
];

export default function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="education" id="education">
      <div className={`education__inner ${isVisible ? 'education__inner--visible' : ''}`} ref={ref}>
        <span className="section-label">Academic Path</span>
        <h2 className="section-title">Educational <span className="gradient-text">Journey</span></h2>

        <div className="education__timeline">
          <div className="education__track" />
          {educationData.map((item, i) => (
            <div className="education__item" key={i} style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
              <div className="education__date">
                <span>{item.period}</span>
              </div>
              <div className="education__node">
                <div className={`education__dot ${item.status === 'active' ? 'education__dot--active' : ''}`} />
              </div>
              <div className="education__card">
                <h3 className="education__institution">{item.institution}</h3>
                <p className="education__degree">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
