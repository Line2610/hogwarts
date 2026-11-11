export default (err, _request, response, _next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  let error = "Internal Server Error";
  const message = err.message || "Something went wrong";

  if (statusCode === 404) {
    error = "Not Found";
  } else if (statusCode === 400) {
    error = "Bad Request";
  }

  response.status(statusCode).json({ message, error, statusCode });
};
