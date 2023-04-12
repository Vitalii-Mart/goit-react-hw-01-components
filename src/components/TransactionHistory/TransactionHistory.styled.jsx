import styled from '@emotion/styled';

export const TransHistory = styled.table`
  width: 500px;
  text-align: center;
  margin: 40px auto;
  font-size: 20px;
  line-height: 1.7;
  border-radius: 5px;
  background: grey;
  border: 2px solid grey;
  box-shadow: 0px 10px 13px -7px #000000,
    14px 23px 27px 10px rgba(0, 0, 0, 0.42);
`;

export const Thead = styled.thead`
  height: 40px;
  background-color: rgb(190, 187, 187);
  font-size: 20px;
`;
export const Tbody = styled.tbody`
  height: 40px;
  background: #f0e4e4;
`;
export const Tr = styled.tr`
  :nth-of-type(2n + 2) {
    background: #dad8d8;
  }
`;
