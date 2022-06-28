import React from 'react';
import { Link } from 'react-router-dom';

export default function Fish({ name, image_url, id }) {
  return (
    <Link to={`/fish/${id}`}><div className="fish">
      <h3>{name}</h3>
      <img src={image_url} />
    </div></Link>
  );
}
