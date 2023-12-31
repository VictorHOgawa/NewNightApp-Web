import { AuthPostAPI } from "@/lib/axios";
import { Button, Container, Icon } from "./styles";
import { useCart } from "@/context/cart";

interface MethodProps {
  selected: string;
  setSelected: any;
}

export function Method({ selected, setSelected }: MethodProps) {
  return (
    <Container>
      <Button
        onClick={() => setSelected("Pix")}
        selected={selected === "Pix" ? true : false}
      >
        <Icon src="/Checkout/Pix.svg" width={20} height={20} alt="" />
        {""}PIX
      </Button>
      <Button
        onClick={() => setSelected("Card")}
        selected={selected === "Card" ? true : false}
      >
        <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
        {""}Cartão
      </Button>
    </Container>
  );
}
