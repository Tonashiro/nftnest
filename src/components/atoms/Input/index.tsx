import { IInput } from "@atoms/Input/types";
import React from "react";
import { StyledInput } from "./styles";

const Input: React.FC<IInput> = ({ name, placeholder, setter }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setter((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <StyledInput>
      <input placeholder={placeholder} name={name} id={name} onChange={changeHandler} />
    </StyledInput>
  );
};

export { Input };
