import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/login.css'

function RegisterPage() {
  const [signupMethod, setSignupMethod] = useState('email')

  return (
    <main className="login-page">
      <section className="login-showcase">
        <p className="login-eyebrow">Join Batylink</p>
        <h1>Create an account for services, bookings, and provider growth.</h1>
        <p className="login-copy">
          Start as a customer looking for trusted help, or register as a provider
          ready to manage leads and service requests.
        </p>

        <div className="login-metrics">
          <article>
            <strong>2 min</strong>
            <span>average setup time for a new customer or provider profile</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>access to requests, conversations, and account activity</span>
          </article>
        </div>
      </section>

      <section className="login-panel" aria-label="Register form">
        <div className="login-card register-card">
          <div className="login-card-header">
            <p className="login-tag">Get started</p>
            <h2>Register</h2>
            <p>Create your Batylink account with email, phone, or a connected account.</p>
          </div>

          <form className="login-form">
            <fieldset className="login-segment-group">
              <legend>Register as</legend>
              <label>
                <input type="radio" name="role" value="customer" defaultChecked />
                <span>Customer</span>
              </label>
              <label>
                <input type="radio" name="role" value="provider" />
                <span>Provider</span>
              </label>
            </fieldset>

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
              <label>
                <input
                  type="radio"
                  name="method"
                  value="otp"
                  checked={signupMethod === 'otp'}
                  onChange={() => setSignupMethod('otp')}
                />
                <span>OTP</span>
              </label>
            </fieldset>

            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" />
            </label>

            {signupMethod === 'email' && (
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
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                </label>
              </>
            )}

            {signupMethod === 'phone' && (
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
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                </label>
              </>
            )}

            {signupMethod === 'otp' && (
              <>
                <label>
                  Email or phone
                  <input
                    type="text"
                    name="otp-destination"
                    placeholder="name@company.com or +1 555 0100"
                    autoComplete="username"
                  />
                </label>

                <label>
                  OTP code
                  <input
                    type="text"
                    name="otp"
                    inputMode="numeric"
                    placeholder="Enter 6-digit code"
                    autoComplete="one-time-code"
                  />
                </label>
              </>
            )}

            <label className="login-checkbox register-terms">
              <input type="checkbox" name="terms" />
              <span>
                I agree to the <Link to="/">terms</Link> and <Link to="/">privacy policy</Link>
              </span>
            </label>

            <button type="submit" className="login-submit">
              Create account
            </button>

            <div className="login-divider">
              <span>or sign up with</span>
            </div>

            <div className="login-socials" aria-label="Social signup options">
              <button type="button" className="login-social-button">
                <span className="social-mark google">G</span>
                Google
              </button>
              <button type="button" className="login-social-button">
                <span className="social-mark facebook">f</span>
                Facebook
              </button>
              <button type="button" className="login-social-button">
                <span className="social-mark youtube">YT</span>
                YouTube
              </button>
            </div>

            <Link to="/" className="login-guest">
              Continue as guest
            </Link>
          </form>

          <p className="login-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
