import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://the-cocktail-db.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_USER_API_KEY || "",
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    // Add other headers if needed
  },
  cache: new InMemoryCache(),
});

const query = gql`
  query {
    
  }
`;

client
  .query({ query })
  .then((response) => {
    console.log(response.data.searchCocktail);
  })
  .catch((error) => {
    console.error(error);
  });
