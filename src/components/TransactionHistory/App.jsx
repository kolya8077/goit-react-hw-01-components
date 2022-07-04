import data from 'components/TransactionHistory/transactions';
import { Body } from 'components/TransactionHistory/TransactionHistory';
import PropTypes from 'prop-types';



export const TransactionHistory = () => {
  return (
    <Body events={data}/>
  )
}

Body.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};