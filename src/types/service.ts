export type ServiceCategory =
  | 'Plumbing'
  | 'Electrical'
  | 'Carpentry'
  | 'Painting'
  | 'Landscaping'
  | 'Cleaning'

export type SortOption = 'relevant' | 'rating' | 'price-asc' | 'price-desc'

export interface Service {
  id: string
  artisan: string
  category: ServiceCategory
  rating: number
  reviewCount: number
  priceFrom: number
  tagline: string
  available: boolean
  location: string
}

export interface FilterState {
  search: string
  categories: ServiceCategory[]
  minRating: number
  maxPrice: number | null
  availableOnly: boolean
  sortBy: SortOption
}

export const DEFAULT_FILTERS: FilterState = {
  search: '',
  categories: [],
  minRating: 0,
  maxPrice: null,
  availableOnly: false,
  sortBy: 'relevant',
}
