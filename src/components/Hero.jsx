import styled from "styled-components";
import SignupCard from "./styled/SignUpCard";
import Strip from "./styled/Strip";
const HeroWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${({ $dark }) => ($dark ? "#020617" : "#ffffff")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 100px;
`;

const HeroGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
`;

const Title = styled.h1`
  font-size: 52px;
  font-weight: 700;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  line-height: 1.2;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 17px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  max-width: 520px;
  margin-bottom: 32px;
`;

const MetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;

const MetaItem = styled.div`
  font-size: 15px;
  color: ${({ $dark }) => ($dark ? "#cbd5f5" : "#475569")};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PreviewButton = styled.button`
  background: ${({ $dark }) =>
    $dark ? "linear-gradient(180deg,#22c55e,#16a34a)" : "#3ba55d"};
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
`;

export default function HeroSection({ isDark }) {
  return (
    <>
      <HeroWrapper $dark={isDark}>
        <HeroGrid>
          <div>
            <Title $dark={isDark}>
              Become a Vanilla <br /> JavaScript Developer
            </Title>

            <Description $dark={isDark}>
              In this tutorial, we are going to learn about JavaScript (Vanilla
              JS) – for building incredible, powerful JavaScript applications.
            </Description>

            <MetaList>
              <MetaItem $dark={isDark}>⏱ 4 Hours</MetaItem>
              <MetaItem $dark={isDark}>🎥 12 Videos</MetaItem>
              <MetaItem $dark={isDark}>👥 10,234+ Enrolled</MetaItem>
            </MetaList>

            <PreviewButton $dark={isDark}>Watch Preview</PreviewButton>
          </div>

          <SignupCard isDark={isDark} />
        </HeroGrid>
      </HeroWrapper>
      <Strip isDark={isDark} />
    </>
  );
}
