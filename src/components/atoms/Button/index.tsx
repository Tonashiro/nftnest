import { ButtonWrapper, StyledButton } from "./styles";
import { IButton } from "./types";

const Button = ({ href, children, isConnected }: IButton) => {
  return (
    <ButtonWrapper>
      <StyledButton type="button" href={href} isConnected={!!isConnected}>
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export { Button };
