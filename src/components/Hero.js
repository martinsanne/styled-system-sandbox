import React from "react";
import styled, { css } from "styled-components";
import Box from "../primitives/Box";
import Button from "../primitives/Button";
import Container from "../primitives/Container";
import Flex from "../primitives/Flex";
import Text from "../primitives/Text";
import Headline from "./Headline";

const Hero = ({ title, text, children }) => {
  return (
    <Wrapper>
      <Container maxWidth={"none"} pb={[4]}>
        <Headline>{title}</Headline>
        <Flex>
          <Box mt={[4]} maxWidth={600}>
            <Text>
              At Kindly, we believe that there are opportunities in every
              encounter. And by that logic, every encounter begins with a meet
              and greet.
            </Text>
            <Text mt={[3]}>
              The art of conversation is the telltale sign of quality customer
              service, and we provide the tools and the resources to help you
              provide an engaging and memorable experience for each new shopper
              who visits your website. Even though digital transactions power
              e-commerce businesses, it’s humanlike dialogue and engagement that
              builds relationships between brands and their shoppers.
            </Text>
            <Button mt={[4]}>Learn more</Button>
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
    margin-top: 120px; // not if there's a theme switch!
  `
);

Wrapper.defaultProps = {
  bg: "black",
  color: "white",
  pt: [2],
  pb: [4]
};

export default Hero;
