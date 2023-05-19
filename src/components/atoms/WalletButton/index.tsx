import { HTMLAttributes } from "react";
import { ButtonWrapper, StyledButton } from "./styles";
import { IWalletButton } from "./types";

const WalletButton: React.FC<IWalletButton & HTMLAttributes<HTMLButtonElement>> = ({ href, children, onClick, isConnected, ...props }) => {
  return (
    <ButtonWrapper>
      <StyledButton type="button" href={href} isConnected={!!isConnected} onClick={onClick}>
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export { WalletButton };
