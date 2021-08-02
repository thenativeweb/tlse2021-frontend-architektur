import { Card } from 'react-bootstrap';
import React from 'react';

export const ArticlePreview = props => (
    <Card style={{ cursor: 'pointer' }} tag='a' onClick={ props.onClick }>
      <Card.Img variant='top' src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{props.date}</Card.Subtitle>
        <Card.Text>{props.previewText}</Card.Text>
      </Card.Body>
    </Card>
);
