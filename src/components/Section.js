import React from "react";
import styled, { css } from "styled-components";
import Box from "../primitives/Box";
import Container from "../primitives/Container";
import Flex from "../primitives/Flex";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";

const Section = ({ theme, title, intro, children }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Box width={[1, null, null, 1 / 2]}>
            <Heading size="h2">{title}</Heading>
          </Box>
          <Box width={[1, null, null, 1 / 2]} mt={[3, null]}>
            <Text>{intro}</Text>
          </Box>
        </Flex>
      </Container>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Box)(
  ({ theme }) => css`
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    position: relative;
    // margin-top: 120px; // not if there's a theme switch!
  `
);

Wrapper.defaultProps = {
  bg: "white",
  mt: [-4],
  pt: [4]
};

export default Section;
