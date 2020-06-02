import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  DialogContentText,
  makeStyles,
} from "@material-ui/core";

interface IDTProps {
  title: string;
  content: string;
  highlight: string[];
  open: boolean;
  booking: string;
  click(state: boolean): void;
}

const useStyles = makeStyles({
  highlight: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "1rem",
    color: "#404040",
  },
});

const DialogTour = ({
  title,
  content,
  highlight,
  open,
  click,
  booking,
}: IDTProps) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      fullWidth={true}
      onClose={() => click(false)}
      maxWidth="md"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {highlight && (
          <DialogContentText>
            <ul className={classes.highlight}>
              {highlight.map((item) => (
                <li key={item}>
                  <Typography variant="body2">{item}</Typography>
                </li>
              ))}
            </ul>
          </DialogContentText>
        )}
        <DialogContentText dangerouslySetInnerHTML={{ __html: content }} />
      </DialogContent>
      <DialogActions>
        <Button href={booking} color="primary" target="_blank">
          Booking
        </Button>
        <Button onClick={() => click(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogTour;
