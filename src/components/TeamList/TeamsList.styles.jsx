import styled from 'styled-components';

export const ListContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
`;

export const TeamsListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TeamListItem = styled.li`
  background: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TeamInfo = styled.div`
  flex: 1;
`;

export const TeamName = styled.h2`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

export const PlayerCount = styled.p`
  font-size: 18px;
  color: #333;
`;

export const TeamScore = styled.p`
  font-size: 18px;
  color: #333;
`;