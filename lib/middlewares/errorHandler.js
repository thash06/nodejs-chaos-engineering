"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

var _logger = _interopRequireDefault(require("../helpers/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var errorHandler = function errorHandler(err, req, res, next) {
  _logger["default"].error('I caught the error', err);

  if (!err.isOperational) {
    if (_config["default"].NODE_ENV !== 'development') {
      _logger["default"].error('An unexpected error occurred please restart the application!', "\nError: ".concat(err.message, " Stack: ").concat(err.stack));

      process.exit(1);
    }
  }

  _logger["default"].error("".concat(err.statusCode || 500, " - ").concat(err.message, " - ").concat(req.originalUrl, " - ").concat(req.method, " - ").concat(req.ip, " - Stack: ").concat(err.stack));

  err.stack = err.stack || '';
  var errorDetails = {
    message: err.message,
    statusCode: err.statusCode || 500,
    data: err.data,
    stack: err.stack
  };

  if (_config["default"].NODE_ENV === 'production') {
    delete errorDetails.stack;
  }

  return res.status(err.statusCode || 500).jsend.error(errorDetails);
};

var _default = errorHandler;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9lcnJvckhhbmRsZXIuanMiXSwibmFtZXMiOlsiZXJyb3JIYW5kbGVyIiwiZXJyIiwicmVxIiwicmVzIiwibmV4dCIsImxvZ2dlciIsImVycm9yIiwiaXNPcGVyYXRpb25hbCIsImNvbmZpZyIsIk5PREVfRU5WIiwibWVzc2FnZSIsInN0YWNrIiwicHJvY2VzcyIsImV4aXQiLCJzdGF0dXNDb2RlIiwib3JpZ2luYWxVcmwiLCJtZXRob2QiLCJpcCIsImVycm9yRGV0YWlscyIsImRhdGEiLCJzdGF0dXMiLCJqc2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBeUI7QUFDNUNDLHFCQUFPQyxLQUFQLENBQWEsb0JBQWIsRUFBbUNMLEdBQW5DOztBQUNBLE1BQUksQ0FBQ0EsR0FBRyxDQUFDTSxhQUFULEVBQXdCO0FBQ3RCLFFBQUlDLG1CQUFPQyxRQUFQLEtBQW9CLGFBQXhCLEVBQXVDO0FBQ3JDSix5QkFBT0MsS0FBUCxDQUNFLDhEQURGLHFCQUVjTCxHQUFHLENBQUNTLE9BRmxCLHFCQUVvQ1QsR0FBRyxDQUFDVSxLQUZ4Qzs7QUFJQUMsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNEO0FBQ0Y7O0FBQ0RSLHFCQUFPQyxLQUFQLFdBQ0tMLEdBQUcsQ0FBQ2EsVUFBSixJQUFrQixHQUR2QixnQkFDZ0NiLEdBQUcsQ0FBQ1MsT0FEcEMsZ0JBQ2lEUixHQUFHLENBQUNhLFdBRHJELGdCQUNzRWIsR0FBRyxDQUFDYyxNQUQxRSxnQkFDc0ZkLEdBQUcsQ0FBQ2UsRUFEMUYsdUJBQ3lHaEIsR0FBRyxDQUFDVSxLQUQ3Rzs7QUFHQVYsRUFBQUEsR0FBRyxDQUFDVSxLQUFKLEdBQVlWLEdBQUcsQ0FBQ1UsS0FBSixJQUFhLEVBQXpCO0FBQ0EsTUFBTU8sWUFBWSxHQUFHO0FBQ25CUixJQUFBQSxPQUFPLEVBQUVULEdBQUcsQ0FBQ1MsT0FETTtBQUVuQkksSUFBQUEsVUFBVSxFQUFFYixHQUFHLENBQUNhLFVBQUosSUFBa0IsR0FGWDtBQUduQkssSUFBQUEsSUFBSSxFQUFFbEIsR0FBRyxDQUFDa0IsSUFIUztBQUluQlIsSUFBQUEsS0FBSyxFQUFFVixHQUFHLENBQUNVO0FBSlEsR0FBckI7O0FBTUEsTUFBSUgsbUJBQU9DLFFBQVAsS0FBb0IsWUFBeEIsRUFBc0M7QUFDcEMsV0FBT1MsWUFBWSxDQUFDUCxLQUFwQjtBQUNEOztBQUNELFNBQU9SLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBV25CLEdBQUcsQ0FBQ2EsVUFBSixJQUFrQixHQUE3QixFQUFrQ08sS0FBbEMsQ0FBd0NmLEtBQXhDLENBQThDWSxZQUE5QyxDQUFQO0FBQ0QsQ0F6QkQ7O2VBMkJlbEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vaGVscGVycy9sb2dnZXInO1xuXG5jb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsb2dnZXIuZXJyb3IoJ0kgY2F1Z2h0IHRoZSBlcnJvcicsIGVycik7XG4gIGlmICghZXJyLmlzT3BlcmF0aW9uYWwpIHtcbiAgICBpZiAoY29uZmlnLk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAgICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHBsZWFzZSByZXN0YXJ0IHRoZSBhcHBsaWNhdGlvbiEnLFxuICAgICAgICBgXFxuRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9IFN0YWNrOiAke2Vyci5zdGFja31gXG4gICAgICApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbiAgfVxuICBsb2dnZXIuZXJyb3IoXG4gICAgYCR7ZXJyLnN0YXR1c0NvZGUgfHwgNTAwfSAtICR7ZXJyLm1lc3NhZ2V9IC0gJHtyZXEub3JpZ2luYWxVcmx9IC0gJHtyZXEubWV0aG9kfSAtICR7cmVxLmlwfSAtIFN0YWNrOiAke2Vyci5zdGFja31gXG4gICk7XG4gIGVyci5zdGFjayA9IGVyci5zdGFjayB8fCAnJztcbiAgY29uc3QgZXJyb3JEZXRhaWxzID0ge1xuICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgIHN0YXR1c0NvZGU6IGVyci5zdGF0dXNDb2RlIHx8IDUwMCxcbiAgICBkYXRhOiBlcnIuZGF0YSxcbiAgICBzdGFjazogZXJyLnN0YWNrXG4gIH07XG4gIGlmIChjb25maWcuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlbGV0ZSBlcnJvckRldGFpbHMuc3RhY2s7XG4gIH1cbiAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc2VuZC5lcnJvcihlcnJvckRldGFpbHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyO1xuIl19