import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../components/Pagetitle";
import { routes } from "../routes";

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

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border: 1px solid #dbdbdb;
`;

const Button = styled.button`
  padding: 10px 0;
`;

export const Login = () => {
  return (
    <>
      <PageTitle title="Login" />
      <Wrap>
        <Container>
          <Title>Login</Title>
          <FormBox>
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
            <Button>
              <Link to={routes.home}>Login</Link>
            </Button>
          </FormBox>
        </Container>
      </Wrap>
    </>
  );
};
