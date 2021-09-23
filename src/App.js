import './App.css';
import Profile from 'components/SocialProfile';
import user from 'components/SocialProfile/user.json';

import Statistics from 'components/Statistics';
import statisticalData from 'components/Statistics/statistical-data.json';

import FriendList from 'components/FriendList';
import friends from 'components/FriendList/friends.json';

import TransactionHistory from 'components/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
