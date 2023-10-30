import nftHub01 from "../assets/project1/01_nftHub.png";
import nftHub02 from "../assets/project1/02_nftHub.png";

export type ProjectDetails = {
  number: string;
  name: string;
  description: string;
  subtitle: string;
  image1: string;
  image2: string;
};

export const projects: ProjectDetails[] = [
  {
    number: "01",
    name: "NFT Hub",
    description:
      "Polygon chain NFT Marketplace for Minting, Buying and Selling NFTs",
    subtitle: "ERC721 based NFT Marketplace",
    image1: nftHub01,
    image2: nftHub02,
  },
  {
    number: "02",
    name: "NFT Hub",
    description:
      "Polygon chain NFT Marketplace for Minting, Buying and Selling NFTs",
    subtitle: "ERC721 based NFT Marketplace",
    image1: nftHub01,
    image2: nftHub02,
  },
];
