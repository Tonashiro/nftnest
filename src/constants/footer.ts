import { IFooter } from "@molecules/Footer/types";

export const footerLinks: IFooter = {
  row1: {
    link1: {
      text: "My NFTs",
      link: "/nfts",
    },
    link2: {
      text: "Create Contract",
      link: "/create-contract",
    },
    link3: {
      text: "Upload NFT",
      link: "/create-nft",
    },
  },
  row2: {
    link1: {
      text: "Mint NFT",
      link: "/mint",
    },
    link2: {
      text: "Update NFT",
      link: "/update-nft",
    },
    link3: {
      text: "Transfer NFT",
      link: "/transfer-nft",
    },
  },
  row3: {
    link1: {
      text: "About us",
      link: "/about-us",
    },
    link2: {
      text: "FAQ",
      link: "/faq",
    },
  },
};
