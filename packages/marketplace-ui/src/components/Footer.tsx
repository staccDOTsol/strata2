import {
  Center,
  Container,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
const sections = [
  {
    title: "whatisthis",
    items: [
      {
        title: "Raise The Dead",
        href: "https://raisethedead.fun",
      },
      {
        title: "FOMO3D",
        href: "https://fomo3d.fun",
      },
      {
        title: "FOMO3D.me",
        href: "https://fomo3d.me",
      },
      {
        title: "stacc",
        href: "https://x.com/staccoverflow",
      },
    ],
  },
];
export const Footer = () => {
  return (
    <VStack backgroundColor="#303846" padding="29px">
      <Container maxW="container.lg">
        <Stack spacing={16} direction={["column", "row"]}>
          {sections.map(({ title, items }) => (
            <VStack align="left" key={title}>
              <Text fontWeight={700} fontSize="15px" color="white">
                {title}
              </Text>
              {items.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  fontWeight={400}
                  fontSize="15px"
                  color="orange.500"
                  isExternal
                >
                  <HStack spacing={1}>
                    <Text>{item.title}</Text>
                    <Icon as={RiExternalLinkLine} />
                  </HStack>
                </Link>
              ))}
            </VStack>
          ))}
        </Stack>
      </Container>
      <Center textColor="rgba(255, 255, 255, 0.49)" w="full">
        No Copyright. This is incredibly alpha && unaudited software and you are using it at your own risk. 
      </Center>
    </VStack>
  );
};
