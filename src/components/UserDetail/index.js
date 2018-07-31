import React from 'react';

const UserDetail = ({activeUser}) => {
  return (
    activeUser ?
      <div className='ui items'>
        <div className='item'>
          <div className='ui tiny image'>
            <img src={activeUser.general.avatar} alt="avatar"/>
          </div>
          <div className='content'>
            <h2 className='header'>
              {activeUser.general.firstName} {activeUser.general.lastName}
            </h2>
            <div className='meta'>
              {`${activeUser.job.title} - ${activeUser.job.company}`}
              </div>
            <div role='list' className='ui list'>

              <div role='listitem' className='item'>
                <i aria-hidden='true' className='mail icon'/>
                <div className='content'>
                  <a href='mailto:jack@semantic-ui.com'>{activeUser.contact.email}</a>
                </div>
              </div>

              <div role='listitem' className='item'>
                <i aria-hidden='true' className='phone icon'/>
                <div className='content'>
                  {activeUser.contact.phone}
                </div>
              </div>

              <div role='listitem' className='item'>
                <i aria-hidden='true' className='zip icon'/>
                <div className='content'>
                  {activeUser.address.zipCode}
                </div>
              </div>

              <div role='listitem' className='item'>
                <i aria-hidden='true' className='point icon'/>
                <div className='content'>
                  {activeUser.address.country}
                </div>
              </div>

              <div role='listitem' className='item'>
                <i aria-hidden='true' className='point icon'/>
                <div className='content'>
                  {activeUser.address.city}
                </div>
              </div>

              <div role='listitem' className='item'>
                <i aria-hidden='true' className='point icon'/>
                <div className='content'>
                  {activeUser.address.street}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> :
    null
  );
};

export default UserDetail;
