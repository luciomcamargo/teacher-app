import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

function Results(props) {
  const students = props.data.map(el => (
    <Link to={`/profile/${el.id}`}>
      <div className='list'>{el.name}</div>
    </Link>
  ));

  return <div className='content'>{students}</div>;
}

export default Results;
