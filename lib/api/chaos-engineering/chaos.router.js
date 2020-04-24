"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _books = require("./chaos.controller");

var chaosRouter = new _express.Router();
chaosRouter.get('/', _books.getBooks);
var _default = chaosRouter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvYm9va3MvYm9va3Mucm91dGVyLmpzIl0sIm5hbWVzIjpbImJvb2tzUm91dGVyIiwiUm91dGVyIiwiZ2V0IiwiZ2V0Qm9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxXQUFXLEdBQUcsSUFBSUMsZUFBSixFQUFsQjtBQUVBRCxXQUFXLENBQUNFLEdBQVosQ0FBZ0IsR0FBaEIsRUFBcUJDLGVBQXJCO2VBRWVILFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldEJvb2tzIH0gZnJvbSAnLi9ib29rcy5jb250cm9sbGVyJztcblxubGV0IGJvb2tzUm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5ib29rc1JvdXRlci5nZXQoJy8nLCBnZXRCb29rcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2tzUm91dGVyO1xuIl19
