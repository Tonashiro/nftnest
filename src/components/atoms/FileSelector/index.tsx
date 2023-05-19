import { IFileSelector } from "@atoms/FileSelector/types";
import { FileInput, FileInputLabel } from "@styles/ GlobalStyle";

const FileSelector: React.FC<IFileSelector> = ({ info, setter }) => {
  const handleFileInputChange = async (e: any) => {
    const currentIMG = e.target.files[0];

    const myPromisse = new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(currentIMG);
      reader.onload = () => {
        resolve(reader.result);
      };
    });

    await myPromisse;

    setter({ ...info, file_url: currentIMG });
  };

  return (
    <FileInputLabel>
      Choose a file
      <FileInput onChange={handleFileInputChange} />
    </FileInputLabel>
  );
};

export { FileSelector };
