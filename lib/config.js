"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();

var loadEnvVariable = function loadEnvVariable(envName) {
  var env = process.env[envName];

  if (env == null) {
    throw new Error("Environment variable => ".concat(envName, " is undefined."));
  }

  return env;
};

var config = {
  APP: {
    PORT: loadEnvVariable('PORT') || 8080
  } // DB: {
  //   URL: loadEnvVariable('MONGODB_URI')
  // }

};
var _default = config;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsibG9hZEVudlZhcmlhYmxlIiwiZW52TmFtZSIsImVudiIsInByb2Nlc3MiLCJFcnJvciIsImNvbmZpZyIsIkFQUCIsIlBPUlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLE9BQU8sRUFBSTtBQUNqQyxNQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0QsR0FBUixDQUFZRCxPQUFaLENBQVo7O0FBQ0EsTUFBSUMsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFDZixVQUFNLElBQUlFLEtBQUosbUNBQXFDSCxPQUFyQyxvQkFBTjtBQUNEOztBQUNELFNBQU9DLEdBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1HLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxHQUFHLEVBQUU7QUFDSEMsSUFBQUEsSUFBSSxFQUFFUCxlQUFlLENBQUMsTUFBRCxDQUFmLElBQTJCO0FBRDlCLEdBRFEsQ0FJYjtBQUNBO0FBQ0E7O0FBTmEsQ0FBZjtlQVNlSyxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIGFzIGRvdGVudkNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG5cbmRvdGVudkNvbmZpZygpO1xuXG5jb25zdCBsb2FkRW52VmFyaWFibGUgPSBlbnZOYW1lID0+IHtcbiAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnZbZW52TmFtZV07XG4gIGlmIChlbnYgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRW52aXJvbm1lbnQgdmFyaWFibGUgPT4gJHtlbnZOYW1lfSBpcyB1bmRlZmluZWQuYCk7XG4gIH1cbiAgcmV0dXJuIGVudjtcbn07XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgQVBQOiB7XG4gICAgUE9SVDogbG9hZEVudlZhcmlhYmxlKCdQT1JUJykgfHwgODA4MFxuICB9LFxuICAvLyBEQjoge1xuICAvLyAgIFVSTDogbG9hZEVudlZhcmlhYmxlKCdNT05HT0RCX1VSSScpXG4gIC8vIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==