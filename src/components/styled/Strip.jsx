import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Strip = styled.section`
  width: 100%;
  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(180deg, #020617, #020617)"
      : "#ffffff"};
  padding: 28px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: center;
`;

const IconWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $dark }) => ($dark ? "#a16207" : "#fde68a")};
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#92400e")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
`;

export default function BenefitsStrip({ isDark }) {
  return (
    <Strip $dark={isDark}>
      <Container>
        <Item>
          <IconWrap $dark={isDark}>
            <FaCheck />
          </IconWrap>
          <Text $dark={isDark}>Shareable Certificate</Text>
        </Item>

        <Item>
          <IconWrap $dark={isDark}>
            <FaCheck />
          </IconWrap>
          <Text $dark={isDark}>Flexible Deadlines</Text>
        </Item>

        <Item>
          <IconWrap $dark={isDark}>
            <FaCheck />
          </IconWrap>
          <Text $dark={isDark}>100% Online Courses</Text>
        </Item>

        <Item>
          <IconWrap $dark={isDark}>
            <FaCheck />
          </IconWrap>
          <Text $dark={isDark}>Approx. 24 hours</Text>
        </Item>
      </Container>
    </Strip>
  );
}
