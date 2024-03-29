"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDatePicker = _interopRequireDefault(require("react-date-picker"));
require("./daypick.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react/prop-types */

//import PropTypes from 'prop-types'; 

function MyDatePicker(_ref) {
  var valdate = _ref.valdate,
    _onChange = _ref.onChange,
    startdate = _ref.startdate,
    enddate = _ref.enddate;
  //const[valdate,setValdate]=useState(new Date());
  //console.log(val);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "daypick"
  }, /*#__PURE__*/_react["default"].createElement(_reactDatePicker["default"], {
    dayPlaceholder: "dd",
    monthPlaceholder: "mm",
    yearPlaceholder: "yyyy",
    format: "dd/MM/yyyy",
    value: valdate,
    onChange: function onChange(date) {
      _onChange(date);
    },
    minDate: new Date(startdate),
    maxDate: new Date(enddate)
  }));
}
var _default = MyDatePicker; // MyDatePicker.propTypes = {
//   'startdate' : PropTypes.string.isRequired,
//   'enddate' : PropTypes.string.isRequired,
//   'onChange':PropTypes.func
// };
// MyDatePicker.defaultprops = {
//   'setDate' : string,
//   'startdate' : string,
//   'enddate':string
// };
exports["default"] = _default;
