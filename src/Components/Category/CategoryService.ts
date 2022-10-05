import { fetchGraphQL } from "../../Service/GraphQlService";
export default function executeQuery(queryName: string, queryBody: string) {
  return fetchGraphQL(queryBody, queryName, {});
}
