import data from '../data';

const Article = {
  author: (article) => data.users.find((user) => user.id === article.authorId),
};

export default Article;
