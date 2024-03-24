const SERVER_ERROR_CODES = [
  {
    code: 1,
    message: "",
  },
];
const defaultErrorMessage = "Undetected Error!";
export const getErrorMessageByCode = (code: number) => {
  const error = SERVER_ERROR_CODES.find((e) => e.code == code);
  let errorMessage = defaultErrorMessage;
  if (error != null) {
    errorMessage = error.message;
  }
  return errorMessage;
};
