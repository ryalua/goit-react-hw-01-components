import styled from '@emotion/styled';

export const StatPage = styled.section`
  margin-top: 80px;
  border-radius: 4px;
  background-color: rgb(255 255 255);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  height: 100px
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Label = styled.span`
  font-size: 15px;
  text-align: center;
`;

export const Percentage = styled.span`
  font-size: 20px;
  text-align: center;
  color: white;
`;




