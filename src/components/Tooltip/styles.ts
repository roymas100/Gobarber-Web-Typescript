import styled from "styled-components";

interface TooltipProps {
  backgroundColor: string;
  color: string;
}

export const Container = styled.div<TooltipProps>`
  position: relative;

  span {
    width: 160px;
    /* background: #ff9000; */

    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    /* color: #312e38; */

    &::before {
      content: "";
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
