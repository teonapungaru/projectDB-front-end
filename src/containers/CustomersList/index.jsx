import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import FormDialog from '../Dialog';
import EditDialog from '../Dialog/EditDetails.jsx'
import makeRequest from '../../service/dataService';

const styles = theme => ({
  root: {
    width: 1500,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  margin: {
    margin: theme.spacing.unit / 2,
  },
});

const header = ['firstName', 'lastName', 'city', 'street', 'phoneNo'];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openDialog = () => {
    this.setState({ openDialog: true, openEditDialog: true })
  }

  openEditDialog = () => {
    this.setState({ openEditDialog: true })
  }

  handleClose = () => {
    this.setState({ openDialog: false });
  }

  deleteContact = async name => {
    let id = this.props.customers.filter(item => item.lastName === name)[0].id;
    console.log(id);
    try {
      const response = await makeRequest(`deleteCustomer`, id );
      const response2 = await makeRequest(`deleteContactDetails`, id );
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.props.details)
    return (
      <div>
        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow className='tableRow'>
                {header.map((item, key) =>
                  <TableCell key={key}>{item}</TableCell>
                )}
                <TableCell align="right">
                  <Fab size="small" color="secondary" aria-label="Add" className={this.props.classes.margin} onClick={this.openDialog}>
                    <AddIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.details.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {row.customer.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.customer.lastName}
                  </TableCell>
                  <TableCell align="left">{row.city}</TableCell>
                  <TableCell align="left">{row.street}</TableCell>
                  <TableCell align="left">{row.phoneNo}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" size="small" className={this.props.classes.margin} onClick={this.openEditDialog}>
                      Edit Phone
                </Button>
                    <IconButton aria-label="Delete" className={this.props.classes.margin} onClick={() => this.deleteContact(row.customer.lastName)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <FormDialog
          onClose={this.handleClose}
          open={this.state.openDialog}
          fields={header}
          title='customer'
        />
        <EditDialog 
          onClose={this.handleClose}
          open={this.state.openEditDialog}
          editField={this.props.details.phoneNo}
          title='editDetails'
        />
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);