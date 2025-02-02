// middlewares/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err.stack);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack, // Show stack trace only in development
  });
};

module.exports = errorHandler;
