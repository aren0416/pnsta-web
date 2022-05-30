import styled from "styled-components";
import { AuthLayout } from "../components/auth/AuthLayout";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/Pagetitle";
import { routes } from "../routes";

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Login = () => {
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <Title>Login</Title>
      <FormBox>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Button type="submit" value="로그인" />
      </FormBox>
      <BottomBox
        cta="아이디가 없으세요?"
        link={routes.signUp}
        linkText="회원가입"
      />
    </AuthLayout>
  );
};
