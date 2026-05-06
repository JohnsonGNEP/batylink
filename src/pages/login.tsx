import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/login.css'

function LoginPage() {
  const [loginMethod, setLoginMethod] = useState('email')

  return (
    <main className="login-page login-page-centered">
      <section className="login-panel" aria-label="Login form">
        <div className="login-card">
          <div className="login-brand">
            <Link to="/" aria-label="Batylink home">
              Batylink
            </Link>
          </div>

          <div className="login-card-header">
            <h1>Sign in or create account</h1>
          </div>

          <form className="login-form">
            <fieldset className="login-method-group">
              <legend>Login method</legend>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="email"
                  checked={loginMethod === 'email'}
                  onChange={() => setLoginMethod('email')}
                />
                <span>Email</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="phone"
                  checked={loginMethod === 'phone'}
                  onChange={() => setLoginMethod('phone')}
                />
                <span>Phone</span>
              </label>
            </fieldset>

            {loginMethod === 'email' && (
              <>
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                  />
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </label>
              </>
            )}

            {loginMethod === 'phone' && (
              <>
                <label>
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 555 0100"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    name="phone-password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </label>
              </>
            )}

            <div className="login-form-row">
              <label className="login-checkbox">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>

              <Link to="/">Forgot password?</Link>
            </div>

            <button type="submit" className="login-submit">
              Continue
            </button>
          </form>

          <p className="login-footer">
            New to Batylink? <Link to="/register">Create your account</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
