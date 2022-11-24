import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../data.json'
import { Link } from 'react-router-dom';

export default function UsersList() {
  return (
    <div className='user-list' >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Developer_Name</TableCell>
            <TableCell >Skills</TableCell>
            <TableCell >Experience</TableCell>
            <TableCell >Vendor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Link className='user-name'to={`user/${row.Id}`} >{row.Developer_Name}</Link>
              </TableCell>
              <TableCell >{row.Skills}</TableCell>
              <TableCell >{row.Experience}</TableCell>
              <TableCell >{row.Vendor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}