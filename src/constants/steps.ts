import triangleImg from "@assets/dots.svg";
import testImg from "@assets/test.svg";

enum side {
  right = "right",
  left = "left",
}

export const steps = [
  {
    title: "Connect your crypto wallet",
    description:
      "In order to use all the NFTNest features, you need to connect your wallet and give permissions to the application interact with you.",
    side: side.left,
    stepImg: testImg,
    stepNumber: 1,
    backgroundImg: triangleImg,
    stepImgAlt: "TestImg",
  },
  {
    title: "Creating a smart contract",
    description: "A smart contract is what will handle all your NFT collection and all ...",
    side: side.right,
    stepImg: testImg,
    stepNumber: 2,
    backgroundImg: triangleImg,
    stepImgAlt: "TestImg",
  },
  {
    title: "Uploading your NFT",
    description:
      "The first step to create a NFT is uploading your NFT image on chain, so on this step you can upload your NFT image and store the result to later create your NFT.",
    side: side.left,
    stepImg: testImg,
    stepNumber: 3,
    backgroundImg: triangleImg,
    stepImgAlt: "TestImg",
  },
  {
    title: "Mint NFT",
    description:
      "This is the step that will actually create your NFT, so you will need to fill all the required fields and after that you can see the NFT inside the wallet you asked the mint to go to.",
    side: side.right,
    stepImg: testImg,
    stepNumber: 4,
    backgroundImg: triangleImg,
    stepImgAlt: "TestImg",
  },
  {
    title: "Updating NFT",
    description:
      "After you create a NFT, if necessary you could change your NFT data by filling the fields with the new information.",
    side: side.left,
    stepImg: testImg,
    stepNumber: 5,
    backgroundImg: triangleImg,
    stepImgAlt: "TestImg",
  },
  {
    title: "Transfer NFT",
    description:
      "If you want to transfer your NFT to someone else, you just need to make sure you own that specific NFT, get the NFT CID on My NFTS tab and then add the wallet to where the NFT will be transfered to.",
    side: side.right,
    stepImg: testImg,
    stepNumber: 6,
    backgroundImg: triangleImg,
    stepImgAlt: "TestImg",
  },
];
