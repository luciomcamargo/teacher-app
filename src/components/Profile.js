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
      <img src={data.image} alt={data.name} />
      <ul className='student-data'>
        <li>{data.name}</li>
        <li>{data.description}</li>
        <li>{data.price}</li>
        <li>{data.name}</li>
      </ul>
    </div>
  );
}

export default Profile;
