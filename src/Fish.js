import React from 'react';

export default function Fish({ _key, icon_url }) {
  return (
    <div className="fish">
      <h2>{_key}</h2>
      <img src={icon_url} />
    </div>
  );
}
