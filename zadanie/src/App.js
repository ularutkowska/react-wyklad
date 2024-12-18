import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Friends from './Friends';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';

const App = () => {
  const [friends, updateFriends] = useState([
    { id: 1, name: 'Mark', lastname: 'Stark' },
    { id: 2, name: 'John', lastname: 'Bily' },
  ]);

  const addFriend = (friend) => {
    updateFriends(prev => [...prev, { id: prev.length + 1, ...friend }]);
  };

  const editFriend = (id, updatedData) => {
    updateFriends(prev =>
      prev.map(friend => (friend.id === id ? { ...friend, ...updatedData } : friend))
    );
  };

  const deleteFriend = (id) => {
    updateFriends(prev => prev.filter(friend => friend.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Friends 
              friends={friends} 
              addFriend={addFriend} 
            />
          } 
        />
        <Route path="/add" element={<AddFriend addFriend={addFriend} />} />
        <Route path="/edit" element={<EditFriend friends={friends} editFriend={editFriend} />} />
        <Route path="/delete" element={<DeleteFriend friends={friends} deleteFriend={deleteFriend} />} />
      </Routes>
    </Router>
  );
};

export default App;
