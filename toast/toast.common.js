import { Alert, Slide, Snackbar } from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Toast = ({
  open = false,
  onClose,
  type = "success",
  autoHideDuration = 3000,
  message = "Success!",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      slots={{ transition: SlideTransition }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="standard"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
