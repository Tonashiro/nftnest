import { useMetamaskState } from "@context/MetamaskContext";
import { HTMLAttributes } from "react";
import { ButtonWrapper, StyledButton } from "./styles";

const WalletButton: React.FC<HTMLAttributes<HTMLButtonElement>> = () => {
  const { currentAccount, connectWallet } = useMetamaskState();

  return (
    <ButtonWrapper>
      {currentAccount ? (
        <StyledButton type="button" isConnected={true} className={currentAccount && "hasWallet"}>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(currentAccount.length - 4)}
        </StyledButton>
      ) : (
        <StyledButton type="button" isConnected={false} onClick={connectWallet}>
          Connect Wallet
        </StyledButton>
      )}
    </ButtonWrapper>
  );
};

export { WalletButton };
