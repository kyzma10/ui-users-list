import React from 'react';
import './style.css';

const UserListItem = ({user, idx, getActiveUser}) => {
  return (
    <div role='listitem' className='item' onClick={() => getActiveUser(idx)}>
      <img src={user.general.avatar} className='ui avatar image' alt="avatar"/>
      <div className="content">
        <div className="header">
          {user.general.firstName} {user.general.lastName}
        </div>
        <div className="description">
          {user.job.title}
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
