"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchOfferings = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URL = 'http://localhost:9090/data-service/vanillaOfferings';

function checkStatus(res) {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res;
  } // todo Should throw exception here


  return res.statusText;
}

var fetchOfferings = function fetchOfferings() {
  // let rawdata = fs.readFileSync(pathToJsonFile);
  // let books = JSON.parse(rawdata);
  // return "{books: \'ABC\'}";
  console.log('FetchOfferings');
  (0, _nodeFetch["default"])(URL).then(checkStatus).then(function (res) {
    return res.text();
  }).then(function (res) {
    console.log('Fetched ...', JSON.parse(res.toString()));
    return JSON.parse(res.toString());
  })["catch"](function (err) {
    return console.error(err);
  });
};

exports.fetchOfferings = fetchOfferings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY2hhb3MtZW5naW5lZXJpbmcvY2hhb3NTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlVSTCIsImNoZWNrU3RhdHVzIiwicmVzIiwib2siLCJzdGF0dXNUZXh0IiwiZmV0Y2hPZmZlcmluZ3MiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInRleHQiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUcscURBQVo7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDeEIsTUFBSUEsR0FBRyxDQUFDQyxFQUFSLEVBQVk7QUFDVjtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQUp1QixDQUt4Qjs7O0FBQ0EsU0FBT0EsR0FBRyxDQUFDRSxVQUFYO0FBQ0Q7O0FBRU0sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLDZCQUFNUCxHQUFOLEVBQ0dRLElBREgsQ0FDUVAsV0FEUixFQUVHTyxJQUZILENBRVEsVUFBQU4sR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ08sSUFBSixFQUFKO0FBQUEsR0FGWCxFQUdHRCxJQUhILENBR1EsVUFBQU4sR0FBRyxFQUFJO0FBQ1hJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJHLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLFFBQUosRUFBWCxDQUEzQjtBQUNBLFdBQU9GLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLFFBQUosRUFBWCxDQUFQO0FBQ0QsR0FOSCxXQU9TLFVBQUFDLEdBQUc7QUFBQSxXQUFJUCxPQUFPLENBQUNRLEtBQVIsQ0FBY0QsR0FBZCxDQUFKO0FBQUEsR0FQWjtBQVFELENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5cbmNvbnN0IFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjkwOTAvZGF0YS1zZXJ2aWNlL3ZhbmlsbGFPZmZlcmluZ3MnO1xuXG5mdW5jdGlvbiBjaGVja1N0YXR1cyhyZXMpIHtcbiAgaWYgKHJlcy5vaykge1xuICAgIC8vIHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDBcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIC8vIHRvZG8gU2hvdWxkIHRocm93IGV4Y2VwdGlvbiBoZXJlXG4gIHJldHVybiByZXMuc3RhdHVzVGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoT2ZmZXJpbmdzID0gKCkgPT4ge1xuICAvLyBsZXQgcmF3ZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoVG9Kc29uRmlsZSk7XG4gIC8vIGxldCBib29rcyA9IEpTT04ucGFyc2UocmF3ZGF0YSk7XG4gIC8vIHJldHVybiBcIntib29rczogXFwnQUJDXFwnfVwiO1xuICBjb25zb2xlLmxvZygnRmV0Y2hPZmZlcmluZ3MnKTtcbiAgZmV0Y2goVVJMKVxuICAgIC50aGVuKGNoZWNrU3RhdHVzKVxuICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCAuLi4nLCBKU09OLnBhcnNlKHJlcy50b1N0cmluZygpKSk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXMudG9TdHJpbmcoKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59O1xuIl19