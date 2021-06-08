import styled from "styled-components";
import Box from "./Box";

const Flex = styled(Box)({
  display: "flex"
});

Flex.defaultProps = {
  flexWrap: "wrap"
};

Flex.displayName = "Flex";

export default Flex;
