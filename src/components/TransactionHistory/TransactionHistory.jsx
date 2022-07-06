import {
  TitleTh,
  TitleTr,
  TitleTrr,
  Table,
  ItemTd,
  ItemTr,
} from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from 'prop-types';


export const TransactionHistory = ({ events }) => {
  return (
    <Table>
      <TitleTr>
        <TitleTrr>
          <TitleTh>Type</TitleTh>
          <TitleTh>Amount</TitleTh>
          <TitleTh>Currency</TitleTh>
        </TitleTrr>
      </TitleTr>

      <tbody>
        {events.map(({ id, type, amount, currency }) => (
          <ItemTr key={id}>
            <ItemTd>{type}</ItemTd>
            <ItemTd>{amount}</ItemTd>
            <ItemTd>{currency}</ItemTd>
          </ItemTr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};