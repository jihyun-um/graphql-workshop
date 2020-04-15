import data from '../data';

const User = {
  articles: (user) =>
    data.articles.filter((article) => article.authorId === user.id),
};

export default User;
