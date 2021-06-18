import React, { useState } from 'react';
import './Tags.css';

function Tags({ text, onClick }) {
  const [selected, setselected] = useState(false);
  return (
    <div
      onClick={() => {
        setselected(!selected);
        onClick(selected);
      }}
      className="tagstext"
      style={selected ? { backgroundColor: '#fa7328', color: '#fff' } : {}}
    >
      {text}
    </div>
  );
}

export default Tags;
