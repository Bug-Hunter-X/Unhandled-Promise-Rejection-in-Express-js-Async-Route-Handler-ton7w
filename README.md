# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  The server starts, but if the asynchronous operation fails, it crashes silently without providing any error information to the user. 

The `bug.js` file contains the problematic code. The `bugSolution.js` file demonstrates how to properly handle such errors.