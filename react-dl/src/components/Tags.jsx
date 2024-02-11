import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
  const { text, backgroundColor } = props;

  return (
    <Badge style={{ backgroundColor }} className="mr-1">
      {text}
    </Badge>
  );
};

export default Tags;