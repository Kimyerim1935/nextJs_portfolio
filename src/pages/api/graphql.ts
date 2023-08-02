import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
`

const resolvers = {
    Query: {
        allItems() {
            return fetch('')
        }
    }
}
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});