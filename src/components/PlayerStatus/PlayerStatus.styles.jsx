import styled from "styled-components";

export const StatusContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StatusTitle = styled.h1`
  font-size: 32px;
  color: #007bff; /* Blue color for online */
`;

export const StatusCount = styled.h3`
  font-size: 24px;
  color: white; /* Dark grey color for count */
`;

export const StatusButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;