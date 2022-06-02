import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { loginUser } from "../apollo";
import { AuthLayout } from "../components/auth/AuthLayout";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { FormError } from "../components/auth/FormError";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/Pagetitle";
import { routes } from "../routes";

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const LOGIN_MUTAION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onCompleted = (data) => {
    // console.log(data);
    const {
      login: { ok, token, error },
    } = data;

    if (!ok) {
      setError("result", {
        message: error,
      });
    }
    if (token) {
      // console.log(token);
      loginUser(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTAION, {
    onCompleted,
  });

  const onSubmit = () => {
    // console.log(getValues());
    if (loading) {
      return;
    }
    const { username, password } = getValues();

    login({
      variables: {
        username,
        password,
      },
    });
  };

  // console.log(errors);

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <Title>Login</Title>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: "아이디는 필수에요",
            minLength: {
              value: 5,
              message: "아이디는 5글자보다 길어야해요",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <FormError message={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "비밀번호는 필수에요",
            minLength: {
              value: 8,
              message: "비밀번호는 8글자보다 길어야해요",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <FormError message={errors?.password?.message} />

        <FormError message={errors?.result?.message} />

        {/* <Button type="submit" value="로그인" /> */}
        <Button opacity={isValid ? "1" : "0.5"} text="로그인" />
      </FormBox>
      <BottomBox
        cta="아이디가 없으세요?"
        link={routes.signUp}
        linkText="회원가입"
      />
    </AuthLayout>
  );
};
