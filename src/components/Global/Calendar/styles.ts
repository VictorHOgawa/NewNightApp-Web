import Theme from "@/styles/themes";
import px2vw from "@/utils/size";
import { styled } from "styled-components";

interface CalendarProps {
  type?: "event" | "place";
  isOpen?: boolean;
}

export const Container = styled.div``;

export const Main = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.primary_60};
  text-align: center;
  background-color: ${({ theme }) => theme.color.gray_10};
  line-height: 1;
  border-radius: 5px;
  padding-top: 5px;

  @media (min-width: 768px) {
    width: 55px;
    height: 55px;
  }

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

export const Footer = styled.div<CalendarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ type, isOpen }) =>
    type === "place" && isOpen
      ? `${Theme.color.next}`
      : type === "place" && !isOpen
      ? `${Theme.color.red_60}`
      : `${Theme.color.secondary_100}`};
  height: 20px;
  width: 100%;
  color: ${({ theme }) => theme.color.gray_10};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Date = styled.label<CalendarProps>`
  font-size: ${px2vw(12, 320)};
  font-weight: bold;
  color: ${({ type, isOpen }) =>
    type === "place" && isOpen
      ? `${Theme.color.secondary_100}`
      : type === "place" && !isOpen
      ? `${Theme.color.secondary_100}`
      : type === "event"
      ? `${Theme.color.gray_10}`
      : `${Theme.color.secondary_100}`};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }

  @media (min-width: 1400px) {
    font-size: ${px2vw(12, 1400)};
  }
`;
