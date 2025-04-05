import styled from "styled-components";

const StyledButton = styled.button<{ styleType: "outline" | "default" }>`
  width: max-content;
  height: 30px;
  padding: 20px;
  border-radius: 20px;
  background: ${(props) =>
    props.styleType === "outline" ? "transparent" : props.theme.colors.primary};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.styleType === "outline" ? props.theme.colors.primary : "transparent"};
  color: ${(props) =>
    props.styleType === "outline"
      ? props.theme.colors.secondary
      : props.theme.colors.white};
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(66, 104, 75, 0.3);
  transition: all 1s ease-in-out;
`;

export { StyledButton };
