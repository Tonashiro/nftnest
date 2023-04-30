import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 400px;
  padding: 0 10%;

  background-color: #0f0e13;
  color: white;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 20%;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;

  width: 40%;
`;

export const FooterRow = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled.li`
  a {
    text-decoration: none;
    color: white;
    opacity: 0.8;

    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const FooterSubLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5%;
  width: 100%;
`;

export const FooterLegals = styled.span`
  white-space: nowrap;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const Social = styled.div`
  opacity: 0.6;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
