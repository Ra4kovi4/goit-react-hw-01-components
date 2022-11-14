import { StatisticTitle } from './StatisticTitle/StatisticTitle';
import { StatisticList } from './StatisticList/StatisticList';

import { Box } from '../Box/Box';
// import data from '../info/data.json';

export const Statistic = ({ title, stats }) => {
  return (
    <Box
      mx={0}
      mb={5}
      display="block"
      border="normal"
      borderRadius="normal"
      borderColor="backgroundSecondary"
      width="300px"
      textAlign="center"
      as="section"
      bg="white"
    >
      {title && <StatisticTitle title={title} />}
      <StatisticList stats={stats} />
    </Box>
  );
};
