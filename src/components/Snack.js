import { Alert, Snackbar } from "@mui/material"

export const Snack = ({isOpen, handleClose}) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3500}
        >
            <Alert
                severity="success"
            >The product has been added to the basket!</Alert>
        </Snackbar>
    )
}