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

export const SignUp = () => {
  return (
    <AuthLayout>
      <PageTitle title="Sign-up" />
      <Title>SignUp</Title>
      <FormBox>
        <Input type="text" placeholder="성" />
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Button type="submit" value="회원가입" />
      </FormBox>
      <BottomBox
        cta="아이디가 있으세요?"
        link={routes.home}
        linkText="로그인"
      />
    </AuthLayout>
  );
};
