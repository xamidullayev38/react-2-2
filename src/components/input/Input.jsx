import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({ isDark }) {
  return (
    <InputGroup
      style={{
        maxWidth: "260px",
        backgroundColor: isDark ? "#1f2937" : "#f1f5f9",
        borderRadius: "50px"
      }}
    >
      <InputGroup.Text
        style={{
          background: "transparent",
          border: "none",
          color: "#9ca3af"
        }}
      >
        <FaSearch />
      </InputGroup.Text>

      <Form.Control
        placeholder="Search Courses"
        style={{
          background: "transparent",
          border: "none",
          color: isDark ? "#fff" : "#000",
          boxShadow: "none"
        }}
      />
    </InputGroup>
  );
}
