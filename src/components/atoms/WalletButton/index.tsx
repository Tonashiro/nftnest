import { useMetamaskState } from "@context/MetamaskContext";
import { ButtonWrapper, StyledButton } from "./styles";
import { IWalletButton } from "@atoms/WalletButton/types";

const WalletButton: React.FC<IWalletButton> = () => {
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
