import { ArticleOverview } from './ArticleOverview';
import React from 'React';

const navigateToArticle = id => {
  const navigationEvent = {
    action: 'navigateTo',
    payload: `/article/${id}`
  };

  window.parent.postMessage(navigationEvent, '*');
};

const IFrameApp = () => (
    <ArticleOverview onArticleClick={id => navigateToArticle(id)} />
);

export {
  IFrameApp
};
