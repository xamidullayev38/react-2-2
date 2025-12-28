import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 120px 100px;
  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(180deg, #020617 0%, #020617 100%)"
      : "#ffffff"};
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Subtitle = styled.span`
  display: inline-block;
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 600;
  color: #7c3aed;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  margin-bottom: 24px;

  span {
    color: #7c3aed;
  }
`;

const Description = styled.p`
  max-width: 520px;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  margin-bottom: 40px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ $dark }) => ($dark ? "#1e293b" : "#e2e8f0")};
  margin-bottom: 32px;
`;

const Stats = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  }

  span {
    font-size: 14px;
    color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Info({ isDark, children }) {
  return (
    <Section $dark={isDark}>
      <Grid>
        <div>
          <Subtitle>YOUR INSTRUCTOR</Subtitle>

          <Title $dark={isDark}>
            Hi, I’m <span>James Davies</span>, <br />
            I will be taking you through lessons.
          </Title>

          <Description $dark={isDark}>
            Create beautiful website with this Geeks UI template.
            Get started building a site today.
          </Description>

          <Divider $dark={isDark} />

          <Stats>
            <StatItem $dark={isDark}>
              <h3>45</h3>
              <span>Lessons</span>
            </StatItem>

            <StatItem $dark={isDark}>
              <h3>10,500+</h3>
              <span>Students</span>
            </StatItem>

            <StatItem $dark={isDark}>
              <h3>12+</h3>
              <span>Learning Hours</span>
            </StatItem>
          </Stats>
        </div>

        <ImageWrapper>
          {children}
        </ImageWrapper>
      </Grid>
    </Section>
  );
}
