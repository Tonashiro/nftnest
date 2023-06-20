import { IUploadNFT } from "../../organisms/UploadMetadata/types";
import { IContract } from "./../../organisms/CreateContractPage/types";
import { Dispatch, SetStateAction } from "react";
import { ITransfer } from "@organisms/TransferNFTPage/types";
import { IUpdate } from "@organisms/UpdateNFTPage/types";
import { IMint } from "@organisms/MintNFTPage/types";

export interface IInput {
  name: string;
  placeholder: string;
  setter: SetterDispatch;
}

export type SetterDispatch = Dispatch<SetStateAction<IContract | IUploadNFT | ITransfer | IUpdate | IMint>>;

export type InputState = IContract | IUploadNFT | ITransfer | IUpdate | IMint;
