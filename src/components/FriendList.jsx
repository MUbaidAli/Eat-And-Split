import Button from "./Button";
function FriendList({ initialFriends, showFormData }) {
  return (
    <div>
      <ul>
        {initialFriends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance > 0 && (
              <p className="green">
                {friend.name} owes you {friend.balance}€
              </p>
            )}

            {friend.balance < 0 && (
              <p className="red">
                You owes {friend.name} {friend.balance}€
              </p>
            )}

            {friend.balance === 0 && <p>You and {friend.name} are Even.</p>}

            <Button onClick={() => showFormData(friend)}>Select</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
