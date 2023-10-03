import styled from "@emotion/styled";
import { Card } from "@mui/material";

const ImageThumb = styled(Card)`
  border-radius: 10px;
  padding: 10px;
  background-color: #4d0dd9;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Image = styled.img`
  border-radius: 10px;
`;

export { ImageThumb, Image };
