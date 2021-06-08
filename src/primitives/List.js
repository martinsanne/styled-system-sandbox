import styled, { css } from "styled-components";
import { typography, space } from "styled-system";

const List = styled.ol(
  ({ theme, $bulletSize }) => css`
    ${typography};
    ${space};
    counter-reset: counter;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0 0 0.5rem 0;
      counter-increment: counter;
      position: relative;
      display: flex;
      align-items: center;
      &:before {
        content: counter(counter);
        display: inline-block;
        line-height: 1;
        padding: 0;
        border-radius: 999px;
        width: ${$bulletSize};
        height: ${$bulletSize};
        line-height: ${$bulletSize};
        text-align: center;
        margin-right: 0.5em;
        color: ${theme.colors.blue};
        border: 1px solid ${theme.colors.blue};
        /* 
        background: ${theme.colors.blue};
        color: white;
        */
      }
    }
  `
);

List.defaultProps = {
  fontFamily: "sans",
  $bulletSize: "3rem"
};

export default List;
