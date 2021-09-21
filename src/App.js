import './App.css';
import Profile from 'components/SocialProfile/SocialProfile';
import user from 'components/SocialProfile/user.json';

import Statistics from 'components/Statistics/Statistics';
import statisticalData from 'components/Statistics/statistical-data.json';

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
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </>
  );
}

export default App;
