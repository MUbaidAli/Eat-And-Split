// import { Button } from "bootstrap";
import { useState } from "react";
import Button from "./Button";
function SplitForm({ currentFriend, whoOwe }) {
  const [bill, setBill] = useState(null);
  const [exp, setExp] = useState(null);
  const [who, setWho] = useState("user");

  const friendExp = bill - exp;
  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !exp) return;

    const pay = who === "user" ? friendExp : -exp;
    whoOwe(pay);
    setBill("");
    setExp("");
    setWho("user");
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>Split a bill with {"Friend Name"}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      {console.log(bill, exp)}
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={exp}
        onChange={(e) =>
          setExp(Number(e.target.value) > bill ? exp : Number(e.target.value))
        }
      />

      <label>👫 {currentFriend.name}'s expense</label>
      <input type="text" disabled value={friendExp} />

      <label>🤑 Who is paying the bill</label>
      <select value={who} onChange={(e) => setWho(e.target.value)}>
        <option value="user">You</option>
        <option value={currentFriend.name}>{currentFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitForm;
