import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditFriend = ({ friends, editFriend }) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(friends.length > 0 ? friends[0].id : '');
  const [data, setData] = useState({ name: '', lastname: '' });

  const handleSave = () => {
    if (selectedId && data.name && data.lastname) {
      editFriend(Number(selectedId), data);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Edit Friend</h2>
      <div>
        <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
          {friends.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name} {friend.lastname}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          placeholder="New Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          placeholder="New Lastname"
          value={data.lastname}
          onChange={(e) => setData({ ...data, lastname: e.target.value })}
        />
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditFriend;
