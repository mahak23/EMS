/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 
//   */
// const { createLogger, format, transports } = require("winston");
// const { combine, label, printf } = format;

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} ${level}: ${message}`;
// });

// let config = {
//   level: "debug",
//   format: combine(
//     format.splat(),
//     format.simple(),
//     format.colorize({ all: true }),
//     format.timestamp(),
//     format.align(),
//     //label({ label: name }),
//     myFormat
//   ),
//   transports: [
//     new transports.File({ filename: "combined.log" }),
//     // new transports.File({ filename: 'error.log', level: 'error' }),
//     new transports.Console(),
//   ],
// };
// let logger = createLogger(config);

// var winston = require("winston");
// var customLogger = new winston.createLogger();

// // A console transport logging debug and above.
// customLogger.add(new winston.transports.Console(), {
//   level: "debug",
//   colorize: true,
// });

// // A file based transport logging only errors formatted as json.
// customLogger.add(
//   new winston.transports.File({
//     level: "error",
//     filename: "./error.log",
//     json: true,
//     colorize: true,
//   })
// );

module.exports.log = {
  // Pass in our custom logger, and pass all log levels through.
  // custom: logger,
  // level: "silly",
  // // Disable captain's log so it doesn't prefix or stringify our meta data.
  // inspect: false,
  /***************************************************************************
   *                                                                          *
   * Valid `level` configs: i.e. the minimum log level to capture with        *
   * sails.log.*()                                                            *
   *                                                                          *
   * The order of precedence for log levels from lowest to highest is:        *
   * silly, verbose, info, debug, warn, error                                 *
   *                                                                          *
   * You may also set the level to "silent" to suppress all logs.             *
   *                                                                          *
   ***************************************************************************/
  // level: 'info'
};
