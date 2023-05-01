import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 80px;
  border-radius: 4px;
  background-color: rgb(255 255 255);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Head = styled.thead`
  background-color: #55bdd5;
  color: white;
  text-transform:uppercase;
`;

export const BodyRow = styled.tr`
  &:nth-of-type(2n) {
    background: #ecf1f3;
   }
`;

export const Cell = styled.th`
  padding: 10px;
`;

