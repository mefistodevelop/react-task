import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  cell: {
    fontSize: 15,
  },
});

export function TerminalsTable({ data }) {
  const rows = data;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>ID</TableCell>
            <TableCell className={classes.cell} align="right">
              Название
            </TableCell>
            <TableCell className={classes.cell} align="right">
              Описание
            </TableCell>
            <TableCell className={classes.cell} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.cell} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className={classes.cell} align="right">
                {row.name}
              </TableCell>
              <TableCell className={classes.cell} align="right">
                {row.description}
              </TableCell>
              <TableCell className={classes.cell} align="right">
                <button
                  className="table__button"
                  onClick={() => {
                    alert(row.id);
                  }}
                >
                  &times;
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
