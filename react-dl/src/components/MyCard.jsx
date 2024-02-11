import React from 'react';
import Tags from './Tags';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
    const { image, name, description, tags, buttonLabel, buttonBackgroundColor, buttonOnClick } = props;

  return (
    <Card style={{ width: '20rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>
          {tags.map((tag, index) => (
            <Tags key={index} text={tag.text} backgroundColor={tag.backgroundColor} />
          ))}
        </div>
        <Button variant={buttonBackgroundColor} onClick={buttonOnClick}>{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;

