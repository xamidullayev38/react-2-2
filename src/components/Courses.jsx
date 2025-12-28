import styled from "styled-components";
import CourseCard from "./styled/CourseCard";

const Section = styled.section`
  width: 100%;
  padding: 120px 20px;
  background: ${({ $dark }) =>
    $dark ? "#060e34" : "#e9eff5"};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 600;
  color: ${({ $dark }) => ($dark ? "#7c3aed" : "#6d28d9")};
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  margin-bottom: 20px;
`;

const Description = styled.p`
  max-width: 720px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default function Courses({ isDark }) {
  return (
    <Section $dark={isDark}>
      {/* HEADER */}
      <Header>
        <Subtitle $dark={isDark}>COURSE DESCRIPTION</Subtitle>
        <Title $dark={isDark}>What will you learn?</Title>
        <Description $dark={isDark}>
          Vanilla JS is a fast, lightweight, cross-platform framework for building
          incredible, powerful JavaScript applications.
        </Description>
      </Header>

      {/* COURSES */}
      <Grid>
        <CourseCard
          isDark={isDark}
          icon="⬢"
          title="Introduction to JavaScript"
          free
          courses={1}
          lessons={6}
          duration="1 HOUR 12 MIN"
          description="In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare"
        />

        <CourseCard
          isDark={isDark}
          icon="▲"
          title="JavaScript Beginning"
          courses={2}
          lessons={4}
          duration="32 MIN"
          description="Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada."
        />

        <CourseCard
          isDark={isDark}
          icon="⬢"
          title="Variables and Constants"
          courses={3}
          lessons={8}
          duration="10 MIN"
          description="Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs."
        />

        <CourseCard
          isDark={isDark}
          icon="▲"
          title="Types and Operators"
          courses={4}
          lessons={10}
          duration="32 MIN"
          description="In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl."
        />
      </Grid>
    </Section>
  );
}
