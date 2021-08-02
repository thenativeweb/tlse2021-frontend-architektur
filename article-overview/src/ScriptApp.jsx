import { ArticleOverview } from './ArticleOverview';
import React from 'React';

const ScriptApp = props => {
  const handleArticleClick = id => {
    props.history.push(`/article/${id}`);
  };

  return (
    <ArticleOverview onArticleClick={id => handleArticleClick(id)} />
  );
};

export {
  ScriptApp
};
