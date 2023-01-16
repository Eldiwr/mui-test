import { ShoppingBasket } from "@mui/icons-material"
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import BasketItem from './BasketItem';
export const Basket = (props) => {
    const {cardOpen, closeCard, order, removeFromOrder } = props
    return (
        <Drawer
            anchor="right"
            open={cardOpen}
            onClose={closeCard}
        >
            <List sx={{width: "300px"}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Basket"/>
                </ListItem>
                <Divider />
                {!order.length ? (
                    <ListItem>The basket is empty !</ListItem>
                ) : (
                    <>
                        {order.map((item) => (
                            <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                        ))}
                        <Divider />
                        <ListItem>
                            <Typography sx={{fontWeight: 700}}>
                                Full price:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                $.
                            </Typography>
                        </ListItem>
                    </>
                )}
            </List>
            
        </Drawer>
        
    )
}