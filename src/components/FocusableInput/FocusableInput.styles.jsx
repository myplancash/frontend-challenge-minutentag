import styled from "styled-components";

// Define a styled input element using styled-components
export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border 0.3s;
  &:focus {
    border: 2px solid #007bff;
  }
`;