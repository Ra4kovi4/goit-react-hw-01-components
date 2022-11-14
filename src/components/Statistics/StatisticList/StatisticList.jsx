import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './StatisticList.styled';
import { getRandomHexColor } from '../../../utils/RandomColor';
export const StatisticList = ({ stats }) => {
  return (
    <List>
      {stats.map(stat => (
        <Item key={stat.id} backgroundColor={getRandomHexColor()}>
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
