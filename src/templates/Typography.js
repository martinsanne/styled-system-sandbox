import React from "react";

import Heading from "../primitives/Heading";
import Container from "../primitives/Container";
import Stack from "../primitives/Stack";
import Button from "../primitives/Button";
import TextImage from "../components/TextImage";
import Hero from "../components/Hero";
import List from "../primitives/List";

const Typography = () => {
  return (
    <div>
      <Hero title="Increase onsite traffic flow and engagement with Kindly’s conversational commerce platform" />
      <TextImage />
      <TextImage />
      <TextImage />

      {/*
      <Flex>
        <Aspect ratio={16 / 10} width="50%">
          <Box bg="red">This is some content in an 16 / 10 aspect box</Box>
        </Aspect>
        <Aspect ratio={3 / 4} width="50%">
          <Box bg="blue">This is some content in an 3 / 4 aspect box</Box>
        </Aspect>
      </Flex>
      <Section>
        <Flex>
          <Aspect ratio={16 / 10} width="50%">
            <Box bg="red">This is some content in an 16 / 10 aspect box</Box>
          </Aspect>
          <Aspect ratio={3 / 4} width="50%">
            <Box bg="blue">This is some content in an 3 / 4 aspect box</Box>
          </Aspect>
        </Flex>
      </Section>
      */}

      <Container my={5}>
        <Stack gap={3}>
          <Heading size="h1">Heading 1</Heading>
          <Heading size="h2" as="h2">
            Heading 2
          </Heading>
          <Heading size="h3" as="h3">
            Heading 3
          </Heading>
          <Heading size="h4" as="h4">
            Heading 4
          </Heading>
          <Heading size="h5" as="h5">
            Heading 5
          </Heading>
          <Heading size="h5" as="h5">
            A list:
          </Heading>
          <List>
            <li>Easy chatbot builder</li>
            <li>Stupid simple setup</li>
            <li>Awesome interface</li>
            <li>Ace customer support</li>
            <li>More awesomeness</li>
          </List>
        </Stack>

        <Heading mt={5} size="h1">
          Buttons
        </Heading>

        <Stack gap={3}>
          <div>
            <Button>Default</Button>
          </div>
          <div>
            <Button size="md">Medium</Button>
          </div>
          <div>
            <Button size="lg">Large</Button>
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default Typography;
