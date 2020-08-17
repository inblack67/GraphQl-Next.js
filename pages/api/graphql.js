import { ApolloServer, gql } from 'apollo-server-micro';
import { connectDB } from '../../utils/connectDB'
import Book from '../../models/Book'
import Author from '../../models/Author'

connectDB();

const typeDefs = gql`

  type Query{
    books: [Book!]!,
    authors: [Author!]!,
  }

  type Book{
    title: String!,
    genre: String!,
  }

  type Author{
    name: String!
  }

`;

const resolvers = {
  Query: {
    books: async (parent, args) => {
      const res = await Book.find();
      return res;
    },
    authors: async () => {
      const res = await Author.find();
      return res;
    },
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;