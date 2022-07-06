import styled from '@emotion/styled';

export const TextTitle = styled.h2`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100px;
`;

export const StatList = styled.ul`
  display: flex;
  width: auto;
  height: auto;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  /* background-color: #${Math.floor(Math.random() * 16777215).toString(16)}; */
`;

export const ContainerSt = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 300px;
  background-color: #dbdbdb;
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
`;
