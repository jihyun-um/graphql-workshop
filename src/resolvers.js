import data from './data';

const resolvers = {
  Query: {
    articles: (_parent, { searchText }) => {
      if (!searchText) {
        return data.articles;
      }
      return data.articles.filter((article) =>
        article.title.toLowerCase().includes(searchText.toLowerCase())
      );
    },

    article: (_parent, { id }) =>
      data.articles.find((article) => article.id === id),

    users: (_parent, { limit }) =>
      limit ? data.users.slice(0, limit) : data.users,

    user: (_parent, { id }) => data.users.find((user) => user.id === id),
  },

  User: {
    articles: (user) =>
      data.articles.filter((article) => article.authorId === user.id),
  },

  Article: {
    author: (article) =>
      data.users.find((user) => user.id === article.authorId),
  },
};

export default resolvers;
