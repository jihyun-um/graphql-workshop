import data from '../data';
import { filterArticles } from './utils'

const User = {
  articles: (user, { search = {} }) => {
    const articlesByUser = data.articles.filter(
      (article) => article.authorId === user.id
    );
    return filterArticles(articlesByUser, search);
  },
};

export default User;
