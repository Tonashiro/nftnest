import { Nav, NavContent, NavItem, NavLink, NavMenu } from "./styles";
import { navLinks } from "@constants/navbar";
import { useScrollListener } from "@hooks/useScrollListener";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../atoms/Button";
import { INavbar } from "@molecules/Navbar/types";
import Image from "next/image";

const Navbar: React.FC<INavbar> = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [navBackground, setNavBackground] = useState(false);
  const scroll = useScrollListener();
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    if (scroll.y > 250 && scroll.y - scroll.lastY > 0) setIsNavVisible(false);
    else {
      setIsNavVisible(true);
      setNavBackground(false);
    }
    if (scroll.y > 400) setNavBackground(true);
  }, [scroll.y, scroll.lastY]);

  return (
    <Nav>
      <NavContent isNavVisible={isNavVisible ? true : false} navBackground={navBackground}>
        <Link href="/" passHref>
          <Image src="/logo.webp" alt="A logo image of a colorful wolf head." width={80} height={80} />
        </Link>
        <NavMenu>
          {Object.values(navLinks)
            .filter((link) => link.text)
            .map((value, index) => {
              return (
                <NavItem key={`navlink-${index + 1}`}>
                  <Link href={value.link} passHref legacyBehavior>
                    <NavLink>{value.text}</NavLink>
                  </Link>
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
          <Button isConnected={false} onClick={() => console.log("connect wallet function")}>
            Connect Wallet
          </Button>
        )}
      </NavContent>
    </Nav>
  );
};

export { Navbar };
