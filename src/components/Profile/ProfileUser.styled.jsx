import styled from 'styled-components';

export const Description = styled.div`
  display: block;
`;

export const Avatar = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondary};
`;

export const Location = styled.p`
  margin-bottom: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondary};
`;

export const Stats = styled.ul`
  display: ${p => p.theme.display.flex};
  width: 100%;
  margin: 0;
  padding: 0;

  background-color: ${p => p.theme.colors.background};
  li {
    width: 100%;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.backgroundSecondary};
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Quantity = styled.span`
  display: block;
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
