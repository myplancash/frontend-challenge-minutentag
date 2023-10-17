import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  background: #fff;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const RemoveButton = styled.button`
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;