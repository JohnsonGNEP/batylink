import type { Service } from '../../types/service'
import '../../assets/styles/service-card.css'

const AVATAR_COLORS = ['#7c3aed', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#ec4899']

const CATEGORY_ICONS: Record<string, string> = {
  Plumbing: '🔧',
  Electrical: '⚡',
  Carpentry: '🪚',
  Painting: '🎨',
  Landscaping: '🌿',
  Cleaning: '🧹',
}

function getAvatarColor(name: string) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]
}

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

interface Props {
  service: Service
}

function ServiceCard({ service }: Props) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <div
          className="service-avatar"
          style={{ background: getAvatarColor(service.artisan) }}
          aria-hidden
        >
          {getInitials(service.artisan)}
        </div>
        <div className="service-meta">
          <div className="service-name-row">
            <h3 className="service-artisan">{service.artisan}</h3>
            {service.available && (
              <span className="service-available-badge">Available</span>
            )}
          </div>
          <span className="service-location">📍 {service.location}</span>
        </div>
      </div>

      <span className="service-category-badge">
        {CATEGORY_ICONS[service.category]} {service.category}
      </span>

      <p className="service-tagline">{service.tagline}</p>

      <div className="service-card-footer">
        <div className="service-rating">
          <span className="rating-star">★</span>
          <strong>{service.rating}</strong>
          <span className="rating-count">({service.reviewCount} reviews)</span>
        </div>
        <div className="service-price">
          from <strong>${service.priceFrom}/hr</strong>
        </div>
      </div>

      <button className="service-cta">Request Service</button>
    </article>
  )
}

export default ServiceCard
