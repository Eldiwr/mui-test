import { ShoppingBasket } from "@mui/icons-material"
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"

export const Header = ({handleCard, orderLength}) => {
    return (
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    My Shop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCard}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLength}
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}