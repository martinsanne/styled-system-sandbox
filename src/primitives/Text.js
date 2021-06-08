import styled from "styled-components";
import {
  layout,
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  typography
} from "styled-system";

const Text = styled.div`
  ${layout}
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

Text.propTypes = {
  ...layout.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
  ...typography.propTypes
};

Text.defaultProps = {
  fontFamily: "sans",
  fontSize: [2, null, 3]
};

export default Text;
