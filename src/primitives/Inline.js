import React, { forwardRef } from "react";
import styled from "styled-components";
import Box from "./Box";

const Root = styled(Box);

const Inline = forwardRef((props, ref) => {
  const { as, children, space, ...restProps } = props;
  return (
    <Root {...restProps} $space={space} forwardedAs={as} ref={ref}>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </Root>
  );
});

Inline.displayName = "Inline";

export default Inline;
