import { Header } from "@/components/Global/Header";
import {
  Banner,
  Container,
  DetailImg,
  FirstContainer,
  Label,
  Nav,
} from "./styles";
import { GlobalTitle } from "@/components/Global/Title";
import { Buttons } from "@/components/Pages/Event/Buttons";
import { Individual } from "@/components/Pages/Event/Individual";
import { Stack } from "react-bootstrap";
import { Tabs } from "@/components/Global/Tabs";
import { Description } from "@/components/Pages/Event/Description";
import { Video } from "@/components/Pages/Event/Video";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { StaticImage } from "@/components/Global/StaticImg";
import { useEffect, useState } from "react";
import { StepOne } from "@/components/Pages/Event/Tickets/Steps/1";
import { StepTwo } from "@/components/Pages/Event/Tickets/Steps/2";
import { useRouter } from "next/router";
import { getAPI } from "@/lib/axios";

// interface EventProps {
//   location: string;
//   name: string;
//   geo: string;
//   instagram: string;
//   whatsapp: string;
//   date: Date;
//   time: string;
//   place: string;
//   city: string;
//   weekDay: string;
//   day: string;
//   month: string;
//   description: { name: string; description: string }[];
//   music: string;
//   ticketSlot: {
//     id: string;
//     name: string;
//     ticket: { id: string; name: string; value: number }[];
//   };
//   product: {
//     id: string;
//     name: string;
//     value: number;
//     type: string;
//     location: string;
//   }[];
// }
export default function Event() {
  // const [event, setEvent] = useState<EventProps>({
  //   location: "/Events/Event1.svg",
  //   name: "teste",
  //   geo: "",
  //   instagram: "",
  //   whatsapp: "",
  //   date: new Date(),
  //   time: "21:00h",
  //   place: "Cerveja de Garrafa",
  //   city: "Sinop / MT",
  //   weekDay: "Segunda",
  //   day: "29",
  //   month: "JUL",
  //   description: [
  //     {
  //       name: "Titulo 1",
  //       description:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     },
  //     {
  //       name: "Título 2",
  //       description:
  //         " has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
  //     },
  //     {
  //       name: "Título 3",
  //       description:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsume specimen book.",
  //     },
  //   ],
  //   music: "https://www.youtube.com/embed/enYuqLBiisw",
  //   ticketSlot: {
  //     id: "id",
  //     name: "Lote Promocional",
  //     ticket: [
  //       {
  //         name: "Área 1",
  //         value: 1,
  //         id: "1",
  //       },
  //       {
  //         name: "Área 2",
  //         value: 2,
  //         id: "2",
  //       },
  //       {
  //         name: "Área 3",
  //         value: 3,
  //         id: "3",
  //       },
  //     ],
  //   },
  //   product: [
  //     {
  //       id: "id1",
  //       name: "Smirnoff",
  //       value: 1,
  //       type: "VODKA",
  //       location: "/Events/Item1.svg",
  //     },
  //     {
  //       id: "id2",
  //       name: "Lote Promocional",
  //       value: 1,
  //       type: "WHISKEY",
  //       location: "/Events/Item2.svg",
  //     },
  //     {
  //       id: "id3",
  //       name: "Lote Promocional",
  //       value: 1,
  //       type: "CERVEJA",
  //       location: "/Events/Item3.svg",
  //     },
  //     {
  //       id: "id4",
  //       name: "Lote Promocional",
  //       value: 1,
  //       type: "COMBOS",
  //       location: "/Events/Item4.svg",
  //     },
  //     {
  //       id: "id5",
  //       name: "Lote Promocional",
  //       value: 1,
  //       type: "ENERGÉTICOS",
  //       location: "/Events/Item5.svg",
  //     },
  //     {
  //       id: "id6",
  //       name: "Lote Promocional",
  //       value: 1,
  //       type: "OUTROS",
  //       location: "/Events/Item6.svg",
  //     },
  //   ],
  // });

  const router = useRouter();
  const { id } = useRouter().query as any;
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [eventDetails, setEventDetails] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function getEventDetails() {
    const connect = await getAPI(`/event/${id}`);
    if ((connect.status = 200)) {
      setEventDetails(connect.body);
      return setLoading(false);
    }
  }

  console.log("step", step);
  console.log("type", type);
  console.log("eventDetails", eventDetails);
  useEffect(() => {
    if (id) {
      getEventDetails();
    }
  }, [id]);

  useEffect(() => {}, [eventDetails]);

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          <Header />
          <FirstContainer>
            <Stack
              style={{
                display: "flex",
                flexDirection: width < 768 ? "column" : "column-reverse",
                width: width < 768 ? "100%" : "50%",
                justifyContent: "center",
              }}
            >
              {width > 768 ? (
                <>
                  <Individual
                    date={eventDetails.date}
                    local={eventDetails.local}
                    city={eventDetails.city.name}
                    state={eventDetails.city.state}
                  />
                  <br />
                  <Buttons
                    instagram={eventDetails.instagram}
                    whatsapp={eventDetails.whatsapp}
                    maps={eventDetails.googleLink}
                  />
                </>
              ) : (
                <></>
              )}
              <br />
              <DetailImg
                src={eventDetails.photo_location}
                width={1000}
                height={400}
                alt=""
              />
              <br />
              <br />
              <GlobalTitle
                title={eventDetails.name}
                marginLeft={width < 768 ? "2.5%" : "5%"}
              />
            </Stack>
            <br />
            {width < 768 ? (
              <>
                <Buttons
                  instagram={eventDetails.instagram}
                  whatsapp={eventDetails.whatsapp}
                  maps={eventDetails.googleLink}
                />
                <br />
                <Individual
                  date={eventDetails.date}
                  local={eventDetails.local}
                  city={eventDetails.city.name}
                  state={eventDetails.city.state}
                />
                <br />
                {eventDetails.ticketSlots.length === 0 ? (
                  <Label>Nenhum Ingresso Disponível</Label>
                ) : (
                  <>
                    {step === 1 ? (
                      <>
                        <Stack
                          direction="horizontal"
                          gap={3}
                          style={{ marginLeft: "4%", marginTop: "5%" }}
                        >
                          <Tabs active={true} />
                          <Tabs active={false} />
                          <Tabs active={false} />
                        </Stack>
                        <StepOne
                          ticket={eventDetails.ticketSlots}
                          id={eventDetails.ticketSlots.id}
                        />
                      </>
                    ) : (
                      <>
                        <Stack
                          direction="horizontal"
                          gap={3}
                          style={{ marginLeft: "4%", marginTop: "5%" }}
                        >
                          <Tabs active={true} />
                          <Tabs active={true} />
                          <Tabs active={false} />
                        </Stack>
                        <StepTwo
                          product={eventDetails.products}
                          type={type}
                          setType={setType}
                        />
                      </>
                    )}
                  </>
                )}
                <br />
                <Nav
                  direction="horizontal"
                  gap={3}
                  style={{ alignSelf: "center" }}
                >
                  <GlobalButton
                    content="Voltar"
                    background={`${Theme.color.secondary_60}`}
                    color={`${Theme.color.gray_10}`}
                    width="45%"
                    height="auto"
                    fontSize={18}
                    disabled={step === 1 ? true : false}
                    onClick={
                      step === 2 && type !== ""
                        ? () => setType("")
                        : () => setStep(step - 1)
                    }
                  />
                  <GlobalButton
                    content={
                      step === 1 || type !== "" ? "Próximo" : "Finalizar"
                    }
                    background={`${Theme.color.next}`}
                    color={`${Theme.color.gray_10}`}
                    width="45%"
                    height="auto"
                    fontSize={18}
                    onClick={
                      type !== ""
                        ? () => setType("")
                        : step === 2 && type === ""
                        ? () => router.push("/checkout")
                        : () => setStep(step + 1)
                    }
                  />
                </Nav>
              </>
            ) : (
              <>
                <Stack
                  style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "center",
                  }}
                >
                  <br />
                  <br />
                  {step === 1 ? (
                    <>
                      <Stack
                        direction="horizontal"
                        gap={3}
                        style={{ marginLeft: "7.5%" }}
                      >
                        <Tabs active={true} />
                        <Tabs active={false} />
                        <Tabs active={false} />
                      </Stack>
                      <StepOne
                        id={eventDetails.ticketSlots[0].id}
                        ticket={eventDetails.ticketSlots}
                      />
                    </>
                  ) : (
                    <>
                      <Stack
                        direction="horizontal"
                        gap={3}
                        style={{ marginLeft: "4%" }}
                      >
                        <Tabs active={true} />
                        <Tabs active={true} />
                        <Tabs active={false} />
                      </Stack>
                      <StepTwo
                        product={eventDetails.products}
                        type={type}
                        setType={setType}
                      />
                    </>
                  )}
                  <br />
                  <Nav
                    direction="horizontal"
                    gap={2}
                    style={{ alignSelf: "center" }}
                  >
                    <GlobalButton
                      content="Voltar"
                      background={`${Theme.color.secondary_60}`}
                      color={`${Theme.color.gray_10}`}
                      width="45%"
                      height="auto"
                      fontSize={18}
                      disabled={step === 1 ? true : false}
                      onClick={
                        step === 2 && type !== ""
                          ? () => setType("")
                          : () => setStep(step - 1)
                      }
                    />
                    <GlobalButton
                      content={
                        step === 1 || type !== "" ? "Próximo" : "Finalizar"
                      }
                      background={`${Theme.color.confirmation}`}
                      color={`${Theme.color.gray_10}`}
                      width="45%"
                      height="auto"
                      fontSize={18}
                      onClick={
                        type !== ""
                          ? () => setType("")
                          : step === 2 && type === ""
                          ? () => router.push("/checkout")
                          : () => setStep(step + 1)
                      }
                    />
                  </Nav>
                </Stack>
              </>
            )}
            <br />
          </FirstContainer>
          <br />
          <Banner />
          <br />
          <br />
          <Description description={eventDetails.description[0]} />
          <br />
          <br />
          <Video video={eventDetails.video} />
          <br />
          <Stack direction="horizontal" gap={2} style={{ alignSelf: "center" }}>
            <GlobalButton
              background={`${Theme.color.confirmation}`}
              color={`${Theme.color.background}`}
              content="Escolher Meus Ingressos"
              width="auto"
            >
              <StaticImage
                src="/Global/Icons/TicketIcon.svg"
                width={20}
                height={20}
                alt=""
              />
            </GlobalButton>
            <GlobalButton
              background={`${Theme.color.primary_80}`}
              width="auto"
              content=""
            >
              <StaticImage
                src="/Global/Icons/Send.svg"
                width={20}
                height={20}
                alt=""
              />
            </GlobalButton>
          </Stack>
          <br />
          <br />
          {eventDetails.description.length === 1 ? (
            <></>
          ) : (
            eventDetails.description
              .slice(1)
              .map((item: { name: string; description: string }) => (
                <>
                  <Description description={item} />
                  <br />
                  <br />
                </>
              ))
          )}
        </>
      )}
    </Container>
  );
}
