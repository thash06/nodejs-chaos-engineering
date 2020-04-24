"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBooks = void 0;

var chaosService = require("./chaos.service");

var getBooks = function getBooks(req, res, next) {
  try {
    let offerings = "{data : 'Dummy Offerings'}"
    offerings = (0, chaosService.fetchOfferings)();
    console.log(' Response ', offerings)
    res.jsend.success(offerings);
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};

exports.getBooks = getBooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvYm9va3MvYm9va3MuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJnZXRCb29rcyIsInJlcSIsInJlcyIsIm5leHQiLCJib29rcyIsImpzZW5kIiwic3VjY2VzcyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDMUMsTUFBSTtBQUNGLFFBQU1DLEtBQUssR0FBRyw2QkFBZDtBQUNBRixJQUFBQSxHQUFHLENBQUNHLEtBQUosQ0FBVUMsT0FBVixDQUFrQkYsS0FBbEI7QUFDRCxHQUhELENBR0UsT0FBT0csS0FBUCxFQUFjO0FBQ2RKLElBQUFBLElBQUksQ0FBQ0ksS0FBRCxDQUFKO0FBQ0Q7QUFDRixDQVBNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hTYW1wbGVEYXRhIH0gZnJvbSAnLi9ib29rcy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IGdldEJvb2tzID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9va3MgPSBmZXRjaFNhbXBsZURhdGEoKTtcbiAgICByZXMuanNlbmQuc3VjY2Vzcyhib29rcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn07XG4iXX0=
