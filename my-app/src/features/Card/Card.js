import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Card({ id, color, price }) {
  const { url } = useRouteMatch();
  console.log(useRouteMatch());
  return (
    <li style={{ marginBlockStart: 10 + 'px' }}>
      <Link
        to={`${url}${id}`}
        style={{
          display: 'block',
          backgroundColor: `${color}`,
          height: 50 + 'px',
          width: 50 + 'px',
        }}
      ></Link>
      <p>{price}</p>
      <button>add Cart</button>
    </li>
  );
}
