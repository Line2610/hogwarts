export default (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  let error = err.error || "Internal Server Error";
  const message = err.message || "Something went wrong";

  if (statusCode === 404) {
    error = "Not Found";
  } else if (err.statusCode === 400) {
    error = "Bad Request";
  }

  res.status(statusCode).json(
    {
      message: message,
      error: error,
      statusCode: statusCode,
    }
  );
};
