import { IUploadNFT } from "./../../organisms/UploadNFT/types";
import { IContract } from "./../../organisms/CreateContractPage/types";
import { Dispatch, SetStateAction } from "react";

export interface IInput {
  name: string;
  placeholder: string;
  setter: Dispatch<SetStateAction<IContract | IUploadNFT>>;
}
