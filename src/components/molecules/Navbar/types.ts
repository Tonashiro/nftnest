export interface INavbar {
  [key: string]: {
    text: string;
    link: string;
  };
}

export interface NavProps {
  isNavVisible: boolean;
  navBackground: boolean;
}
