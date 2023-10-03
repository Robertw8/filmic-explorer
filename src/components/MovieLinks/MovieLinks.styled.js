import styled from "@emotion/styled";
import { Button } from "@mui/material";

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 150px;
`;

const StyledButton = styled(Button)`
  display: flex;
  gap: 10px;
  background-color: #0f032b;
`;

export { StyledButton, LinksWrapper };
