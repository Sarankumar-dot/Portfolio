import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projectsData = [
  {
    title: 'IoT Car Parking',
    description: 'Smart urban solution for real-time space monitoring using sensor fusion.',
    tags: ['IoT', 'Sensors', 'Real-time', 'Python'],
    color: '#5dc9ff',
  },
  {
    title: 'Luxe Marketplace',
    description: 'Full-stack commerce platform with dynamic filtering and fluid checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#969aff',
  },
  {
    title: 'Money Manager',
    description: 'Comprehensive financial tracker with data visualization and live updates.',
    tags: ['React', 'Charts', 'Firebase', 'PWA'],
    color: '#00afea',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className={`projects__inner ${isVisible ? 'projects__inner--visible' : ''}`} ref={ref}>
        <span className="section-label">Selected Works</span>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">
          A showcase of digital products where logic meets aesthetics.
        </p>

        <div className="projects__grid">
          {projectsData.map((project, i) => (
            <div
              className={`projects__card ${hoveredIndex === i ? 'projects__card--hovered' : ''}`}
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="projects__card-visual" style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}>
                <div className="projects__card-icon" style={{ color: project.color }}>
                  <span className="material-icons" style={{ fontSize: '3rem' }}>
                    {i === 0 ? 'directions_car' : i === 1 ? 'storefront' : 'account_balance_wallet'}
                  </span>
                </div>
              </div>

              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map(tag => (
                    <span className="projects__card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
