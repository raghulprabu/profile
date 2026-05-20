import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-header-row">
        <div className="portfolio-header-text">
          <span className="badge">Recent Work</span>
          <h2>My <span className="gradient-text">Projects</span></h2>
        </div>
        <button
          className="btn-github-new"
          onClick={() => window.open("https://github.com/raghulprabu", "_blank")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.836 2.807 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.307-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.307-.54-1.523.12-3.176 0 0 1.005-.322 3.3 1.23a11.523 11.523 0 013.005-.4c1.015.005 2.035.136 3.005.4 2.29-1.552 3.295-1.23 3.295-1.23.66 1.653.246 2.87.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.286 0 .32.21.695.825.575C20.565 21.798 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View GitHub
        </button>
      </div>

      <div className="portfolio-grid">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio-card"
            onClick={() => window.open(item.file_link, "_blank")}
          >
            <div className="portfolio-card-image-wrapper">
              <img src={item.src} alt={item.title} />
              <div className="portfolio-card-overlay"></div>
            </div>
            <div className="portfolio-card-content">
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p className="portfolio-card-desc">{item.description}</p>
              <a
                href={item.file_link}
                target="_blank"
                rel="noreferrer"
                className="portfolio-card-link"
                onClick={(e) => e.stopPropagation()}
              >
                {item.link}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
