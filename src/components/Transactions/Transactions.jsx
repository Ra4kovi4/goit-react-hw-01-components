import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeart,
  TableRow,
  TableDiscription,
} from './Transactions.styled';
import { Box } from 'components/Box/Box';
export const TransactionHistory = ({ items }) => {
  return (
    <Box
      mx={0}
      mb={5}
      display="block"
      border="normal"
      borderRadius="normal"
      borderColor="backgroundSecondary"
      width="500px"
      textAlign="center"
      as="section"
      bg="white"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableHeart>Type</TableHeart>
            <TableHeart>Amount</TableHeart>
            <TableHeart>Currency</TableHeart>
          </TableRow>
        </TableHead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableDiscription>{type}</TableDiscription>
              <TableDiscription>{amount}</TableDiscription>
              <TableDiscription>{currency}</TableDiscription>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
