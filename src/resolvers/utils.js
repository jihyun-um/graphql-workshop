export const filterArticles = (articles, searchFilters) => {
  const { text, published } = searchFilters;

  return articles.filter((article) => {
    const rules = [];
    if (text) {
      rules.push(article.title.toLowerCase().includes(text.toLowerCase()));
    }
    if (published !== undefined) {
      rules.push(article.isPublished === published);
    }
    return rules.every((rule) => rule === true);
  });
};