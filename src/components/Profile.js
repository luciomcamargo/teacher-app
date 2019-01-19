import React from 'react';
import './Profile.css';

function Profile(props) {
  const dataArray = props.data.filter(
    el => el.id === parseInt(props.match.params.id)
  );
  const data = dataArray[0];
  console.log(data);
  return (
    <div className='grid-profile'>
      <div className='img-profile'>
        <img height={400} src={data.image} alt={data.name} />
      </div>
      <ul className='student-data'>
        <li>Name: {data.name}</li>
        <li>Global Score: {data.score}</li>
        <li>Grammar: {data.grammar}</li>
        <li>Reading: {data.reading}</li>

        <li>Listening: {data.listening}</li>
        <li>Writing: {data.writing}</li>
        <li>Comments: {data.comments}</li>
      </ul>
    </div>
  );
}

export default Profile;
