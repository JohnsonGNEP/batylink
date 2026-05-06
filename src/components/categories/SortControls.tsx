import type { SortOption } from '../../types/service'

interface Props {
  sortBy: SortOption
  resultCount: number
  onChange: (sort: SortOption) => void
}

function SortControls({ sortBy, resultCount, onChange }: Props) {
  return (
    <div className="sort-controls">
      <p className="result-count">
        <strong>{resultCount}</strong> {resultCount === 1 ? 'service' : 'services'} found
      </p>
      <div className="sort-select-wrap">
        <label htmlFor="sort-select">Sort by</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={e => onChange(e.target.value as SortOption)}
        >
          <option value="relevant">Most relevant</option>
          <option value="rating">Highest rated</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>
    </div>
  )
}

export default SortControls
