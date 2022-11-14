import { Title } from './StatisticTitle.styled';
import PropTypes from 'prop-types';

export const StatisticTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
