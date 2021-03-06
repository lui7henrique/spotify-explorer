import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.components.header.height};

  padding: ${({ theme }) => theme.space[8]};

  border-bottom-color: ${({ theme }) => theme.colors.gray800};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  padding: ${({ theme }) => theme.space[4]};
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  padding: 1rem;
  height: 100%;

  border-left-color: ${({ theme }) => theme.colors.gray800};

  background-color: ${({ theme }) => theme.colors.gray1000};

  border-left-width: 1px;
  border-left-style: solid;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileBasicInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ProfileName = styled.h1`
  font-size: 20px;
`;

export const ProfileEmail = styled.p`
  font-size: 14px;
`;

export const ProfileLogout = styled.sub`
  font-size: 12px;
  margin-top: 10px;
`;

export const Main = styled.div`
  width: 100%;
  height: 3rem;
`;
