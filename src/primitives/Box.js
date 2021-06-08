import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  border,
  grid,
  typography,
  compose
} from "styled-system";

const boxProps = compose(
  space,
  color,
  layout,
  flexbox,
  border,
  grid,
  typography
);

const Box = styled.div`
  box-sizing: border-box;
  ${boxProps}
`;

Box.displayName = "Box";

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...layout.propTypes,
  ...flexbox.propTypes,
  ...border.propTypes,
  ...grid.propTypes,
  ...typography.propTypes
};

export default Box;
