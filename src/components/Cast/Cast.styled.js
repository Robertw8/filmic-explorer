import styled from "@emotion/styled";
import { Table } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const StyledTableContainer = styled(TableContainer)`
  max-width: 70%;
  margin: 50px auto 0 auto;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledTable = styled(Table)`
  background-color: #c2a8fa;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #4d0dd9;

  th {
    color: #fff;
  }
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #0f032b;
  }
`;

const StyledTableCell = styled(TableCell)`
  color: #f9f9f9;
  font-size: 18px;
`;

const StyledTableImage = styled.img`
  width: 100px;
  height: 100px;
`;

export {
  StyledTableContainer,
  StyledTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableCell,
  StyledTableImage,
};
