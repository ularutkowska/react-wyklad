import React from 'react';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';

const Friends = ({ friends, addFriend }) => {
  return (
    <div>
      <h2>Friends List</h2>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <p>
              {friend.id} {friend.name} {friend.lastname}{' '}
              <Link to="/edit">Edit</Link> | <Link to="/delete">Delete</Link>
            </p>
          </div>
        );
      })}
      <AddFriend addFriend={addFriend} />
    </div>
  );
};

export default Friends;
