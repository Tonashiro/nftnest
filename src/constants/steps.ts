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
    stepImgAlt: "Connect your wallet gif",
  },
  {
    title: "Creating a smart contract",
    description:
      "A smart contract is what will store your NFT collection in the Blockchain. So you need to add the information you want for your NFT collection.",
    side: side.right,
    stepImg: testImg,
    stepNumber: 2,
    backgroundImg: triangleImg,
    stepImgAlt: "Create smart contract gif",
  },
  {
    title: "Uploading your Metadata",
    description:
      "This is where you will upload your metadata to the Blockchain, but this upload DOES NOT means that it is a NFT and IS NOT in your wallet.\nAdd a name, a description for your NFT and upload the image you want on it.\n\nAfter that you will receive the METADATA of the file in the Blockchain.",
    side: side.left,
    stepImg: testImg,
    stepNumber: 3,
    backgroundImg: triangleImg,
    stepImgAlt: "Uploading a metadata gif",
  },
  {
    title: "Mint NFT",
    description:
      "This is the step that will actually create your NFT, so you will need to fill all the required fields and after that you can see the NFT inside the wallet you asked the mint to go to.",
    side: side.right,
    stepImg: testImg,
    stepNumber: 4,
    backgroundImg: triangleImg,
    stepImgAlt: "Mint NFT gif",
  },
  {
    title: "Updating NFT",
    description:
      "After you minted a NFT, if necessary you can change your NFT data by creating a new metadata in the 'Upload Metadata' menu. After you create a new metadata, you need to refer the contract address and NFT UID that you want to change the information.\nThe NFT UID you can find in 'My NFTs' menu.",
    side: side.left,
    stepImg: testImg,
    stepNumber: 5,
    backgroundImg: triangleImg,
    stepImgAlt: "Updating NFT gif",
  },
  {
    title: "Transfer NFT",
    description:
      "If you want to transfer your NFT to someone else, you just need to make sure you own that specific NFT, get the NFT CID on 'My NFTS' menu and then add the wallet to where the NFT will be transfered to.",
    side: side.right,
    stepImg: testImg,
    stepNumber: 6,
    backgroundImg: triangleImg,
    stepImgAlt: "Transfer NFT gif",
  },
];
