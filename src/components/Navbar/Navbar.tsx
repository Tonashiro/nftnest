import { Nav, Logo, NavItem, NavLink, NavMenu } from "./styles";
import { navLinks } from "../../constants/navbar";
import logoImage from "../../assets/logo.webp";
import { useScrollListener } from "../../utils/hooks/useScrollListener";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const scroll = useScrollListener();
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    if (scroll.y > 250 && scroll.y - scroll.lastY > 0) setIsNavVisible(false);
    else setIsNavVisible(true);
  }, [scroll.y, scroll.lastY]);

  return (
    <Nav isNavVisible={isNavVisible ? true : false}>
      <Link to="/">
        <Logo src={logoImage} alt="A logo image of a colorful wolf head." />
      </Link>
      <NavMenu>
        {Object.values(navLinks)
          .filter((link) => link.text)
          .map((value, index) => {
            return (
              <NavItem key={index}>
                <NavLink to={value.link}>{value.text}</NavLink>
              </NavItem>
            );
          })}
      </NavMenu>
      {currentAccount.length > 1 ? (
        <Button href="/my-nfts" isConnected={true}>
          {currentAccount.slice(0, 6)}...
          {currentAccount.slice(currentAccount.length - 4)}
        </Button>
      ) : (
        <Button
          isConnected={false}
          onClick={() => console.log("connect wallet function")}
        >
          Connect Wallet
        </Button>
      )}
    </Nav>
  );
};

export { Navbar };
