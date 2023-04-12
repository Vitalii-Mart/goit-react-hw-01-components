import styled from '@emotion/styled';

export const Section = styled.section`
  box-shadow: 0px 10px 13px -7px #000000,
    14px 23px 27px 10px rgba(0, 0, 0, 0.42);
  margin: auto;
  margin-bottom: 50px;
  width: 400px;
  background: #f0e4e4;
  border-radius: 5px;
  border: 2px solid grey;
  text-align: center;
`;

export const Title = styled.h2`
  padding-bottom: 15px;
  padding-top: 15px;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.span`
  text-align: center;
  padding-bottom: 5px;
  padding-top: 10px;
`;

export const Percentage = styled.span`
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
`;
