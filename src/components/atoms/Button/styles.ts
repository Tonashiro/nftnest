import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #492238 25%, #000 120%) var(--_p, 100%) / 200% no-repeat;
  border: 2px solid white;
  border-radius: 80px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;

  color: white;
  font-size: 1.125rem;
  line-height: 24px;
  letter-spacing: 0.2rem;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    --_p: 0%;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
