import user from './info/user.json';
import data from './info/data.json';
import friends from './info/friends.json';
import transactions from './info/transactions.json';

import { ProfileUser } from './Profile/ProfileUser';
import { Statistic } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <ProfileUser
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
