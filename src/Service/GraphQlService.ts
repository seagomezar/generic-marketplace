export async function fetchGraphQL(
  query: string,
  operationName: string,
  variables: any
) {
  const result = await fetch(
    "https://generic-marketplace.hasura.app/v1/graphql",
    {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g67Q6sbkwF0h3JRq7Bdp94XxYdu7S43sbvLBWdK2s2yuFF2VfFTANmlqCqhBeIrk"
      },
      method: "POST",
      body: JSON.stringify({
        query: query,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

export async function executeQuery(queryName: string, queryBody: string) {
  return fetchGraphQL(queryBody, queryName, {});
}
