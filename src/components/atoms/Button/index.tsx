import { HTMLAttributes } from "react";
import { ButtonWrapper, StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton & HTMLAttributes<HTMLButtonElement>> = ({ href, children, isConnected, ...props }) => {
  return (
    <ButtonWrapper>
      <StyledButton type="button" href={href} isConnected={!!isConnected}>
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export { Button };
