import { StaticImageData } from "next/image";

export interface IStepProps {
  stepNumber: number;
  title: string;
  description: string;
  side: "right" | "left";
  backgroundImg: string | StaticImageData;
  stepImg: string | StaticImageData;
  stepImgAlt: string;
}
