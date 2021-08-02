import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'React';

const Article = () => {
  const { id } = useParams();
  const [ article, setArticle ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:7999/articles/${id}`).
      then(response => response.json()).
      then(loadedArticle => {
        setIsLoading(false);
        setArticle(loadedArticle);
      });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export {
  Article
};
