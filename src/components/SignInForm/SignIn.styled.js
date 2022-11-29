import styled, { createGlobalStyle } from 'styled-components';
import LoadingButton from '@mui/lab/LoadingButton';

export const PageColor = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background_lightest_grey};
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const LogoStyle = styled.div`
  padding: 40px 10px;
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 30px;
    margin-bottom: 10px;
  }
`;

export const SignInStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextStyle = styled.h4`
  margin-bottom: 5px;
  font-size: 18px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const StyledInput = styled.input`
  width: 450px;
  background-color: ${(props) => props.theme.colors.text_light_gray};
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.text_light_gray};
  margin: 10px 0 30px 0;
  padding: 20px;
  box-sizing: border-box;
  font-size: 16px;
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 20px;
    font-size: 10px;
  }
`;

export const SignInButtonStyle = styled.div`
  justify-content: center;
  background-color: ${(props) => props.theme.colors.button_purple};
  color: black;
  border: none;
  border-radius: 25px;
  width: 120px;
  height: 40px;
  align-self: center;
  font-size: 18px;
  margin: 40px 0;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scaleX(1.1);
  }
  @media screen and (max-width: 500px) {
    width: 70px;
  }
`;

export const SignInLoadingStyle = styled(LoadingButton)`
  width: 100%;
  height: 100%;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const TextStyleP = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 5px;
  }
`;

export const RegisterButton = styled.span`
  border: none;
  cursor: pointer;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text_blue};
`;
