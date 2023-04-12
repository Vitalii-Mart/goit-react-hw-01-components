import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  width: 250px;
  font-size: 20px;
  margin: 20px auto;
  text-align: center;

  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  border-radius: 5px;
  border: solid 2px grey;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-block: 8px;
  background: #f0e4e4;
  box-shadow: 0px 10px 13px -7px #000000,
    14px 23px 27px 10px rgba(0, 0, 0, 0.42);
`;
const setBgColor = props => {
  switch (props.IsOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return '#000';
  }
};
export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: auto 10px auto 10px;
  background-color: ${setBgColor};
`;
export const Avatar = styled.img`
  border-radius: 10px;
  background: #d3c3c3;
`;
export const Name = styled.p`
  margin-left: 16px;
`;
