import Theme from "@/styles/themes";
import {
  Button,
  Container,
  Icon,
  Item,
  ItemText,
  Menu,
  Toggle,
} from "./styles";
import { useState, useEffect } from "react";
import { getAPI } from "@/lib/axios";
import { FaGlasses } from "react-icons/fa6";
interface CityProps {
  selectedCity?: any;
  setSelectedCity?: any;
}

export function CitySelector({
  selectedCity,
  setSelectedCity,
  ...rest
}: CityProps) {
  const [cities, setCities] = useState<any>();
  const [loading, setLoading] = useState(true);

  async function getCities() {
    const connect = await getAPI("/city");
    if (connect.status === 200) {
      setCities(connect.body);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getCities();
  }, []);

  return (
    <>
      <Container {...rest}>
        {loading ? (
          <></>
        ) : (
          <>
            <Button>
              <Toggle
                variant="background"
                style={{ color: `${Theme.color.gray_10}` }}
              >
                <Icon />
                {selectedCity.name}
              </Toggle>
              <Menu>
                <ItemText>Escolha sua Cidade</ItemText>
                {cities.city.map((item: any) => (
                  <Item onClick={() => setSelectedCity(item)} key={item}>
                    {item.name} - {item.state}
                  </Item>
                ))}
              </Menu>
            </Button>
          </>
        )}
      </Container>
    </>
  );
}
