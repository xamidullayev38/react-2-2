import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchWrapper = styled.div`
  width: 260px;
  height: 40px;
  border-radius: 6px;
  background-color: ${({ $dark }) => ($dark ? "#0b1220" : "#f1f5f9")};
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 10px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 14px;
  color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
`;

const SearchInputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#000000")};

  ::placeholder {
    color: ${({ $dark }) => ($dark ? "#94a3b8" : "#64748b")};
  }
`;

export default function SearchInput({ isDark }) {
  return (
    <SearchWrapper $dark={isDark}>
      <SearchIcon $dark={isDark} />
      <SearchInputField
        $dark={isDark}
        placeholder="Search Courses"
      />
    </SearchWrapper>
  );
}
