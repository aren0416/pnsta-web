import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  border: 1px solid #dbdbdb;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AuthLayout = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};
