import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder,poster } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",}}
            >
                <CardMedia
                    image={poster}
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">{name}</Typography>
                    <Typography variant='body1'>Price: {price} $.</Typography>   
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;