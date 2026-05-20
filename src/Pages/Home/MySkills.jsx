import data from "../../data/index.json";

const techStack = [
  "HTML5", "CSS3", "JavaScript", "React.js", "React Native",
  "Tailwind CSS", "Bootstrap 5", "jQuery", "AJAX", "JSON",
  "Firebase", "Android Studio", "Figma", "Git",
];

export default function MySkills() {
  return (
    <section className="skills-section" id="mySkills">
      <div className="section-header">
        <span className="badge">What I Do</span>
        <h2>My <span className="gradient-text">Expertise</span></h2>
        <p>
          Specialized in building modern digital experiences across web,
          mobile, and design.
        </p>
      </div>

      <div className="skills-grid">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skill-card">
            <img src={item.src} alt={item.title} className="skill-card-img" />
            <h3 className="skill-card-title">{item.title}</h3>
            <p className="skill-card-desc">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="tech-stack">
        {techStack.map((tech, i) => (
          <span key={i} className="tech-pill">{tech}</span>
        ))}
      </div>
    </section>
  );
}
