import styled from "styled-components";
import Heading from "../primitives/Heading";

const Headline = styled(Heading)`
  border-top: 1px solid black;
`;

Headline.defaultProps = {
  pt: 3
};

export default Headline;
