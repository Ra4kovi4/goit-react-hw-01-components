import styled from 'styled-components';

export const List = styled.ul`
  display: ${p => p.theme.display.flex};
  width: 100%;
`;
export const Item = styled.li`
  width: 100%;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.backgroundSecondary};
  color: ${p => p.theme.colors.white};
  background-color: ${p => {
    return p.backgroundColor;
  }};
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
  display: ${p => p.theme.display.block};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Percentage = styled.span`
  display: ${p => p.theme.display.block};
  font-size: ${p => p.theme.fontSizes.m};
`;
