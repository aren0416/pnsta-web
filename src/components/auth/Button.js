import styled from "styled-components";

const SButton = styled.button`
  width: 100%;
  border: none;
  margin-top: 12px;
  background-color: coral;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  opacity: ${(props) => props.opacity};
`;

export const Button = ({ opacity, text }) => {
  return <SButton opacity={opacity}>{text}</SButton>;
};
