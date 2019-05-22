import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.onClose();
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.open !== prevState.open) {
            return { someState: nextProps.open };
        }
        return null;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            this.setState({ open: this.props.open });
        }
    }

    handleChange = prop => event => {
        this.setState({
          [prop]: event.target.value
        });
      };

    render() {
        console.log(this.state)
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add</DialogTitle>
                    <DialogContent>
                        {this.props.fields.map((item, key) =>
                            <TextField
                                margin="dense"
                                id={item}
                                label={item}
                                type="text"
                                fullWidth
                                key={key}
                                value={this.state.item}
                                onChange={this.handleChange(`${item}`)}
                            />
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Cancel
            </Button>
                        <Button onClick={this.submit}>
                            Add
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}