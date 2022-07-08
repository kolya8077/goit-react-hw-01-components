import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 700px;
  background-color: #dbdbdb;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 302px;
  height: 300px;
  border: 1px solid #ccc;
  box-shadow: inset 1px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  padding: 15px 0px 15px 0px;
  font-size: 25px;
  font-weight: 700;
`;

export const Tag = styled.p`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #888585;
`;

export const Location = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #888585;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #f3f3f3;

  :not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;

export const Label = styled.span`
  padding-bottom: 5px;
  color: #888585;
`;