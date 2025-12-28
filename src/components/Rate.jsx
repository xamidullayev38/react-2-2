import styled from "styled-components";
import ava from "../assets/img/ava.png";
import ava2 from "../assets/img/ava2.png";
const Section = styled.section`
  width: 100%;
  padding: 120px 20px;
  background: ${({ $dark }) =>
    $dark ? "linear-gradient(180deg, #060e34 0%, #060e34 100%)" : "#f8fafc"};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 600;
  color: #7c3aed;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 44px;
  font-weight: 700;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  margin-bottom: 64px;
`;

const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 32px;
`;

/* CARD */
const Card = styled.div`
  background: ${({ $dark }) => ($dark ? "#020b1f" : "#ffffff")};
  border-radius: 16px;

  border: 1px solid
    ${({ $dark }) =>
      $dark ? "rgba(255, 255, 255, 0.06)" : "rgba(15, 23, 42, 0.08)"};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow:hidden;
`;

/* BODY */
const Body = styled.div`
  padding: 48px 40px 72px;
  text-align: center;
  position: relative;
  background: ${({ $dark }) => ($dark ? "#020617" : "#ffffff")};
`;

const Quote = styled.div`
  font-size: 48px;
  color: ${({ color }) => color};
  opacity: 0.25;
  margin-bottom: 24px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${({ $dark }) => ($dark ? "#cbd5f5" : "#0f172a")};
`;

/* FOOTER */
const Footer = styled.div`
  background: ${({ color }) => color};
  padding: 56px 24px 32px;
  text-align: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 4px solid #fff;
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
`;

const Name = styled.h4`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Role = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
`;

export default function Testimonials({ isDark }) {
  return (
    <Section $dark={isDark}>
      <Container>
        <Subtitle>TESTIMONIALS</Subtitle>

        <Title $dark={isDark}>What our learners are saying</Title>

        <Description $dark={isDark}>
          12+ million people are already learning on Geeks
        </Description>

        <Cards>
          {/* CARD 1 */}
          <Card $dark={isDark}>
            <Body $dark={isDark}>
              <Quote color="#7c3aed">“</Quote>
              <Text $dark={isDark}>
                The generated lorem Ipsum is therefore always free from
                repetition, injected humour, or words etc generate lorem Ipsum
                which looks racteristic reasonable.
              </Text>
            </Body>

            <Footer color="#7c5cff">
              <Avatar src={ava} />
              <Name>Barry Watson</Name>
              <Role>Web Developer, UK</Role>
            </Footer>
          </Card>

          {/* CARD 2 */}
          <Card $dark={isDark}>
            <Body $dark={isDark}>
              <Quote color="#22d3ee">“</Quote>
              <Text $dark={isDark}>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed
                vel felis imperdiet, lacinia metus malesuada diamamus rutrum
                turpis leo.
              </Text>
            </Body>

            <Footer color="#0ea5e9">
              <Avatar src={ava2} />
              <Name>Linda Shenoy</Name>
              <Role>Developer and Bootcamp Instructor</Role>
            </Footer>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
}
