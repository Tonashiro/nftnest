import { HTMLAttributes } from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export { Button };
