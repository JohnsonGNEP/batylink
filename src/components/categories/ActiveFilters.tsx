import type { FilterState } from '../../types/service'

interface Props {
  filters: FilterState
  onRemove: (patch: Partial<FilterState>) => void
  onClearAll: () => void
}

function ActiveFilters({ filters, onRemove, onClearAll }: Props) {
  const chips: { label: string; onRemove: () => void }[] = []

  if (filters.search) {
    chips.push({
      label: `"${filters.search}"`,
      onRemove: () => onRemove({ search: '' }),
    })
  }

  filters.categories.forEach(cat => {
    chips.push({
      label: cat,
      onRemove: () =>
        onRemove({ categories: filters.categories.filter(c => c !== cat) }),
    })
  })

  if (filters.minRating > 0) {
    chips.push({
      label: `${filters.minRating}+ stars`,
      onRemove: () => onRemove({ minRating: 0 }),
    })
  }

  if (filters.maxPrice !== null) {
    chips.push({
      label: `Up to $${filters.maxPrice}/hr`,
      onRemove: () => onRemove({ maxPrice: null }),
    })
  }

  if (filters.availableOnly) {
    chips.push({
      label: 'Available now',
      onRemove: () => onRemove({ availableOnly: false }),
    })
  }

  if (chips.length === 0) return null

  return (
    <div className="active-filters">
      {chips.map((chip, i) => (
        <span key={i} className="active-filter-chip">
          {chip.label}
          <button onClick={chip.onRemove} aria-label={`Remove ${chip.label} filter`}>
            ×
          </button>
        </span>
      ))}
      <button className="clear-all-btn" onClick={onClearAll}>
        Clear all
      </button>
    </div>
  )
}

export default ActiveFilters
