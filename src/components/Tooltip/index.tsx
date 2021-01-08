import React from "react";

import { Container } from "./styles";

interface TooltopProps {
  title: string;
  className?: string;
  backgroundColor: string;
  color: string;
}

const Tooltip: React.FC<TooltopProps> = ({
  children,
  className,
  title,
  backgroundColor,
  color,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      className={className}
    >
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
