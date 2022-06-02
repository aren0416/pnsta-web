import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export const SignUp = () => {
  const navigate = useNavigate();

  const onCompleted = (data) => {
    console.log(data);
    const {
      createAccount: { error, ok },
    } = data;
    if (!ok) {
      return;
    }
    navigate(routes.home);
  };

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="Sign-up" />
      <Title>SignUp</Title>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName", {
            required: "이름은 필수에요",
          })}
          type="text"
          placeholder="성"
        />
        <FormError message={errors?.firstName?.message} />

        <Input {...register("lastName")} type="text" placeholder="이름" />

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
          {...register("email", {
            required: "이메일은 필수에요",
          })}
          type="text"
          placeholder="이메일"
        />
        <FormError message={errors?.email?.message} />

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

        <Input
          {...register("re_password", {
            required: "비밀번호는 필수에요",
            minLength: {
              value: 8,
              message: "비밀번호는 8글자보다 길어야해요",
            },
            validate: (value) =>
              value === password.current || "패스워드가 같지 않습니다",
          })}
          type="password"
          placeholder="비밀번호 확인"
        />
        <FormError message={errors?.re_password?.message} />

        <Button opacity={isValid ? "1" : "0.5"} text="회원가입" />
      </FormBox>
      <BottomBox
        cta="아이디가 있으세요?"
        link={routes.home}
        linkText="로그인"
      />
    </AuthLayout>
  );
};
