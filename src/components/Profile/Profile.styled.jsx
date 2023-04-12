import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  box-shadow: 0px 10px 13px -7px #000000,
    14px 23px 27px 10px rgba(0, 0, 0, 0.42);
  width: 250px;
  font-size: 16px;
  margin: 20px auto 50px;
  text-align: center;
  border-radius: 5px;
  background: #f0e4e4;
  border: 2px solid grey;
`;

export const Description = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  border: solid 2px grey;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 2px;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  color: dimgray;
`;

export const Location = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 25px;
  color: dimgray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 60px;
  background-color: rgb(190, 187, 187);
`;
export const Items = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
