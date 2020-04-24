"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _axiosRetry = _interopRequireDefault(require("axios-retry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URL = 'http://localhost:9090/data-service';

var retry = _axios["default"].create({
  baseURL: URL
});

(0, _axiosRetry["default"])(_axios["default"], {
  retries: 3,
  shouldResetTimeout: true,
  retryCondition: [[100, 199], [429, 429], [500, 599]],
  // retryDelay: (retryCount) => {
  //     return retryCount * 2;
  // }
  retryDelay: retry.exponentialDelay
});
var _default = retry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9yZXRyeS5qcyJdLCJuYW1lcyI6WyJVUkwiLCJyZXRyeSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJldHJpZXMiLCJzaG91bGRSZXNldFRpbWVvdXQiLCJyZXRyeUNvbmRpdGlvbiIsInJldHJ5RGVsYXkiLCJleHBvbmVudGlhbERlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsb0NBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHQyxrQkFBTUMsTUFBTixDQUFhO0FBQUVDLEVBQUFBLE9BQU8sRUFBRUo7QUFBWCxDQUFiLENBQWQ7O0FBRUEsNEJBQVdFLGlCQUFYLEVBQWtCO0FBQ2RHLEVBQUFBLE9BQU8sRUFBRSxDQURLO0FBRWRDLEVBQUFBLGtCQUFrQixFQUFFLElBRk47QUFHZEMsRUFBQUEsY0FBYyxFQUFHLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFELEVBQWEsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFiLEVBQXlCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBekIsQ0FISDtBQUlkO0FBQ0E7QUFDQTtBQUNBQyxFQUFBQSxVQUFVLEVBQUVQLEtBQUssQ0FBQ1E7QUFQSixDQUFsQjtlQVVlUixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBheGlvc1JldHJ5IGZyb20gJ2F4aW9zLXJldHJ5JztcblxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTA5MC9kYXRhLXNlcnZpY2UnO1xuY29uc3QgcmV0cnkgPSBheGlvcy5jcmVhdGUoeyBiYXNlVVJMOiBVUkwgfSk7XG5cbmF4aW9zUmV0cnkoYXhpb3MsIHtcbiAgICByZXRyaWVzOiAzLFxuICAgIHNob3VsZFJlc2V0VGltZW91dDogdHJ1ZSxcbiAgICByZXRyeUNvbmRpdGlvbiA6IFtbMTAwLCAxOTldLCBbNDI5LCA0MjldLCBbNTAwLCA1OTldXSxcbiAgICAvLyByZXRyeURlbGF5OiAocmV0cnlDb3VudCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gcmV0cnlDb3VudCAqIDI7XG4gICAgLy8gfVxuICAgIHJldHJ5RGVsYXk6IHJldHJ5LmV4cG9uZW50aWFsRGVsYXlcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcmV0cnk7XG4iXX0=