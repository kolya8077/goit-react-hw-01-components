import data from 'data/transactions';
import { Body } from 'components/TransactionHistory/TransactionHistory';



export const TransactionHistory = () => {
  return (
    <Body events={data}/>
  )
}

