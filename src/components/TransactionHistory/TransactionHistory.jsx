import {
  TitleTh,
  TitleTr,
  TitleTrr,
  Table,
  ItemTd,
  ItemTr,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const Body = ({ events }) => {
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
        {events.map(({ id,type,amount,currency }) => (
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
