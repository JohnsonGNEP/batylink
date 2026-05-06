import type { Service } from '../../types/service'
import ServiceCard from './ServiceCard'

interface Props {
  services: Service[]
}

function ServiceGrid({ services }: Props) {
  if (services.length === 0) {
    return (
      <div className="service-grid-empty">
        <p className="empty-title">No services found</p>
        <p className="empty-hint">Try adjusting or clearing some of your filters.</p>
      </div>
    )
  }

  return (
    <div className="service-grid">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

export default ServiceGrid
