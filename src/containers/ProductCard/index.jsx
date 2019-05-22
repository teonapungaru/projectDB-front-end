import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";

import '../ProductCard/productCard.sass'

const styles = {
    card: {
        maxWidth: 345,
        margin: 20,
    },
    media: {
        height: 140,
    }
};

class MediaCard extends React.Component {

    // sendPurchase = () => {
    //     try {
    //         const response = await makeRequest('purchase');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={this.props.classes.media}
                        image={this.props.itemDetails.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.itemTitle}
                        </Typography>
                        <Typography component="div">
                            {Object.entries(this.props.itemDetails).map((item, key) => item[0]!=='image'?
                                <TextField
                                    disabled
                                    label={item[0]}
                                    value={item[1]}
                                    margin="normal"
                                    key={key}
                                />:null
                            )}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button size="small" color="default" onClick={this.sendPurchase}>
                        Add to cart
                    </Button>
                    <Button size="small" color="default">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);