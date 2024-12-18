import React, { Component, useState } from 'react';

const AddFriend = (props) => {
  const [new_friend, updateFriend] = useState({name:'',lastname:''});
  //const [lastname, updateLastname] = useState('');

  const add = () => {
    const { addFriend } = props;
    addFriend({ name: new_friend.name, lastname: new_friend.lastname });
  };
  const onChange = (event) => {
    var value = event.target.value;
    var name_el = event.target.name;
    if(name_el=='Name') updateFriend({...new_friend,name:value})
    if(name_el=='Lastname') updateFriend({...new_friend,lastname:value})
    //eval('update' + name_el + '("' + value + '")');

  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="Name"
          placeholder="Write name... "
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="Lastname"
          placeholder="Write lastname... "
          onChange={(e) => onChange(e)}
        />
        <button onClick={() => add()}>Add</button>
      </div>
    </div>
  );
};

export default AddFriend;
