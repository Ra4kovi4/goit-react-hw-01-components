import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  border: ${p => p.theme.borders.normal};
`;
export const TableHead = styled.thead`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.green};
`;
export const TableHeart = styled.th`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const TableDiscription = styled.td`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.xs};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;
export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.background};
  }
`;
