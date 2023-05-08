import { footerLinks } from "@constants/footer";
import {
  FooterWrapper,
  LogoWrapper,
  FooterItems,
  FooterLink,
  FooterRow,
  FooterSubLinks,
  FooterLegals,
  FooterSocials,
  Social,
  FooterLinks,
} from "@molecules/Footer/styles";
import { IFooter } from "@molecules/Footer/types";
import Image from "next/image";
import Link from "next/link";
import footerLogo from "@assets/logo/logo.webp";

const Footer: React.FC<IFooter> = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <LogoWrapper>
          <Image src={footerLogo} alt="A logo image of a colorful wolf head." width={200} height={200} />
        </LogoWrapper>

        <FooterItems>
          {Object.values(footerLinks).map((value, index) => (
            <FooterRow key={`row-${index + 1}`}>
              {Object.values(value).map((value, index) => (
                <FooterLink key={`item-${index + 1}`}>
                  <Link href={value.link}>{value.text}</Link>
                </FooterLink>
              ))}
            </FooterRow>
          ))}
        </FooterItems>
      </FooterLinks>

      <FooterSubLinks>
        <FooterLegals>© 2023, NFTNest</FooterLegals>
        <FooterSocials>
          <Social>
            <Link href="https://www.linkedin.com/in/tonashiro/">
              <Image
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.colored_53e452f06f.svg"
                alt="LinkedIn logo image"
                width={30}
                height={30}
              />
            </Link>
          </Social>
          <Social>
            <Link href="https://github.com/tonashiro">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFfFfWc1kVRvfJWuttlp1ZgF3BsYZEjUhag&usqp=CAU"
                alt="GitHub logo image"
                width={30}
                height={30}
              />
            </Link>
          </Social>
          <Social>
            <Link href="https://www.instagram.com/tonashiro_/">
              <Image
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.colored_(1)_3164692cf2.svg"
                alt="Instagram logo image"
                width={30}
                height={30}
              />
            </Link>
          </Social>
          <Social>
            <Link href="https://www.facebook.com/profile.php?id=100007765696905">
              <Image
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.colored_4d18487e06.svg"
                alt="Facebook logo image"
                width={30}
                height={30}
              />
            </Link>
          </Social>
          <Social>
            <Link href="https://twitter.com/vts_Tonashiro">
              <Image
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Twitter.colored_f5bebe2a2e.svg"
                alt="Twitter logo image"
                width={30}
                height={30}
              />
            </Link>
          </Social>
        </FooterSocials>
      </FooterSubLinks>
    </FooterWrapper>
  );
};

export { Footer };
