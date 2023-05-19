export interface IWalletButton {
  href?: string;
  children: React.ReactNode;
  isConnected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export interface StyledButtonProps {
  isConnected: boolean;
}
