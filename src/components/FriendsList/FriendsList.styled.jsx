import styled from 'styled-components';

export const ListOfFriends = styled.ul``;
export const FriendListItem = styled.li`
  display: ${p => p.theme.display.flex};
  align-items: center;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  box-shadow: ${p => p.theme.boxShadow};
  background-color: ${p => p.theme.colors.white};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Status = styled.span`
  display: ${p => p.theme.display.block};
  width: 10px;
  height: 10px;
  margin-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.backgroundColor};
`;
export const Avatar = styled.img`
  display: ${p => p.theme.display.block};
  width: 40px;
  height: auto;
  margin-right: ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.radii.normal};
`;
export const Name = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
`;
