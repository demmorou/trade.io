import styled, { css } from "styled-components";
import { shade } from "polished";
import { ContainerProps } from "./props";

export const Container = styled.div`
  display: flex;
  padding: 0px 25px 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;

  p {
    margin-top: 25px;
    align-self: flex-start;
  }

  > div {
    margin-top: 30px;
  }
`;

export const Content = styled.div<ContainerProps>`
  background-color: #1a1a1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 100%;
  border-radius: 10px;

  input {
    height: 50px;
    width: 100%;
    background-color: #151517;
    border: none;
    color: #d4d4d4;
    border-radius: 10px;
    padding: 20px;

    :hover {
      border: 1px solid #d1d1d1;
    }

    ::placeholder {
      color: #d1d1d1;
    }
  }

  input + input {
    width: 200px;
    margin-left: 25px;
  }

  button {
    height: 50px;
    width: 150px;
    background-color: #333333;
    border: none;
    color: ${(props) => (props.isFilled ? "#121212" : "#f0f0f0")};
    font-weight: 700;
    border-radius: 10px;
    transition-duration: 0.4s;
    margin-left: 25px;

    ${(props) =>
      props.isFilled &&
      css`
        background-color: #50fa7b;
      `}

    :hover {
      background-color: ${(props) =>
        props.isFilled ? shade(0.2, "#50fa7b") : shade(0.2, "#333333")};
    }
  }
`;

export const Log = styled.div`
  width: 100%;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #151517;
  margin-top: 15px;
  padding: 20px;
  border-radius: 10px;
  word-wrap: break-word;
  overflow-y: auto;

  p {
    color: #ffffff;
  }
`;
