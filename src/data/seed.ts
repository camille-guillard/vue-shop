import data from './product';

export async function seed(collectionName: string) {
  await fetch(`https://restapi.fr/api/${collectionName}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function seed40articles(collectionName: string) {
  await fetch('https://restapi.fr/generator', {
    method: 'POST',
    body: JSON.stringify({
      times: 40,
      resourceName: collectionName,
      title: 'name',
      image: {
        type: 'image',
        theme: 'videogames',
        height: 200,
        width: 300,
      },
      category: {
        type: 'collection',
        values: ['gamer', 'desktop', 'streaming'],
        unique: false,
      },
      description: {
        type: 'sentence',
        range: [9, 12],
      },
      price: {
        type: 'number',
        range: [800, 2500],
      },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}