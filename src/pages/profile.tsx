import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/styles/profile.css'

type Profile = {
  firstName: string
  lastName: string
  profilePhoto: string | null
}

const PROFILE_STORAGE_KEY = 'batylink-profile'

const DEFAULT_PROFILE: Profile = {
  firstName: 'Alex',
  lastName: 'Morgan',
  profilePhoto: null,
}

function loadProfile() {
  if (typeof window === 'undefined') {
    return DEFAULT_PROFILE
  }

  const savedProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY)

  if (!savedProfile) {
    return DEFAULT_PROFILE
  }

  try {
    return {
      ...DEFAULT_PROFILE,
      ...JSON.parse(savedProfile),
    } as Profile
  } catch {
    return DEFAULT_PROFILE
  }
}

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]

const RECENT_SERVICE_REQUESTS = [
  {
    id: 1,
    service: 'Kitchen sink repair',
    date: '2026-04-28',
    status: 'Completed',
    rating: 5,
    providerName: 'Maya Johnson',
    providerRole: 'Plumbing specialist',
    providerInitials: 'MJ',
  },
  {
    id: 2,
    service: 'Door lock replacement',
    date: '2026-04-16',
    status: 'Completed',
    rating: 4.5,
    providerName: 'Daniel Carter',
    providerRole: 'Home security handyman',
    providerInitials: 'DC',
  },
  {
    id: 3,
    service: 'Bedroom wall painting',
    date: '2026-03-30',
    status: 'Completed',
    rating: 5,
    providerName: 'Sofia Ramirez',
    providerRole: 'Painter and finisher',
    providerInitials: 'SR',
  },
  {
    id: 4,
    service: 'Ceiling fan installation',
    date: '2026-03-12',
    status: 'Completed',
    rating: 4,
    providerName: 'Noah Thompson',
    providerRole: 'Electrical handyman',
    providerInitials: 'NT',
  },
  {
    id: 5,
    service: 'Bathroom tile repair',
    date: '2026-02-24',
    status: 'Completed',
    rating: 4.5,
    providerName: 'Alicia Bennett',
    providerRole: 'Tile and flooring handywoman',
    providerInitials: 'AB',
  },
]

function formatServiceDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

function ProfileEditPage() {
  const [profile, setProfile] = useState<Profile>(loadProfile)
  const navigate = useNavigate()
  const displayName = `${profile.firstName} ${profile.lastName}`.trim() || 'Customer'
  const initials =
    `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase() || 'CU'

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setProfile((currentProfile) => ({
      ...currentProfile,
      [name]: value,
    }))
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.addEventListener('load', () => {
      setProfile((currentProfile) => ({
        ...currentProfile,
        profilePhoto: typeof reader.result === 'string' ? reader.result : null,
      }))
    })

    reader.readAsDataURL(file)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
    navigate('/profile')
  }

  return (
    <main className="profile-page">
      <section className="profile-shell" aria-labelledby="profile-title">
        <header className="profile-header">
          <div>
            <Link to="/" className="profile-brand">
              Batylink
            </Link>
            <p className="profile-eyebrow">Edit profile</p>
            <h1 id="profile-title">Update your account information</h1>
          </div>

          <div className="profile-status" aria-label="Account status">
            <span>Verified customer</span>
            <strong>Active</strong>
          </div>
        </header>

        <form className="profile-grid" onSubmit={handleSubmit}>
          <section className="profile-card profile-summary" aria-label="Profile summary">
            <div className="profile-avatar" aria-hidden="true">
              {profile.profilePhoto ? <img src={profile.profilePhoto} alt="" /> : initials}
            </div>
            <div>
              <h2>{displayName}</h2>
              <p>Customer since 2026</p>
            </div>
            <label className="profile-photo-button">
              Change photo
              <input type="file" name="profilePhoto" accept="image/*" onChange={handlePhotoChange} />
            </label>
          </section>

          <section className="profile-card" aria-labelledby="personal-info-title">
            <h2 id="personal-info-title">Personal information</h2>
            <div className="profile-field-grid two-columns">
              <label>
                First name
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleNameChange}
                  autoComplete="given-name"
                />
              </label>
              <label>
                Last name
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleNameChange}
                  autoComplete="family-name"
                />
              </label>
              <label>
                Date of birth
                <input type="date" name="birthDate" defaultValue="1994-08-18" />
              </label>
              <label>
                Preferred language
                <select name="language" defaultValue="english">
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
              </label>
            </div>
          </section>

          <section className="profile-card" aria-labelledby="contact-info-title">
            <h2 id="contact-info-title">Contact information</h2>
            <div className="profile-field-grid">
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  defaultValue="alex.morgan@example.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" defaultValue="+1 555 0148" autoComplete="tel" />
              </label>
            </div>
          </section>

          <section className="profile-card profile-wide" aria-labelledby="address-title">
            <h2 id="address-title">Address</h2>
            <div className="profile-field-grid two-columns">
              <label className="profile-full-row">
                Street address
                <input
                  type="text"
                  name="street"
                  defaultValue="120 Market Street"
                  autoComplete="street-address"
                />
              </label>
              <label>
                City
                <input type="text" name="city" defaultValue="New York" autoComplete="address-level2" />
              </label>
              <label>
                State
                <select name="state" defaultValue="New York" autoComplete="address-level1">
                  {US_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                ZIP code
                <input type="text" name="zip" defaultValue="10001" autoComplete="postal-code" />
              </label>
              <label>
                Country
                <select name="country" defaultValue="United States" autoComplete="country-name">
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section className="profile-card" aria-labelledby="preferences-title">
            <h2 id="preferences-title">Preferences</h2>
            <div className="profile-check-list">
              <label>
                <input type="checkbox" name="emailUpdates" defaultChecked />
                <span>Email updates for bookings and offers</span>
              </label>
              <label>
                <input type="checkbox" name="smsUpdates" defaultChecked />
                <span>SMS reminders for upcoming services</span>
              </label>
              <label>
                <input type="checkbox" name="providerMessages" defaultChecked />
                <span>Provider messages and request updates</span>
              </label>
            </div>
          </section>

          <section className="profile-card profile-wide" aria-labelledby="service-title">
            <h2 id="service-title">Service details</h2>
            <div className="profile-field-grid two-columns">
              <label>
                Preferred service area
                <input type="text" name="serviceArea" defaultValue="Manhattan and Brooklyn" />
              </label>
              <label>
                Default payment method
                <select name="paymentMethod" defaultValue="card">
                  <option value="card">Card</option>
                  <option value="cash">Cash</option>
                  <option value="bank">Bank transfer</option>
                </select>
              </label>
              <label className="profile-full-row">
                Notes for providers
                <textarea
                  name="providerNotes"
                  rows={4}
                  defaultValue="Please message before arriving and use the main building entrance."
                />
              </label>
            </div>
          </section>

          <div className="profile-actions">
            <Link to="/profile" className="profile-secondary-button">
              Cancel
            </Link>
            <button type="submit" className="profile-primary-button">
              Save changes
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

function ProfilePage() {
  const [profile] = useState<Profile>(loadProfile)
  const displayName = `${profile.firstName} ${profile.lastName}`.trim() || 'Customer'
  const initials =
    `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase() || 'CU'

  return (
    <main className="profile-page">
      <section className="profile-shell" aria-labelledby="profile-title">
        <header className="profile-header">
          <div>
            <Link to="/" className="profile-brand">
              Batylink
            </Link>
            <p className="profile-eyebrow">Customer profile</p>
            <h1 id="profile-title">Your account information</h1>
          </div>

          <div className="profile-header-actions">
            <Link to="/profile/edit" className="profile-primary-link">
              Edit profile
            </Link>
            <div className="profile-status" aria-label="Account status">
              <span>Verified customer</span>
              <strong>Active</strong>
            </div>
          </div>
        </header>

        <div className="profile-grid">
          <section className="profile-card profile-summary" aria-label="Profile summary">
            <div className="profile-avatar" aria-hidden="true">
              {profile.profilePhoto ? <img src={profile.profilePhoto} alt="" /> : initials}
            </div>
            <div>
              <h2>{displayName}</h2>
              <p>Customer since 2026</p>
            </div>
          </section>

          <section className="profile-card" aria-labelledby="personal-info-title">
            <h2 id="personal-info-title">Personal information</h2>
            <div className="profile-read-list">
              <div>
                <span>Full name</span>
                <strong>{displayName}</strong>
              </div>
              <div>
                <span>Date of birth</span>
                <strong>August 18, 1994</strong>
              </div>
              <div>
                <span>Preferred language</span>
                <strong>English</strong>
              </div>
            </div>
          </section>

          <section className="profile-card" aria-labelledby="contact-info-title">
            <h2 id="contact-info-title">Contact information</h2>
            <div className="profile-read-list">
              <div>
                <span>Email address</span>
                <strong>alex.morgan@example.com</strong>
              </div>
              <div>
                <span>Phone number</span>
                <strong>+1 555 0148</strong>
              </div>
            </div>
          </section>

          <section className="profile-card profile-wide" aria-labelledby="address-title">
            <h2 id="address-title">Address</h2>
            <div className="profile-read-list read-grid">
              <div>
                <span>Street address</span>
                <strong>120 Market Street</strong>
              </div>
              <div>
                <span>City</span>
                <strong>New York</strong>
              </div>
              <div>
                <span>State</span>
                <strong>New York</strong>
              </div>
              <div>
                <span>ZIP code</span>
                <strong>10001</strong>
              </div>
              <div>
                <span>Country</span>
                <strong>United States</strong>
              </div>
            </div>
          </section>

          <section className="profile-card" aria-labelledby="preferences-title">
            <h2 id="preferences-title">Preferences</h2>
            <div className="profile-read-list">
              <div>
                <span>Email updates</span>
                <strong>Enabled</strong>
              </div>
              <div>
                <span>SMS reminders</span>
                <strong>Enabled</strong>
              </div>
              <div>
                <span>Provider messages</span>
                <strong>Enabled</strong>
              </div>
            </div>
          </section>

          <section className="profile-card profile-wide" aria-labelledby="service-title">
            <h2 id="service-title">Service details</h2>
            <div className="profile-read-list read-grid">
              <div>
                <span>Preferred service area</span>
                <strong>Manhattan and Brooklyn</strong>
              </div>
              <div>
                <span>Default payment method</span>
                <strong>Card</strong>
              </div>
              <div className="profile-read-wide">
                <span>Notes for providers</span>
                <strong>Please message before arriving and use the main building entrance.</strong>
              </div>
            </div>
          </section>

          <RecentServiceRequests />
        </div>
      </section>
    </main>
  )
}

function RecentServiceRequests() {
  return (
    <section className="profile-card profile-wide" aria-labelledby="recent-services-title">
      <div className="profile-section-heading">
        <h2 id="recent-services-title">Recent service requests</h2>
        <span>Last 5</span>
      </div>

      <div className="service-request-list">
        {RECENT_SERVICE_REQUESTS.map((request) => (
          <article className="service-request-item" key={request.id}>
            <div>
              <h3>{request.service}</h3>
              <p>{formatServiceDate(request.date)}</p>
            </div>

            <span className="service-request-status">{request.status}</span>

            <span className="service-request-rating" aria-label={`Rated ${request.rating} out of 5`}>
              * {request.rating.toFixed(1)}
            </span>

            <div className="service-provider-profile">
              <div className="service-provider-avatar" aria-hidden="true">
                {request.providerInitials}
              </div>
              <div>
                <strong>{request.providerName}</strong>
                <span>{request.providerRole}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export { ProfileEditPage }
export default ProfilePage


