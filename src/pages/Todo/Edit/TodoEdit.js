import React from 'react';

export default function TodoEdit({ match }) {
  return <div>{match.params.id}</div>;
}
