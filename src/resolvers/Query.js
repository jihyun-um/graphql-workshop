import data from '../data';

const Query = {
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
};

export default Query;
