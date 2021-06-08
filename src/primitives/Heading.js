import styled from "styled-components";
import { variant, space } from "styled-system";

const Heading = styled.h1`
  margin: 0;
  font-weight: 400;
  line-height: 1;
  ${space}
  ${variant({
    prop: "size",
    variants: {
      h1: {
        fontSize: [48, null, 64, 81]
      },
      h2: {
        fontSize: [32, null, 48]
      },
      h3: {
        fontSize: [24]
      },
      h4: {
        fontSize: [18, null, null, 24]
      },
      h5: {
        fontSize: [18, null, null, 24],
        textTransform: "uppercase"
      }
    }
  })}
`;

Heading.defaultProps = {
  fontFamily: "serif",
  size: "h1"
};

export default Heading;
