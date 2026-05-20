import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="section-header">
        <span className="badge">Feedback</span>
        <h2>Project <span className="gradient-text">Reviews</span></h2>
        <p>What my work has been recognized for across different platforms.</p>
      </div>

      <div className="testimonial-grid">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-quote">"</div>

            <div className="testimonial-stars">
              {Array.from({ length: Number(item.count) || 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p className="testimonial-text">{item.description}</p>

            <div className="testimonial-author">
              <img src={item.src} alt={item.author_name} />
              <div>
                <div className="testimonial-author-name">{item.author_name}</div>
                <div className="testimonial-author-role">{item.author_designation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
