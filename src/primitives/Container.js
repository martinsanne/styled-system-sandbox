import styled from "styled-components";
import Box from "../primitives/Box";

const Container = styled(Box)`
  margin-left: auto;
  margin-right: auto;
`;

Container.defaultProps = {
  px: [2, 4],
  mx: "auto",
  maxWidth: `140rem`
};

export default Container;
