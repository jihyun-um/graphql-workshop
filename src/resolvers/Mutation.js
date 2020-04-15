import data from '../data';
import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser: (_parent, { input }) => {
    if (data.users.find((user) => user.email === input.email)) {
      throw new Error('User already exists!');
    }

    const newUser = {
      id: uuidv4(),
      ...input,
    };

    data.users.push(newUser);
    return newUser;
  },

  updateUser: (_parent, { id, input }) => {
    const user = data.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found!');
    }

    const updatedUser = {
      id,
      ...input,
    };

    data.users = data.users.map((user) =>
      user.id === id ? updatedUser : user
    );

    return updatedUser;
  },

  publishArticle: (_parent, { id }) => {
    const article = data.articles.find((article) => article.id === id);
    if (!article) {
      throw new Error('Article not found!');
    }

    if (article.isPublished) {
      throw new Error('Article is already published!');
    }

    const updatedArticle = {
      ...article,
      isPublished: true,
    };

    data.articles = data.articles.map((article) =>
      article.id === id ? updatedArticle : article
    );

    return updatedArticle;
  },
};

export default Mutation;
