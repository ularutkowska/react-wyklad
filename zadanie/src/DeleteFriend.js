import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteFriend = ({ friends, deleteFriend }) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(
    friends.length > 0 ? friends[0].id : ''
  );

  const handleDelete = () => {
    if (selectedId) {
      deleteFriend(Number(selectedId));
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Delete Friend</h2>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        {friends.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name} {friend.lastname}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteFriend; 