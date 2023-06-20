import { IMint } from "./../../organisms/MintNFTPage/types";
import { IUpdate } from "./../../organisms/UpdateNFTPage/types";
import { ITransfer } from "./../../organisms/TransferNFTPage/types";
import { IUploadNFT } from "../../organisms/UploadMetadata/types";
import { IContract } from "./../../organisms/CreateContractPage/types";
import { SetStateAction, Dispatch } from "react";

export interface IFileSelector {
  info: InputState;
  setter: SetterDispatch;
}

export type SetterDispatch = Dispatch<SetStateAction<IContract | IUploadNFT | ITransfer | IUpdate | IMint>>;

export type InputState = IContract | IUploadNFT | ITransfer | IUpdate | IMint;
