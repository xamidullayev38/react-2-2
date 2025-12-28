import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const Section = styled.section`
  padding: 120px 20px;
  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(180deg, #020617 0%, #020617 100%)"
      : "#ffffff"};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Badge = styled.span`
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 600;
  color: #7c3aed;
`;

const Title = styled.h2`
  font-size: 44px;
  font-weight: 700;
  margin: 16px 0;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  margin-bottom: 64px;
`;

const StyledAccordion = styled(Accordion)`
  text-align: left;

  .accordion-item {
    background: transparent;
    border: none;
    border-bottom: 1px solid
      ${({ $dark }) =>
        $dark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)"};
  }

  .accordion-button {
    background: transparent;
    color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
    font-size: 18px;
    font-weight: 600;
    padding: 24px 0;
    box-shadow: none;
  }

  .accordion-button::after {
    background-image: none;
    content: "+";
    font-size: 24px;
    color: #7c3aed;
    transform: none;
  }

  .accordion-button:not(.collapsed)::after {
    content: "−";
  }

  .accordion-button:not(.collapsed) {
    background: transparent;
    color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  }

  .accordion-body {
    color: ${({ $dark }) => ($dark ? "#cbd5f5" : "#475569")};
    padding: 0 0 24px 0;
    line-height: 1.7;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 64px;
`;

const HelpButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  border-radius: 10px;
  border: 1px solid #7c3aed;
  color: #7c3aed;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #7c3aed;
    color: #fff;
  }
`;

export default function FaqComponent({ isDark }) {
  return (
    <Section $dark={isDark}>
      <Container>
        <Badge>NEED TO KNOW</Badge>
        <Title $dark={isDark}>Frequently Asked Questions.</Title>
        <Description $dark={isDark}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non
          accumsan in, tempor dictum neque.
        </Description>

        <StyledAccordion defaultActiveKey="0" $dark={isDark}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the cost of an online course
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What do I need to take a course?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What do I receive for taking this course?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What will get if I subscribe to this Certificate?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
              sint occaecat cupidatat non proident.
            </Accordion.Body>
          </Accordion.Item>
        </StyledAccordion>

        <ButtonWrap>
          <HelpButton href="#">
            More questions? Visit the Learner Help Center.
          </HelpButton>
        </ButtonWrap>
      </Container>
    </Section>
  );
}
