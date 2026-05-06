import type { FilterState, ServiceCategory } from '../../types/service'

const CATEGORIES: ServiceCategory[] = [
  'Plumbing',
  'Electrical',
  'Carpentry',
  'Painting',
  'Landscaping',
  'Cleaning',
]

const CATEGORY_ICONS: Record<ServiceCategory, string> = {
  Plumbing: '🔧',
  Electrical: '⚡',
  Carpentry: '🪚',
  Painting: '🎨',
  Landscaping: '🌿',
  Cleaning: '🧹',
}

const PRICE_OPTIONS = [
  { label: 'Any price', value: null },
  { label: 'Up to $40', value: 40 },
  { label: 'Up to $55', value: 55 },
]

const RATING_OPTIONS = [
  { label: 'Any', value: 0 },
  { label: '4+ ★', value: 4 },
  { label: '4.5+ ★', value: 4.5 },
]

interface Props {
  filters: FilterState
  onChange: (patch: Partial<FilterState>) => void
  open: boolean
  onClose: () => void
}

function FilterSidebar({ filters, onChange, open, onClose }: Props) {
  function toggleCategory(cat: ServiceCategory) {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter(c => c !== cat)
      : [...filters.categories, cat]
    onChange({ categories: next })
  }

  return (
    <>
      {open && <div className="filter-overlay" onClick={onClose} />}
      <aside className={`filter-sidebar${open ? ' filter-sidebar--open' : ''}`}>
        <div className="filter-sidebar-header">
          <h2>Filters</h2>
          <button className="filter-close" onClick={onClose} aria-label="Close filters">
            ×
          </button>
        </div>

        <section className="filter-section">
          <h3>Category</h3>
          <div className="filter-categories">
            {CATEGORIES.map(cat => (
              <label
                key={cat}
                className={`filter-cat-pill${filters.categories.includes(cat) ? ' active' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {CATEGORY_ICONS[cat]} {cat}
              </label>
            ))}
          </div>
        </section>

        <section className="filter-section">
          <h3>
            Max price <span className="filter-label-note">(per hour)</span>
          </h3>
          <div className="filter-options">
            {PRICE_OPTIONS.map(opt => (
              <button
                key={opt.label}
                className={`filter-option-btn${filters.maxPrice === opt.value ? ' active' : ''}`}
                onClick={() => onChange({ maxPrice: opt.value })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>

        <section className="filter-section">
          <h3>Min rating</h3>
          <div className="filter-options">
            {RATING_OPTIONS.map(opt => (
              <button
                key={opt.label}
                className={`filter-option-btn${filters.minRating === opt.value ? ' active' : ''}`}
                onClick={() => onChange({ minRating: opt.value })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>

        <section className="filter-section">
          <label className="filter-toggle">
            <input
              type="checkbox"
              checked={filters.availableOnly}
              onChange={e => onChange({ availableOnly: e.target.checked })}
            />
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
            Available now only
          </label>
        </section>
      </aside>
    </>
  )
}

export default FilterSidebar
