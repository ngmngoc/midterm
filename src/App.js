import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  //TODO: Work on the sorting user algorithms here
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const deleteUser = (addUserHandler) => {
    const account = addUserHandler.id;
    this.setUsersList(prevUsersList => ({
        account: prevUsersList.account.filter(elm => elm.id !== addUserHandler.id)
    }))
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onClick={() => this.deleteUser(addUserHandler)}/>
    </div>
  );
}

export default App;