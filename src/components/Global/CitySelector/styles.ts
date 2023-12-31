import { Dropdown } from "react-bootstrap";
import { styled } from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import px2vw from "@/utils/size";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Dropdown)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Toggle = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled(Dropdown.Menu)`
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.secondary_100};

  opacity: 0.95;
  padding: 0 5px;
`;

export const ItemText = styled(Dropdown.ItemText)`
  color: ${({ theme }) => theme.color.primary_80};
`;

export const Item = styled(Dropdown.Item)`
  text-align: center;
  color: ${({ theme }) => theme.color.gray_10};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_10};
  padding: 10px;
  &:hover {
    color: ${({ theme }) => theme.color.primary_100};
  }
  &:last-child {
    border: 0;
  }
`;

export const Icon = styled(FaLocationDot)`
  color: ${({ theme }) => theme.color.primary_60};
  width: 25px;
  height: 25px;
`;
