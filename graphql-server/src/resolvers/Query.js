import data from '../data';
import { filterArticles } from './utils'

const Query = {
  articles: (_parent, { search = {} }) => filterArticles(data.articles, search),

  article: (_parent, { id }) =>
    data.articles.find((article) => article.id === id),

  users: (_parent, { limit }) =>
    limit ? data.users.slice(0, limit) : data.users,

  user: (_parent, { id }) => data.users.find((user) => user.id === id),
};

export default Query;
