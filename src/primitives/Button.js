import styled from "styled-components";
import { variant } from "styled-system";
import Box from "./Box";

const Button = styled(Box)(
  {
    appearance: "none",
    border: "0",
    background: "red",
    borderRadius: "99px",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "inherit",
    fontWeight: "inherit"
  },
  variant({
    prop: "size",
    variants: {
      md: {
        fontSize: 2
      },
      lg: {
        fontSize: 2
      }
    }
  }),
  variant({
    prop: "variant",
    variants: {
      primary: {
        color: "white",
        bg: "primary",
        ":hover": {
          bg: "green"
        }
      },
      secondary: {
        color: "white",
        bg: "secondary"
      }
    }
  })
);

Button.defaultProps = {
  fontFamily: "sans",
  variant: "primary",
  px: [3],
  py: [1]
};

export default Button;
