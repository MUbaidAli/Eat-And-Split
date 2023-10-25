import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input type="text" disabled />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
