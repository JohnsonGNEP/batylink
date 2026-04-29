import { Link } from 'react-router-dom'
import '../assets/styles/home.css'

function HomePage() {
  return (
    <main className="home-page">
      <nav className="home-menu" aria-label="Main navigation">
        <Link className="home-brand" to="/">
          Batylink
        </Link>
        <div className="home-menu-actions">
          <Link className="menu-link" to="/login">
            Login
          </Link>
        </div>
      </nav>

      <section className="home-hero">
        <div>
          <p className="home-eyebrow">Find the right handyman fast</p>
          <h1>Local home services for every repair, project, and improvement.</h1>
          <p className="home-copy">
            Batylink helps homeowners connect with trusted handymen for plumbing, electrical,
            carpentry, painting, and same-day repairs. Browse profiles, compare ratings, and book
            reliable pros in minutes.
          </p>

          <div className="home-actions">
            <button className="button-primary">Find a handyman</button>
            <button className="button-secondary">Browse services</button>
          </div>

          <div className="home-metrics">
            <article className="metric-card">
              <strong>4.9/5</strong>
              <span>Average handyman rating across verified professionals</span>
            </article>
            <article className="metric-card">
              <strong>1,200+</strong>
              <span>Completed handyman jobs last month</span>
            </article>
            <article className="metric-card">
              <strong>30 min</strong>
              <span>Average response time from local experts</span>
            </article>
          </div>
        </div>

        <aside className="home-visual" aria-label="Handyman service preview">
          <div className="visual-card">
            <div className="visual-badge">Your next project starts here</div>
            <h2>Trusted local handymen with verified reviews.</h2>

            <div className="visual-preview">
              <div className="preview-chip">🧰 Plumbing repairs</div>
              <div className="preview-chip">⚡ Electrical fixes</div>
              <div className="preview-chip">🪚 Carpentry & assembly</div>
              <div className="preview-chip">🎨 Painting & finishing</div>
            </div>

            <div className="preview-tiles">
              <div className="preview-tile">
                <strong>24/7 booking</strong>
                <span>Request service any time and see available handymen instantly.</span>
              </div>
              <div className="preview-tile">
                <strong>Verified professionals</strong>
                <span>Every handyman passes identity, review, and quality checks.</span>
              </div>
            </div>

            <div className="feature-list">
              <div className="feature-card">
                <h3>Emergency repairs</h3>
                <p>Get fast help for leaks, power outages, and urgent home issues.</p>
              </div>
              <div className="feature-card">
                <h3>Installations</h3>
                <p>From shelves to smart devices, hire experts for safe and clean installs.</p>
              </div>
              <div className="feature-card">
                <h3>Home upgrades</h3>
                <p>Improve comfort with handyman support for small renovations and improvements.</p>
              </div>
              <div className="feature-card">
                <h3>Maintenance</h3>
                <p>Schedule routine service for plumbing, electrical, carpentry, and more.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default HomePage
