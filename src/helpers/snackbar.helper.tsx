/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { Alert, Grid, IconButton, Snackbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const errorHandlingToast = (
  msg: string | undefined,
  variant: 'success' | 'error' | 'warning' | 'info' | undefined
) => {
  const Display = withSnackbar((props: any) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event: any, reason: any) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Alert
          onClose={handleClose as any}
          severity={variant}
          color={variant}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    );
  });

  const mountPoint = document.getElementById('error-handler-snackbar');
  ReactDOM.render(
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      <Display message={msg} variant={variant} />
    </SnackbarProvider>,
    mountPoint
  );
};

const notificationToast = (title: string | undefined, description: string | undefined) => {
  const Display = withSnackbar((props: any) => {
    const [open, setOpen] = React.useState(true);


    const handleClose = (event: any, reason: any) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    return (
      <Snackbar
        key={props.title}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          marginTop: 6,
          maxWidth: 50,
        }}
        message={
          <Grid container direction='row' justifyContent='flex-start' alignItems='center' sx={{}}>
            <Grid item xs={11}>
              <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
                <Grid item xs={12}>
                  <Typography sx={{ color: 'primary.main' }} variant='h6'>
                    {props.title}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  {props.description}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleClose as any}>
                <CloseIcon sx={{ color: '#F44336' }} />
              </IconButton>
            </Grid>
          </Grid>
        }
      />
    );
  });

  const mountPoint = document.getElementById('notification-snackbar');
  ReactDOM.render(
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
      <Display title={title} description={description} />
    </SnackbarProvider>,
    mountPoint
  );
};

export const showSuccessSnackbarMessage = (msg: string) => {
  errorHandlingToast(msg, 'success');
};

export const showErrorSnackbarMessage = (msg: string) => {
  errorHandlingToast(msg, 'error');
};

export const showWarningSnackbarMessage = (msg: string) => {
  errorHandlingToast(msg, 'warning');
};

export const showNotification = (title: string | undefined, description: string | undefined) => {
  notificationToast(title, description);
};
