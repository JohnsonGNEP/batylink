import { Link } from 'react-router-dom'
import '../assets/styles/login.css'

function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-showcase">
        <p className="login-eyebrow">Batylink workspace</p>
        <h1>Sign in to manage campaigns, leads, and live performance.</h1>
        <p className="login-copy">
          Keep your client pipeline in one place with a focused dashboard for outreach,
          conversions, and team activity.
        </p>

        <div className="login-metrics">
          <article>
            <strong>48%</strong>
            <span>faster handoff from lead capture to first response</span>
          </article>
          <article>
            <strong>12k</strong>
            <span>monthly conversations tracked across active teams</span>
          </article>
        </div>
      </section>

      <section className="login-panel" aria-label="Login form">
        <div className="login-card">
          <div className="login-card-header">
            <p className="login-tag">Welcome back</p>
            <h2>Login</h2>
            <p>Use your work email and password to access your account.</p>
          </div>

          <form className="login-form">
            <label>
              Email address
              <input type="email" name="email" placeholder="name@company.com" />
            </label>

            <label>
              Password
              <input type="password" name="password" placeholder="Enter your password" />
            </label>

            <div className="login-form-row">
              <label className="login-checkbox">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>

              <a href="/">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit">
              Sign in
            </button>
          </form>

          <p className="login-footer">
            Need an account? <Link to="/">Contact your administrator</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
