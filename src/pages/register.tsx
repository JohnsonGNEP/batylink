import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/login.css'

function RegisterPage() {
  const [signupMethod, setSignupMethod] = useState('email')

  return (
    <main className="login-page login-page-centered">
      <section className="login-panel" aria-label="Register form">
        <div className="login-card register-card">
          <div className="login-brand">
            <Link to="/" aria-label="Batylink home">
              Batylink
            </Link>
          </div>

          <div className="login-card-header">
            <h1>Create your account</h1>
          </div>

          <form className="login-form">
            <fieldset className="login-method-group">
              <legend>Signup method</legend>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="email"
                  checked={signupMethod === 'email'}
                  onChange={() => setSignupMethod('email')}
                />
                <span>Email</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="phone"
                  checked={signupMethod === 'phone'}
                  onChange={() => setSignupMethod('phone')}
                />
                <span>Phone</span>
              </label>
            </fieldset>

            <div className="login-name-row">
              <label>
                First name
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </label>

              <label>
                Last name
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </label>
            </div>

            {signupMethod === 'email' && (
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                />
              </label>
            )}

            {signupMethod === 'phone' && (
              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 555 0100"
                  autoComplete="tel"
                />
              </label>
            )}

            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                autoComplete="new-password"
              />
            </label>

            <label className="login-checkbox register-terms">
              <input type="checkbox" name="terms" />
              <span>
                I agree to the <Link to="/">terms</Link> and <Link to="/">privacy policy</Link>
              </span>
            </label>

            <button type="submit" className="login-submit">
              Create account
            </button>
          </form>

          <p className="login-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
