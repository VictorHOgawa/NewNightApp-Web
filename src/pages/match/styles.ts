import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
`;

export const Background = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;

export const Logo = styled(Image)`
  width: 50%;
  height: auto;
`;

export const Back = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 50px;
  margin-left: 10px;
  z-index: 1;
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  height: 60vh;
  opacity: 1;
  border-radius: 10px;
  align-self: center;
  margin-top: 10%;
  justify-content: space-between;
  overflow: hidden;
`;

export const Photo = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  border-radius: 10px;
`;

export const Name1 = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(25, 320)};
  margin-left: 2%;
  line-height: 1;
`;

export const Arrow1 = styled(Image)`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-right: 2%;
  margin-bottom: 2%;
  transform: rotate(180deg);
`;

export const Footer1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10%;
`;

export const Buttons = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

export const Footer2 = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0px;
  width: 100%;
  height: 43vh;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: linear-gradient(
    167deg,
    rgba(35, 1, 68, 0.83) 0%,
    rgba(21, 0, 41, 0.91) 100%
  );
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const Name2 = styled(Name1)`
  align-self: normal;
`;

export const Arrow2 = styled(Arrow1)`
  align-self: normal;
  transform: rotate(180deg);
`;

export const Slider = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: -95%;
  overflow: hidden;
`;

export const FooterFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10%;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Location = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;

export const Tags = styled.div`
  color: ${({ theme }) => theme.color.gray_10};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 5px;
  padding: 5px;
  font-size: ${px2vw(12, 320)};
`;

export const Description = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(12, 320)};
  width: 80%;
  align-self: center;
  text-align: center;
`;

export const Behind = styled(Card)`
  z-index: -1;
  position: absolute;
`;

export const Download = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  border: 0;
  padding: 5px;
  width: auto;
  height: max-content;
  margin: 5px 0px;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;
