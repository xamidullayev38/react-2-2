import styled from "styled-components";

const Section = styled.section`
  padding: 120px 20px;
  background: ${({ $dark }) => ($dark ? "#060e34" : "#f8fafc")};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  margin-bottom: 48px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  padding: 14px 28px;
  background: #7c3aed;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #6d28d9;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  padding: 14px 28px;
  background: #0ea5e9;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #0284c7;
    transform: translateY(-2px);
  }
`;

export default function CtaSection({ isDark }) {
  return (
    <Section $dark={isDark}>
      <Container>
        <Title $dark={isDark}>
          Join more than 1 million learners worldwide
        </Title>

        <Description $dark={isDark}>
          Effective learning starts with assessment. Learning a new skill is
          hard work—Signal makes it easier.
        </Description>

        <Buttons>
          <PrimaryButton href="#">Start Learning for Free</PrimaryButton>
          <SecondaryButton href="#">Geeks for Business</SecondaryButton>
        </Buttons>
      </Container>
    </Section>
  );
}
