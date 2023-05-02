import PropTypes from 'prop-types'; 
import { Table, Head, BodyRow, Cell } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <Cell>Type</Cell>
          <Cell>Amount</Cell>
          <Cell>Currency</Cell>
        </tr>
      </Head>

      <tbody></tbody>
        {items.map(item => (
          <BodyRow key={item.id}>
            <Cell>{item.type}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
}