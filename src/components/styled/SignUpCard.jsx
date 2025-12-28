import styled from "styled-components";

const Card = styled.div`
  background: ${({ $dark }) => ($dark ? "#060e34" : "#ffffff")};
  border-radius: 12px;
  padding: 32px;
  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 20px 40px rgba(0,0,0,0.6)"
      : "0 20px 40px rgba(15,23,42,0.12)"};
  border: ${({ $dark }) => ($dark ? "1px solid #1e293b" : "none")};
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const SocialBtn = styled.button`
  flex: 1;
  border: none;
  background: ${({ $dark }) => ($dark ? "#020617" : "#f1f5f9")};
  color: ${({ $dark }) => ($dark ? "#e5e7eb" : "#0f172a")};
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  border: ${({ $dark }) => ($dark ? "1px solid #1e293b" : "none")};
`;

const Divider = styled.div`
  text-align: center;
  font-size: 13px;
  color: #94a3b8;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({ $dark }) => ($dark ? "#1e293b" : "#cbd5f5")};
  background: ${({ $dark }) => ($dark ? "#020617" : "#ffffff")};
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#000000")};
  margin-bottom: 14px;
  font-size: 14px;

  ::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #7c3aed;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  background: linear-gradient(180deg, #7c3aed, #6d28d9);
  color: white;
  border: none;
  padding: 12px;
  font-size: 15px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Terms = styled.p`
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;

  span {
    color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
    font-weight: 500;
  }
`;

export default function SignupCard({ isDark }) {
  return (
    <Card $dark={isDark}>
      <Title $dark={isDark}>Create Free Account</Title>

      <SocialRow>
        <SocialBtn $dark={isDark}> Google</SocialBtn>
        <SocialBtn $dark={isDark}> Twitter</SocialBtn>
        <SocialBtn $dark={isDark}> Facebook</SocialBtn>
      </SocialRow>

      <Divider>OR</Divider>

      <Input $dark={isDark} placeholder="Email" />
      <Input $dark={isDark} placeholder="Password" type="password" />

      <SubmitBtn>Start Courses for Free</SubmitBtn>

      <Terms $dark={isDark}>
        By continuing you accept the <span>Terms of Use</span>,{" "}
        <span>Privacy Policy</span>, and <span>Data Policy</span>
      </Terms>
    </Card>
  );
}
