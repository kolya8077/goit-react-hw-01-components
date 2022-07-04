import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: 50px;
  border: 1px solid #eeeeee;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

