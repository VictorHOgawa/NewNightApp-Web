import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  height: auto;
  padding-bottom: 100px;
`;
