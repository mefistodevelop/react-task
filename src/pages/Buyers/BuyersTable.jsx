import React from 'react';
import MaterialTable from 'material-table';
import { TablePagination } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useBuyers } from '../../state/BuyersState';

export function BuyersTable() {
  const { buyers } = useBuyers();

  return (
    <MaterialTable
      title=""
      columns={[
        {
          title: 'ID',
          field: 'id',
          type: 'numeric',
          filtering: false,
          sorting: false,
          render: (rowData) => (
            <Link className="buyers__table-link" to={`/buyers/${rowData.id}`}>
              {rowData.id}
            </Link>
          ),
        },
        { title: 'Имя покупателя', field: 'name', sorting: false },
        {
          title: 'Средний чек',
          field: 'averageCheck',
          type: 'numeric',
          filtering: false,
        },
        {
          title: 'Количество покупок',
          field: 'purchasesAmount',
          type: 'numeric',
          filtering: false,
        },
        {
          title: 'Общая выручка',
          field: 'total',
          type: 'numeric',
          filtering: false,
        },
      ]}
      data={buyers}
      options={{
        search: false,
        filtering: true,
        sorting: true,
        toolbar: false,
        headerStyle: {
          fontSize: 15,
          textAlign: 'center',
        },
        rowStyle: {
          fontSize: 15,
        },
        cellStyle: {
          textAlign: 'center',
        },
      }}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} из {count}',
          labelRowsSelect: 'строк',
        },
      }}
      components={{
        Pagination: (props) => (
          <TablePagination
            {...props}
            rowsPerPageOptions={[5, 10, 15]}
            className="buyers__table-toolbarFont"
          />
        ),
      }}
    />
  );
}
