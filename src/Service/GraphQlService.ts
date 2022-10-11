export async function fetchGraphQL(
  query: string,
  operationName: string,
  variables: any
) {
  const result = await fetch(
    'https://generic-marketplace.hasura.app/v1/graphql',
    {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g67Q6sbkwF0h3JRq7Bdp94XxYdu7S43sbvLBWdK2s2yuFF2VfFTANmlqCqhBeIrk',
      },
      method: 'POST',
      body: JSON.stringify({
        query: query,
        variables: variables,
        operationName: operationName,
      }),
    }
  );

  return await result.json();
}

export async function executeQuery(
  queryName: string,
  queryBody: string
) {
  return fetchGraphQL(queryBody, queryName, {});
}

export async function getCategories() {
  const query = `query getCategories {
    categories {
      id
      title
      updated_at
      created_at
    }
  }
  `;
  console.log(query);
  const { errors, data } = await executeQuery('getCategories', query);
  if (errors) {
    console.error(errors);
  }
  return data;
}

export async function getProducts() {
  const query = `query getProducts {
    products {
      category
      created_at
      current_stock
      description
      id
      image
      price
      rating_average
      rating_count
      title
      updated_at
    }
  }
  `;
  console.log(query);
  const { errors, data } = await executeQuery('getProducts', query);
  if (errors) {
    console.error(errors);
  }
  return data;
}
