import Profile from "./components/Profile/Profile";
import userData from "./Data/userData.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./Data/friendsData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from './Data/transactionData.json'

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
