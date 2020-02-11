import React from 'react';
import Card from './card';

export default () => {
  const grid = [1, 2, 3, 4, 5, 6, 7, 8].map((card, i) => {
    return <Card key={i} card={card}></Card>;
  });
  return (
    <div id="apps">
      <div className="apps-grid">
        {grid}
      </div>
    </div>
  );
}