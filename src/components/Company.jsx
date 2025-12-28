import styled from "styled-components";
import pinterest from '../assets/img/pinterest.png';
import netflix from '../assets/img/netflix.png';
import intercom from '../assets/img/intercom.png';
import stripe from '../assets/img/stripe.png';
import discord from '../assets/img/discord.png';
import airbnb from '../assets/img/airbnb.png';

const Section = styled.section`
  width: 100%;
  padding: 100px 20px;
  background: ${({ $dark }) =>
    $dark ? "#020617" : "#ffffff"};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: 600;
  color: #7c3aed;
  margin-bottom: 48px;
`;

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LogoItem = styled.div`
  opacity: ${({ $dark }) => ($dark ? 0.75 : 0.6)};
  filter: ${({ $dark }) => ($dark ? "brightness(0) invert(1)" : "none")};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  img {
    max-width: 140px;
    max-height: 40px;
    object-fit: contain;
  }
`;

export default function Company({ isDark }) {
  return (
    <Section $dark={isDark}>
      <Container>
        <Title>TRUSTED BY TOP-TIER PRODUCT COMPANIES</Title>

        <Logos>
          <LogoItem $dark={isDark}>
            <img src={stripe} alt="Stripe" />
          </LogoItem>

          <LogoItem $dark={isDark}>
            <img src={airbnb} alt="Airbnb" />
          </LogoItem>

          <LogoItem $dark={isDark}>
            <img src={discord} alt="Discord" />
          </LogoItem>

          <LogoItem $dark={isDark}>
            <img src={intercom} alt="Intercom" />
          </LogoItem>

          <LogoItem $dark={isDark}>
            <img src={pinterest} alt="Pinterest" />
          </LogoItem>

          <LogoItem $dark={isDark}>
            <img src={netflix} alt="Netflix" />
          </LogoItem>
        </Logos>
      </Container>
    </Section>
  );
}
