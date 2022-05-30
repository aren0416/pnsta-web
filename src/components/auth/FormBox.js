import styled from "styled-components";

const SFormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormBox = ({ children }) => {
  return <SFormBox>{children}</SFormBox>;
};
