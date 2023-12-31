import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled(Image)`
  position: absolute;
  left: 20px;
  top: 30px;
  background-color: transparent;
  border: 0;
  width: 20px;
  height: 20px;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 1.5;
  }
`;
