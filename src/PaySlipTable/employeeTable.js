import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './employeeTable.css';
import { NavLink } from 'react-router-dom';


const employeeTable = (props) => {
    return (
        <div>
        <BootstrapTable data={props.data}>
          <TableHeaderColumn isKey dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='payperiod'>
            Pay-Period
          </TableHeaderColumn>
          <TableHeaderColumn dataField='grossIncome'>
            Gross-income
          </TableHeaderColumn>
          <TableHeaderColumn dataField='incomeTax'>
            Income-tax
          </TableHeaderColumn>
          <TableHeaderColumn dataField='netIncome'>
            Net-income
          </TableHeaderColumn>
          <TableHeaderColumn dataField='superAmount'>
            Super-amount
          </TableHeaderColumn>
        </BootstrapTable>

            <NavLink to="/" activeStyle={{
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: 'brown',
                        padding: '80px',
                        margin: '100px'
            }}>Back </NavLink>

      </div>

    );
}

export default employeeTable;