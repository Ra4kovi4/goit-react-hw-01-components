import styled from 'styled-components';

export const Title = styled.h2`
  padding: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondary};
  text-transform: uppercase;
`;
