import React, { useState } from 'react';
import './index.css';

export default function () {
  const [count, setCount] = useState(0);

  return <div>
    <div>{count}</div>
    <button 
      onClick={() => setCount(count+1)}
      className="button"
    >+</button>
  </div>
}
