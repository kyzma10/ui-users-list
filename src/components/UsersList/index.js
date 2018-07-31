import React from 'react';
import UserListItem from '../UserListItem';
import Search from '../Search';
import UserDetail from '../UserDetail';

const UserList = ({users, activeUser, getActiveUser, handleChange}) => {
    return (
      <div className='ui celled grid'>
        <div className='row'>
          <div className='six wide column'>
            <Search handleChange={handleChange}/>
            <div role='list' className='ui list'>
              {users.length > 0 ?
                users.map((user, idx) =>
                <UserListItem
                  key={idx}
                  user={user}
                  idx={idx}
                  getActiveUser={getActiveUser}
                />) :
              <div>Results not found</div>}
            </div>
          </div>
          <div className='nine wide column'>
            <UserDetail activeUser={activeUser}/>
          </div>
        </div>
      </div>
    );
};

export default UserList;
