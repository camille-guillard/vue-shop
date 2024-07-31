import type { FiltersInterface, ProductInterface } from '../../interfaces';

export async function fetchProducts(
  filter: FiltersInterface,
  page: number
): Promise<ProductInterface[] | ProductInterface> {
  const query = new URLSearchParams();
  if (filter.category !== 'all') {
    query.append('category', filter.category);
  }
  if (page !== 1) {
    query.append('skip', (page - 1) * 20 + '');
  }
  query.append('limit', '20');
  query.append('price', `{"$gte":${filter.priceRange[0]}, "$lte":${filter.priceRange[1]}}`);
  const products = await (
    await fetch(`https://restapi.fr/api/videogames4?${query}`)
  ).json();
  return products;
}