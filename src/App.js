import React, { useState } from "react";
import FriendList from "./components/FriendList";
import SplitForm from "./components/SplitForm";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSideForm, setShowSideForm] = useState(false);
  const [friendList, setFrindList] = useState([...initialFriends]);
  const [currentFriend, setCurrentFriend] = useState(null);

  function whoOwe(value) {
    console.log(value);

    setFrindList((friend) =>
      friend.map((fr) =>
        fr.id === currentFriend.id ? { ...fr, balance: fr.balance + value } : fr
      )
    );
    setShowSideForm(false);
  }
  function handleAddFriend(friend) {
    console.log(friend);
    setFrindList((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }

  function showFormData(friend) {
    setCurrentFriend(friend);
    setShowSideForm(true);
    setShowAddFriend(false);
  }
  // console.log(showAddFriend);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList initialFriends={friendList} showFormData={showFormData} />

        {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {!showAddFriend && showSideForm && (
        <SplitForm currentFriend={currentFriend} whoOwe={whoOwe} />
      )}
    </div>
  );
};

export default App;
