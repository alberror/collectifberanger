import { GraphQLClient } from "graphql-request";

export const request = ({ query, variables }) => {
  const endpoint = `https://graphql.datocms.com/`
  
    const client = new GraphQLClient(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      }
  })

  return client.request(query, variables)
}
