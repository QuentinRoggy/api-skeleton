
const bunyan = require("bunyan");

const streams = [];

if (["production"].includes(process.env.NODE_ENV)) {
  streams.push({
    level: "error",
    path: "./log/error.log",
    type: "rotating-file",
    period: "1d",
    count: "3"
  });

} else if (!["test"].includes(process.env.NODE_ENV)) {
  streams.push({
    level: "error",
    stream: process.stdout
  });
}

const logger = bunyan.createLogger({
  name: "api",
  streams
});

module.exports = logger;