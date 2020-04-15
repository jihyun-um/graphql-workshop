import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

const graphqlServerUrl = 'http://localhost:4000';

const ArticlesQuery = `
  query Articles ($published: Boolean) {
    articles(search: { published: $published }) {
      id
      title
    }
  }
`;

const UsersQuery = `
  query Users ($limit: Int) {
    users(limit: $limit) {
      id
      name
    }
  }
`;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [articlePublished, setArticlePublished] = useState(true);

  const [users, setUsers] = useState([]);
  const [userLimit, setUserLimit] = useState(3);

  const fetchArticles = async () => {
    const { articles } = await request(graphqlServerUrl, ArticlesQuery, {
      published: articlePublished,
    });
    setArticles(articles);
  };

  const fetchUsers = async () => {
    const { users } = await request(graphqlServerUrl, UsersQuery, { limit: userLimit });
    setUsers(users);
  };

  useEffect(() => {
    fetchArticles();
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Large</h1>
      <h3>The best alternative to Medium</h3>

      <div>
        <input
          type="checkbox"
          checked={articlePublished}
          onChange={e => setArticlePublished(e.target.checked)}
        />
        <button onClick={fetchArticles}>Fetch articles</button>
      </div>

      <div>
        <input
          type="text"
          value={userLimit}
          onChange={e => setUserLimit(parseInt(e.target.value))}
        />
        <button onClick={fetchUsers}>Fetch users</button>
      </div>

      {articles.length > 0 && (
        <div>
          <h3>Articles</h3>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ul>
        </div>
      )}

      {users.length > 0 && (
        <div>
          <h3>Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
