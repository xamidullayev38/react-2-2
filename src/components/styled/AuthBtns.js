import styled from "styled-components";

export const AuthButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SignInButton = styled.button`
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid
    ${({ $dark }) => ($dark ? "transparent" : "#e2e8f0")};

  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(180deg, #0f172a, #020617)"
      : "#ffffff"};

  color: ${({ $dark }) => ($dark ? "#ffffff" : "#0f172a")};

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const SignUpButton = styled.button`
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;

  background: linear-gradient(180deg, #7c3aed, #6d28d9);
  color: #ffffff;


  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;
