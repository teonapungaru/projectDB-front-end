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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  margin: {
    margin: theme.spacing.unit/2,
  },
});

const header = ['First Name', 'Last Name', 'City', 'Street', 'Phone No'];

class SimpleTable extends React.Component {

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow className='tableRow'>
              {header.map((item, key) =>
                <TableCell key={key}>{item}</TableCell>
              )}
              <TableCell align="right">
                <Fab size="small" color="secondary" aria-label="Add" className={this.props.classes.margin}>
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
                  <Button variant="outlined" size="small" className={this.props.classes.margin}>
                    Edit Phone
                </Button>
                  <IconButton aria-label="Delete" className={this.props.classes.margin}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);