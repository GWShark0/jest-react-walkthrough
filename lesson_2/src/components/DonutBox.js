import React from 'react';
import Donut from './Donut';

import './DonutBox.css';

export const NUM_DONUTS = 12;

function DonutBox() {
  const donuts = Array.apply(null, Array(NUM_DONUTS));
  return (
    <div className="donut-box">
      {donuts.map((_, i) => <Donut key={i} />)}
    </div>
  );
}

export default DonutBox;
