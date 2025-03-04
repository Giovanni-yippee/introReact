import React from 'react';

export default function BookCard(props) {
  return (
    <div className="book-card">
      <img src={props.img} alt="" className="book-cover" />
      <div className="book-details">
        <h3>{props.title}</h3>
        <p>Автор: {props.author}</p>
        <p>Шыққан жылы: {props.year}</p>
      </div>
    </div>
  );
};