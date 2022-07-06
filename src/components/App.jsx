
import { Card } from 'components/Card/App';
import { Statis } from 'components/Statistics/App';
import { Friends } from 'components/Friends/App';
import { TransactionHistory } from 'components/TransactionHistory/App';


export const App = () => {
  return (
    <div className="conteiner">
      <Card />
      <Statis />
      <Friends />
      <TransactionHistory />
    </div>
  );
};
