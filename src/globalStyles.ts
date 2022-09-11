import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border:1px solid red;
  }
  body{
    font-family: 'Rubik', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    background: #bbb;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: purple;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: 500ms;
`;

export default GlobalStyle;
