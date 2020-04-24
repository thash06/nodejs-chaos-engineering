"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.apiLimiter = void 0;

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiLimiter = (0, _expressRateLimit["default"])({
  windowMs: 60 * 1000,
  // 1 min in milliseconds
  max: 5,
  message: 'You have exceeded the 5 requests in 1 min limit!',
  headers: true
});
exports.apiLimiter = apiLimiter;
var _default = apiLimiter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9yYXRlTGltaXRlci5qcyJdLCJuYW1lcyI6WyJhcGlMaW1pdGVyIiwid2luZG93TXMiLCJtYXgiLCJtZXNzYWdlIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHLGtDQUFVO0FBQ2xDQyxFQUFBQSxRQUFRLEVBQUUsS0FBSyxJQURtQjtBQUNiO0FBQ3JCQyxFQUFBQSxHQUFHLEVBQUUsQ0FGNkI7QUFHbENDLEVBQUFBLE9BQU8sRUFBRSxrREFIeUI7QUFJbENDLEVBQUFBLE9BQU8sRUFBRTtBQUp5QixDQUFWLENBQW5COztlQU9RSixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJhdGVMaW1pdCBmcm9tICdleHByZXNzLXJhdGUtbGltaXQnO1xuXG5leHBvcnQgY29uc3QgYXBpTGltaXRlciA9IHJhdGVMaW1pdCh7XG4gIHdpbmRvd01zOiA2MCAqIDEwMDAsIC8vIDEgbWluIGluIG1pbGxpc2Vjb25kc1xuICBtYXg6IDUsXG4gIG1lc3NhZ2U6ICdZb3UgaGF2ZSBleGNlZWRlZCB0aGUgNSByZXF1ZXN0cyBpbiAxIG1pbiBsaW1pdCEnLFxuICBoZWFkZXJzOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpTGltaXRlcjtcbiJdfQ==