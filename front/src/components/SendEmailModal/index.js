import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "styled-components";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import InputSendEmail from "../InputSendEmail";

import { shade } from "polished";

export default function TransitionsModal() {
  const { colors, title } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);

  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      marginTop: "10%"
    },
    paper: {
      background: `${shade(0.1, colors.backgroundPrimary)}`,
      // border: "2px solid #000",
      color: `${colors.textPrimary}`,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    button: {
      fontSize: 12,
      fontWeight: "600",
      background: `${shade(0.2, colors.backgroundPrimary)}`,
      color: `${colors.textPrimary}`,
      padding: "16px 26px 16px 12px",
      marginRight: "40px",
      "&:hover": {
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 5px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;"
      }
    }
  }));

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className={classes.button} size="large">
        Quero ser Notificado!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Quero ser Notificado!</h2>
            <p id="transition-modal-description">
              Insira seu email, valor alvo, moeda para ser notificado e clique
              em enviar!
            </p>
            <InputSendEmail />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
