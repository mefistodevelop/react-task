import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTerminals } from '../../state/TerminalsState';

const useStyles = makeStyles({
  cell: {
    fontSize: 15,
    maxWidth: 100,
  },
});

export function TerminalsTable({ data }) {
  const rows = data;
  const classes = useStyles();
  const { removeTerminal } = useTerminals();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="список терминалов">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>ID</TableCell>
            <TableCell className={classes.cell} align="center">
              Название
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Описание
            </TableCell>
            <TableCell className={classes.cell} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.cell} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {row.name}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {row.description}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                <button
                  className="table__button"
                  onClick={() => removeTerminal(row.id)}
                  title="Удалить"
                  aria-label="удалить теминал"
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
