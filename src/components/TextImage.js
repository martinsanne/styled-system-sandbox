import React from "react";

import Headline from "./Headline";

import Aspect from "../primitives/Aspect";
import Box from "../primitives/Box";
import Button from "../primitives/Button";
import Container from "../primitives/Container";
import Flex from "../primitives/Flex";
import Text from "../primitives/Text";

const TextImage = () => {
  const colWidth = [1, null, null, 1 / 2];
  return (
    <Container>
      <Flex mx={[-3]} flexWrap="wrap">
        <Box
          mt={[5]}
          px={[3]}
          width={colWidth}
          display="flex"
          flexDirection="column"
        >
          <Headline as="h2" size="h2">
            Your business like you have never seen it before.
          </Headline>
          <Box mt={["auto"]} pt={[5]}>
            <Text maxWidth="400px">
              Connect with your customers in more direct way, we believe that
              your customers are the key elements to your products
            </Text>
            <Box mt={[3]}>
              <Button>Try now</Button>
              <Button variant="primary">Download</Button>
            </Box>
          </Box>
        </Box>
        <Box mt={[3, 4, null, 5]} px={[3]} width={colWidth}>
          <Aspect minHeight="100%" bg="red" ratio={1 / 1}>
            <Box bg="grays.0">Media placeholder</Box>
          </Aspect>
        </Box>
      </Flex>
    </Container>
  );
};

export default TextImage;
