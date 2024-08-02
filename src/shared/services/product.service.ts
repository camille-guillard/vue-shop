import type {
  FiltersInterface,
  ProductInterface,
  ProductFormInterface,
} from '../interfaces';

const BASE_URL = 'https://restapi.fr/api/vueprojectproducts';

export async function fetchProductsWithFilters(
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
  const products = await (await fetch(`${BASE_URL}?${query}`)).json();
  return products;
}

export async function fetchProducts(): Promise<ProductInterface[]> {
  return await (await fetch(BASE_URL)).json();
}

export async function deleteProduct(productId: string): Promise<string> {
  await fetch(`${BASE_URL}/${productId}`, {
    method: 'DELETE',
  });
  return productId;
}

export async function addProduct(
  product: ProductFormInterface
): Promise<ProductInterface> {
  const newProduct = await (
    await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
  return newProduct;
}

export async function getProduct(productId: string): Promise<ProductInterface> {
  const product = await (await fetch(`${BASE_URL}/${productId}`)).json();
  return product;
}

export async function editProduct(
  productId: string,
  product: ProductFormInterface
): Promise<ProductInterface> {
  const updatedProduct = await (
    await fetch(`${BASE_URL}/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
  return updatedProduct;
}