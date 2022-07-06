import { Profile } from 'components/Card/Profile';
import { Statistics } from 'components/Statistics/stats';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

import friends from 'data/friends';
import user from 'data/user';
import data from 'data/data';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics events={data} />
      <FriendList events={friends} />
      <TransactionHistory events={transactions} />
    </Container>
  );
};
