import type { FiltersInterface } from '../interfaces';

export const DEFAULT_FILTERS: FiltersInterface = {
  search: '',
  priceRange: [0, 10000],
  category: 'all',
};