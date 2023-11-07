const initialFriends = [
  {
    id: 118836,
    name: 'Laura',
    image: 'https://i.pravatar.cc/1786577',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Julia',
    image: 'https://i.pravatar.cc/48?u=171217',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Thomas',
    image: 'https://i.pravatar.cc/48?u=190639',
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
      ;
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {friend.name} owes you £{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you £{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <button className="button">Select</button>
    </li>
  );
}
