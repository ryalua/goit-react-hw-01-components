import styled from '@emotion/styled';

export const MyFriend = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background-color: rgb(255 255 255);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;
export const Status = styled.span`
  margin-left: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 100px;
`;

export const Name = styled.p`
  font-size: 25px;
`;
