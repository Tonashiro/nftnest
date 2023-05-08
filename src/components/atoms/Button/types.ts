export interface IButton {
  href?: string;
  children: React.ReactNode;
  isConnected?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps {
  isConnected: boolean;
}
