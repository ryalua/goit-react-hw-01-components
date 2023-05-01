import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin-top: 80px;
  border-radius: 4px;
  background-color: rgb(255 255 255);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 300px;
   margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 300px;
`;

export const Avatar = styled.img`
  margin-top: 30px;
  border-radius: 100%;
  background-color: rgb(172, 235, 235);
  width: 120px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Nav = styled.p`
  font-weight: lighter;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  gap: 1px;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100px;
  height: 50px;
  background-color: rgb(228, 226, 226);
  font-weight: lighter;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: rgb(228, 226, 226);
  font-weight: 700;
`;

export const Item = styled.li`
  
`;