export interface StyledButtonProps {
  isConnected: boolean;
}

export interface IWalletButton {
  href?: string;
  children: React.ReactNode;
  isConnected: boolean;
  onClick: () => void;
}
