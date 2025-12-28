import styled from "styled-components";
import { Badge } from "react-bootstrap";

const Card = styled.div`
  background: ${({ $dark }) => ($dark ? "#1e293b" : "#ffffff")};
  border-radius: 14px;
  padding: 28px;
  border: 1px solid ${({ $dark }) => ($dark ? "#334155" : "#e2e8f0")};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ $dark }) =>
      $dark
        ? "0 20px 40px rgba(0,0,0,0.4)"
        : "0 20px 40px rgba(0,0,0,0.1)"};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const Icon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ $dark }) => ($dark ? "#f8fafc" : "#0f172a")};
  margin-bottom: 6px;
`;

const Meta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
`;

const Description = styled.p`
  font-size: 15px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#475569")};
  line-height: 1.6;
  margin: 20px 0;
`;

const Link = styled.a`
  color: #6d5cff;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function CourseCard({
  isDark,
  icon,
  title,
  free,
  courses,
  lessons,
  duration,
  description,
}) {
  return (
    <Card $dark={isDark}>
      <Header>
        <Icon>{icon}</Icon>
        <div>
          <Title $dark={isDark}>
            {title}{" "}
            {free && (
              <Badge bg="warning" text="dark">
                Free
              </Badge>
            )}
          </Title>

          <Meta $dark={isDark}>
            <span>COURSES - {courses}</span>
            <span>{lessons} LESSONS</span>
            <span>{duration}</span>
          </Meta>
        </div>
      </Header>

      <Description $dark={isDark}>{description}</Description>

      <Link href="#">View Chapter Details +</Link>
    </Card>
  );
}
