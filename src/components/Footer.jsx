import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterSection = styled.footer`
  padding: 100px 20px 60px;
  background: ${({ $dark }) =>
    $dark ? "linear-gradient(180deg, #020617 0%, #020617 100%)" : "#f8fafc"};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div``;

const Logo = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  font-weight: 700;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  margin-bottom: 16px;
`;

const BrandText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  margin-bottom: 24px;
`;

const Socials = styled.div`
  display: flex;
  gap: 14px;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.06)"};
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  transition: all 0.3s ease;

  &:hover {
    background: #7c3aed;
    color: #fff;
  }
`;

const Column = styled.div``;

const Title = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  margin-bottom: 16px;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #7c3aed;
  }
`;

const ContactText = styled.p`
  font-size: 15px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  color: #7c3aed;
`;

const Stores = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;

  img {
    height: 42px;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid
    ${({ $dark }) => ($dark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)")};
  text-align: center;
  font-size: 14px;
  color: ${({ $dark }) => ($dark ? "#64748b" : "#94a3b8")};
`;

export default function Footer({ isDark }) {
  return (
    <FooterSection $dark={isDark}>
      <Container>
        <Grid>
          {/* BRAND */}
          <Brand>
            <Logo $dark={isDark}> Geeks</Logo>
            <BrandText $dark={isDark}>
              Geek is feature-rich components and beautifully Bootstrap UI Kit
              for developers, built with bootstrap responsive framework.
            </BrandText>

            <Socials>
              <SocialIcon $dark={isDark} href="#">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon $dark={isDark} href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon $dark={isDark} href="#">
                <FaInstagram />
              </SocialIcon>
            </Socials>
          </Brand>

          {/* COMPANY */}
          <Column>
            <Title $dark={isDark}>Company</Title>
            <Link $dark={isDark} href="#">
              About
            </Link>
            <Link $dark={isDark} href="#">
              Pricing
            </Link>
            <Link $dark={isDark} href="#">
              Blog
            </Link>
            <Link $dark={isDark} href="#">
              Careers
            </Link>
            <Link $dark={isDark} href="#">
              Contact
            </Link>
          </Column>

          <Column>
            <Title $dark={isDark}>Support</Title>
            <Link $dark={isDark} href="#">
              Help and Support
            </Link>
            <Link $dark={isDark} href="#">
              Become Instructor
            </Link>
            <Link $dark={isDark} href="#">
              Get the app
            </Link>
            <Link $dark={isDark} href="#">
              FAQ’s
            </Link>
            <Link $dark={isDark} href="#">
              Tutorial
            </Link>
          </Column>

          <Column>
            <Title $dark={isDark}>Get in touch</Title>
            <ContactText $dark={isDark}>
              339 McDermott Points Hettingerhaven, NV 15283
            </ContactText>
            <ContactText $dark={isDark}>
              Email: <Highlight>support@geeksui.com</Highlight>
            </ContactText>
            <ContactText $dark={isDark}>
              Phone: <strong>(000) 123 456 789</strong>
            </ContactText>

            <Stores>
              <img
                width={"125px"}
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
              <img
                width={"125px"}
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </Stores>
          </Column>
        </Grid>

        <Bottom $dark={isDark}>
          © {new Date().getFullYear()} Geeks. All rights reserved.
        </Bottom>
      </Container>
    </FooterSection>
  );
}
