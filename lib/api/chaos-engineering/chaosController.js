"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOfferingsWithRetry = exports.getOfferingsWithCircuitBreaker = exports.getOfferings = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _middlewares = require("../../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URL = 'http://localhost:9090/data-service/vanillaOfferings';

var getOfferings = function getOfferings(req, res, next) {
  try {
    // let offerings = "{data : 'Dummy Offerings'}";
    // offerings = fetchOfferings();
    // console.log('Response offerings: ', offerings);
    // res.jsend.success(offerings);
    // todo This call should move to service
    console.log('Protected by RateLimiter ...');
    (0, _nodeFetch["default"])(URL).then(function (response) {
      return response.text();
    }).then(function (response) {
      console.log('Fetched offerings ...', JSON.parse(response.toString()).data[0]);
      res.type('application/json').jsend.success(JSON.parse(response.toString()).data[0]);
    })["catch"](function (err) {
      return console.error(err);
    });
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};

exports.getOfferings = getOfferings;
var nextService = 'chaos-engineering';

function fallback() {
  return ["The ".concat(nextService, " service is currently unavailable.")];
}

var getOfferingsWithCircuitBreaker = function getOfferingsWithCircuitBreaker(req, res, next) {
  try {
    // todo This call should move to service
    console.log('Protected by RateLimiter and CircuitBreaker ...');

    _middlewares.circuitBreaker.fire({
      endpoint: URL
    }).then(function (response) {
      res.set('Access-Control-Allow-Origin', '*');
      console.log('Data , ', JSON.parse(response.body).data[0]);
      res.type('application/json').send(JSON.parse(response.body).data[0]);
    })["catch"](function (e) {
      console.error('Error message to send ', e);
      console.error('CircuitBreaker Status : ', _middlewares.circuitBreaker.status);

      if (_middlewares.circuitBreaker.halfOpen === true) {
        res.send("Circuit breaker is HALF_OPEN: Fallback response - ".concat(fallback()));
      } else if (_middlewares.circuitBreaker.opened === true) {
        res.send("Circuit breaker is OPENED: Fallback response - ".concat(fallback()));
      } else {
        res.send(e);
      }
    });
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};

exports.getOfferingsWithCircuitBreaker = getOfferingsWithCircuitBreaker;

var getOfferingsWithRetry = function getOfferingsWithRetry(req, res, next) {
  try {
    // todo This call should move to service
    console.log('Protected by RateLimiter and Retry ...');

    _middlewares.retry.get('/vanillaOfferings') // The first request fails and the second returns 'ok'
    .then(function (response) {
      console.log('Data , ', response.data.data[0]);
      res.type('application/json').send(response.data.data[0]);
    })["catch"](function (error) {
      // The first request fails
      console.log('Retry Error , ', error);
      error !== undefined;
      console.log('error !== undefined , ', error !== undefined); // next(error);
    });
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};

exports.getOfferingsWithRetry = getOfferingsWithRetry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY2hhb3MtZW5naW5lZXJpbmcvY2hhb3NDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlVSTCIsImdldE9mZmVyaW5ncyIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwiZGF0YSIsInR5cGUiLCJqc2VuZCIsInN1Y2Nlc3MiLCJlcnIiLCJlcnJvciIsIm5leHRTZXJ2aWNlIiwiZmFsbGJhY2siLCJnZXRPZmZlcmluZ3NXaXRoQ2lyY3VpdEJyZWFrZXIiLCJjaXJjdWl0QnJlYWtlciIsImZpcmUiLCJlbmRwb2ludCIsInNldCIsImJvZHkiLCJzZW5kIiwiZSIsInN0YXR1cyIsImhhbGZPcGVuIiwib3BlbmVkIiwiZ2V0T2ZmZXJpbmdzV2l0aFJldHJ5IiwicmV0cnkiLCJnZXQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUdBLElBQU1BLEdBQUcsR0FBRyxxREFBWjs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUM5QyxNQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLCtCQUFNTixHQUFOLEVBQ0dPLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURoQixFQUVHRixJQUZILENBRVEsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsQ0FBQ0ksUUFBVCxFQUFYLEVBQWdDQyxJQUFoQyxDQUFxQyxDQUFyQyxDQUFyQztBQUNBVixN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bkIsQ0FBdkI7QUFDQVYsTUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVMsa0JBQVQsRUFBNkJhLElBQTdCLENBQWtDbkIsUUFBUSxDQUFDSyxJQUFULENBQWNBLElBQWQsQ0FBbUIsQ0FBbkIsQ0FBbEM7QUFDRCxLQUxILFdBTVMsVUFBQUssS0FBSyxFQUFJO0FBQ2Q7QUFDQWIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJZLEtBQTlCO0FBQ0FBLE1BQUFBLEtBQUssS0FBS2lCLFNBQVY7QUFDQTlCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDWSxLQUFLLEtBQUtpQixTQUFoRCxFQUpjLENBS2Q7QUFDRCxLQVpIO0FBYUQsR0FoQkQsQ0FnQkUsT0FBT2pCLEtBQVAsRUFBYztBQUNkYixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ1ksS0FBaEM7QUFDQWQsSUFBQUEsSUFBSSxDQUFDYyxLQUFELENBQUo7QUFDRDtBQUNGLENBckJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgY2lyY3VpdEJyZWFrZXIgLCByZXRyeSB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmVzJztcblxuXG5jb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDkwL2RhdGEtc2VydmljZS92YW5pbGxhT2ZmZXJpbmdzJztcbmV4cG9ydCBjb25zdCBnZXRPZmZlcmluZ3MgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBsZXQgb2ZmZXJpbmdzID0gXCJ7ZGF0YSA6ICdEdW1teSBPZmZlcmluZ3MnfVwiO1xuICAgIC8vIG9mZmVyaW5ncyA9IGZldGNoT2ZmZXJpbmdzKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ1Jlc3BvbnNlIG9mZmVyaW5nczogJywgb2ZmZXJpbmdzKTtcbiAgICAvLyByZXMuanNlbmQuc3VjY2VzcyhvZmZlcmluZ3MpO1xuICAgIC8vIHRvZG8gVGhpcyBjYWxsIHNob3VsZCBtb3ZlIHRvIHNlcnZpY2VcbiAgICBjb25zb2xlLmxvZygnUHJvdGVjdGVkIGJ5IFJhdGVMaW1pdGVyIC4uLicpO1xuICAgIGZldGNoKFVSTClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoZWQgb2ZmZXJpbmdzIC4uLicsIEpTT04ucGFyc2UocmVzcG9uc2UudG9TdHJpbmcoKSkuZGF0YVswXSk7XG4gICAgICAgIHJlcy50eXBlKCdhcHBsaWNhdGlvbi9qc29uJykuanNlbmQuc3VjY2VzcyhKU09OLnBhcnNlKHJlc3BvbnNlLnRvU3RyaW5nKCkpLmRhdGFbMF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnIEVycm9yIG9jY3VycmVkICcsIGVycm9yKTtcbiAgICBuZXh0KGVycm9yKTtcbiAgfVxufTtcbmNvbnN0IG5leHRTZXJ2aWNlID0gJ2NoYW9zLWVuZ2luZWVyaW5nJztcbmZ1bmN0aW9uIGZhbGxiYWNrKCkge1xuICByZXR1cm4gW2BUaGUgJHtuZXh0U2VydmljZX0gc2VydmljZSBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUuYF07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRPZmZlcmluZ3NXaXRoQ2lyY3VpdEJyZWFrZXIgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyB0b2RvIFRoaXMgY2FsbCBzaG91bGQgbW92ZSB0byBzZXJ2aWNlXG4gICAgY29uc29sZS5sb2coJ1Byb3RlY3RlZCBieSBSYXRlTGltaXRlciBhbmQgQ2lyY3VpdEJyZWFrZXIgLi4uJyk7XG4gICAgY2lyY3VpdEJyZWFrZXJcbiAgICAgIC5maXJlKHsgZW5kcG9pbnQ6IFVSTCB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXMuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YSAsICcsIEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSkuZGF0YVswXSk7XG4gICAgICAgIHJlcy50eXBlKCdhcHBsaWNhdGlvbi9qc29uJykuc2VuZChKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpLmRhdGFbMF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWVzc2FnZSB0byBzZW5kICcsIGUpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDaXJjdWl0QnJlYWtlciBTdGF0dXMgOiAnLCBjaXJjdWl0QnJlYWtlci5zdGF0dXMpO1xuICAgICAgICBpZiAoY2lyY3VpdEJyZWFrZXIuaGFsZk9wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICByZXMuc2VuZChgQ2lyY3VpdCBicmVha2VyIGlzIEhBTEZfT1BFTjogRmFsbGJhY2sgcmVzcG9uc2UgLSAkeyAgZmFsbGJhY2soKX1gKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaXJjdWl0QnJlYWtlci5vcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXMuc2VuZChgQ2lyY3VpdCBicmVha2VyIGlzIE9QRU5FRDogRmFsbGJhY2sgcmVzcG9uc2UgLSAkeyAgZmFsbGJhY2soKX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZChlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJyBFcnJvciBvY2N1cnJlZCAnLCBlcnJvcik7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRPZmZlcmluZ3NXaXRoUmV0cnkgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyB0b2RvIFRoaXMgY2FsbCBzaG91bGQgbW92ZSB0byBzZXJ2aWNlXG4gICAgY29uc29sZS5sb2coJ1Byb3RlY3RlZCBieSBSYXRlTGltaXRlciBhbmQgUmV0cnkgLi4uJyk7XG4gICAgcmV0cnlcbiAgICAgIC5nZXQoJy92YW5pbGxhT2ZmZXJpbmdzJykgLy8gVGhlIGZpcnN0IHJlcXVlc3QgZmFpbHMgYW5kIHRoZSBzZWNvbmQgcmV0dXJucyAnb2snXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhICwgJywgcmVzcG9uc2UuZGF0YS5kYXRhWzBdKTtcbiAgICAgICAgcmVzLnR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKS5zZW5kKHJlc3BvbnNlLmRhdGEuZGF0YVswXSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHJlcXVlc3QgZmFpbHNcbiAgICAgICAgY29uc29sZS5sb2coJ1JldHJ5IEVycm9yICwgJywgZXJyb3IpO1xuICAgICAgICBlcnJvciAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgIT09IHVuZGVmaW5lZCAsICcsIGVycm9yICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAvLyBuZXh0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCcgRXJyb3Igb2NjdXJyZWQgJywgZXJyb3IpO1xuICAgIG5leHQoZXJyb3IpO1xuICB9XG59O1xuIl19