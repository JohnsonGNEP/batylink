import { useState, useMemo } from 'react'
import ServiceSearch from '../components/categories/ServiceSearch'
import FilterSidebar from '../components/categories/FilterSidebar'
import ActiveFilters from '../components/categories/ActiveFilters'
import SortControls from '../components/categories/SortControls'
import ServiceGrid from '../components/categories/ServiceGrid'
import { SERVICES } from '../data/services'
import { DEFAULT_FILTERS } from '../types/service'
import type { FilterState } from '../types/service'
import '../assets/styles/categories.css'
import '../assets/styles/filter-sidebar.css'

function CategoriesPage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function updateFilters(patch: Partial<FilterState>) {
    setFilters(prev => ({ ...prev, ...patch }))
  }

  function clearFilters() {
    setFilters(DEFAULT_FILTERS)
  }

  const filteredServices = useMemo(() => {
    let result = [...SERVICES]

    if (filters.search) {
      const q = filters.search.toLowerCase()
      result = result.filter(
        s =>
          s.artisan.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.tagline.toLowerCase().includes(q),
      )
    }

    if (filters.categories.length > 0) {
      result = result.filter(s => filters.categories.includes(s.category))
    }

    if (filters.minRating > 0) {
      result = result.filter(s => s.rating >= filters.minRating)
    }

    if (filters.maxPrice !== null) {
      result = result.filter(s => s.priceFrom <= filters.maxPrice!)
    }

    if (filters.availableOnly) {
      result = result.filter(s => s.available)
    }

    switch (filters.sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'price-asc':
        result.sort((a, b) => a.priceFrom - b.priceFrom)
        break
      case 'price-desc':
        result.sort((a, b) => b.priceFrom - a.priceFrom)
        break
    }

    return result
  }, [filters])

  return (
    <main className="categories-page">
      <div className="categories-header">
        <h1>Browse Services</h1>
        <p>Find trusted artisans for any home project.</p>
      </div>

      <ServiceSearch
        value={filters.search}
        onChange={search => updateFilters({ search })}
      />

      <div className="categories-body">
        <FilterSidebar
          filters={filters}
          onChange={updateFilters}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="categories-main">
          <ActiveFilters
            filters={filters}
            onRemove={updateFilters}
            onClearAll={clearFilters}
          />
          <SortControls
            sortBy={filters.sortBy}
            resultCount={filteredServices.length}
            onChange={sortBy => updateFilters({ sortBy })}
          />
          <ServiceGrid services={filteredServices} />
        </div>
      </div>

      <button
        className="filter-fab"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open filters"
      >
        Filters
      </button>
    </main>
  )
}

export default CategoriesPage
