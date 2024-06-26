import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
  background-color: #c6fcff;
  width: 100%;
  min-height: 70px;
  position: fixed;
  bottom: 0;
  border-radius: 15px; /* Existing border-radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Initial box-shadow */
  transition: box-shadow 0.3s ease-in-out; /* Transition for smooth shadow change */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
  }

  &:hover * {
    transform: scale(1.05); /* Scale up the items on hover */
    transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 1.2rem auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  color: #0d3b4c;
  font-size: 1.5rem;
  font-weight: bold;
  flex: 1;
  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
`;

export const WebsiteRights = styled.small`
  color: #0d3b4c;
  flex: 1;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */

  @media (max-width: 820px) {
    margin: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */

  @media (max-width: 820px) {
    width: 80%;
  }
`;

export const SocialIconLink = styled.a`
  color: #0d3b4c;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
`;
