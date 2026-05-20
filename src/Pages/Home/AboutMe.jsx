export default function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-image-wrapper">
        <div className="about-image-bg"></div>
        <img src="./img/about-me.png" alt="About Me" className="about-image" />
      </div>

      <div className="about-content">
        <span className="badge">About Me</span>

        <h2 className="about-title">
          Passionate <span className="gradient-text">Developer</span> & Creator
        </h2>

        <p className="about-description">
          A self-motivated, hardworking computer science graduate seeking a
          position that will allow me to explore my career options in the IT
          sector. I bring excellent interpersonal skills developed through
          independent work, and I am flexible and open to learning from mentors
          and leaders in the field.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">7.52</div>
            <div className="stat-label">CGPA</div>
          </div>
        </div>

        <div className="about-education">
          <div className="education-icon">🎓</div>
          <div className="education-content">
            <div className="education-degree">
              Bachelor of Computer Science &amp; Engineering
            </div>
            <div className="education-school">
              Coimbatore Institute of Engineering and Technology
            </div>
            <span className="education-grade">CGPA: 7.52</span>
          </div>
        </div>
      </div>
    </section>
  );
}
