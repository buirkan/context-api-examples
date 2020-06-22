import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div className="Card">
        <div className="img">
          <h2>{props.title || "Hello World"}</h2>
          <p>{props.desc || "Lorem ipsum dolor"}</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  )
}
