/* eslint-disable @typescript-eslint/dot-notation */
import axios from 'axios';
import { SERVER_BASE_URL } from '../config/API';
import { getErrorMessageByCode } from '../config/ServerErrors';
import { showErrorSnackbarMessage, showWarningSnackbarMessage } from '../helpers/snackbar.helper';

const axiosInstance = axios.create();
export const baseUrl = SERVER_BASE_URL;

// for error handling
axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.log('error.message\n', error.message);
    console.log('error.response\n', error.response);
    const ERROR_CODE = error?.response?.data?.error?.server_code;
    if (error.message == 'Network Error') {
      showWarningSnackbarMessage('Network Error!');
    } else {
      const message = getErrorMessageByCode(ERROR_CODE);
      showErrorSnackbarMessage(message);
      if (ERROR_CODE === 7) {
        window.location.href = '/login';
      }
    }
    throw error;
  }
);

export default axiosInstance;
