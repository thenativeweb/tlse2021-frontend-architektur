import { ArticlePreview } from './ArticlePreview';
import { CardColumns, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const ArticleOverview = props => {
  const [ articles, setArticles ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:7999/articles`).
      then(response => response.json()).
      then(loadedArticles => {
        setIsLoading(false);
        setArticles(loadedArticles);
      });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  const articleComponents = articles.map(article => (
      <ArticlePreview
        id={article.id}
        key={article.id}
        title={article.title}
        date={article.date}
        image={article.image}
        previewText={article.preview}
        onClick={() => props.onArticleClick(article.id)}
        />
  ));

  return (
    <CardColumns>
      {articleComponents}
    </CardColumns>
  );
};

export {
  ArticleOverview
};
