"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var _React = React,
  useState = _React.useState,
  useCallback = _React.useCallback,
  useEffect = _React.useEffect;

// Error Boundary Component
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        var _this$state$error;
        return /*#__PURE__*/React.createElement("div", {
          className: "min-h-screen bg-red-50 flex items-center justify-center p-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "bg-white p-8 rounded-lg shadow-md max-w-md w-full"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "text-2xl font-bold text-red-600 mb-4"
        }, "Something went wrong"), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-700 mb-4"
        }, "Error: ", (_this$state$error = this.state.error) === null || _this$state$error === void 0 ? void 0 : _this$state$error.message), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return window.location.reload();
          },
          className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        }, "Reload Page")));
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);
}(React.Component); // Helper Components
var LoadingSpinner = function LoadingSpinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-2"
  }, "Analyzing..."));
};

// Export Functions
var exportToJSON = function exportToJSON(data, filename) {
  var jsonStr = JSON.stringify(data, null, 2);
  var blob = new Blob([jsonStr], {
    type: 'application/json'
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
var exportToCSV = function exportToCSV(data, filename) {
  var _data$highlights, _data$skills, _data$suggestions, _data$strengths, _data$weaknesses;
  var csvContent = [['Field', 'Value'], ['Rating', data.rating], ['Summary', data.summary], ['Experience', data.experience || 'N/A'], ['Education', data.education || 'N/A'], ['Highlights', ((_data$highlights = data.highlights) === null || _data$highlights === void 0 ? void 0 : _data$highlights.join('; ')) || 'N/A'], ['Skills', ((_data$skills = data.skills) === null || _data$skills === void 0 ? void 0 : _data$skills.join('; ')) || 'N/A'], ['Suggestions', ((_data$suggestions = data.suggestions) === null || _data$suggestions === void 0 ? void 0 : _data$suggestions.join('; ')) || 'N/A'], ['Strengths', ((_data$strengths = data.strengths) === null || _data$strengths === void 0 ? void 0 : _data$strengths.join('; ')) || 'N/A'], ['Weaknesses', ((_data$weaknesses = data.weaknesses) === null || _data$weaknesses === void 0 ? void 0 : _data$weaknesses.join('; ')) || 'N/A']].map(function (row) {
    return row.map(function (field) {
      return "\"".concat(field, "\"");
    }).join(',');
  }).join('\n');
  var blob = new Blob([csvContent], {
    type: 'text/csv'
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
var printResults = function printResults() {
  window.print();
};
var ProgressBar = function ProgressBar(_ref) {
  var value = _ref.value,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 10 : _ref$max;
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-200 rounded-full h-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500",
    style: {
      width: "".concat(value / max * 100, "%")
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-right font-semibold text-blue-600 mt-1"
  }, value, " / ", max));
};
var SkillBadge = function SkillBadge(_ref2) {
  var skill = _ref2.skill;
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
  }, skill);
};
var JobCard = function JobCard(_ref3) {
  var title = _ref3.title,
    matchScore = _ref3.matchScore;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-gray-200 card-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-gray-800"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold px-3 py-1 rounded-full ".concat(matchScore >= 80 ? 'bg-green-100 text-green-800' : matchScore >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800')
  }, matchScore, "% Match")));
};
var Section = function Section(_ref4) {
  var title = _ref4.title,
    icon = _ref4.icon,
    children = _ref4.children,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? "" : _ref4$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md card-hover ".concat(className)
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-gray-800 mb-4 flex items-center"
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: "".concat(icon, " mr-2 text-blue-500")
  }), title), children);
};

// Main App Component
function App() {
  var _analysisResult$highl, _analysisResult$sugge, _analysisResult$jobTi, _jobMatch$matchedSkil, _jobMatch$missingSkil, _jobMatch$recommendat;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFile = _useState2[0],
    setSelectedFile = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    fileName = _useState4[0],
    setFileName = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    analysisResult = _useState6[0],
    setAnalysisResult = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoading = _useState8[0],
    setIsLoading = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    error = _useState0[0],
    setError = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    jobDescription = _useState10[0],
    setJobDescription = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    jobMatch = _useState12[0],
    setJobMatch = _useState12[1];
  var _useState13 = useState('analysis'),
    _useState14 = _slicedToArray(_useState13, 2),
    activeTab = _useState14[0],
    setActiveTab = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    dragOver = _useState16[0],
    setDragOver = _useState16[1];

  // Health check on component mount
  useEffect(function () {
    fetch('/api/health').then(function (res) {
      return res.json();
    }).then(function (data) {
      return console.log('Server health:', data);
    }).catch(function (err) {
      return console.error('Server health check failed:', err);
    });
  }, []);
  var handleFileChange = function handleFileChange(file) {
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setFileName(file.name);
      setError('');
      setAnalysisResult(null);
    } else {
      setSelectedFile(null);
      setFileName('');
      setError('Please select a valid PDF file.');
    }
  };
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    var file = e.dataTransfer.files[0];
    handleFileChange(file);
  };
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    setDragOver(true);
  };
  var handleDragLeave = function handleDragLeave(e) {
    e.preventDefault();
    setDragOver(false);
  };
  var analyzeResume = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var formData, response, errorData, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (selectedFile) {
            _context.n = 1;
            break;
          }
          setError('Please select a file first.');
          return _context.a(2);
        case 1:
          setIsLoading(true);
          setError('');
          setAnalysisResult(null);
          formData = new FormData();
          formData.append('resumeFile', selectedFile);
          _context.p = 2;
          _context.n = 3;
          return fetch('/api/analyze', {
            method: 'POST',
            body: formData
          });
        case 3:
          response = _context.v;
          if (response.ok) {
            _context.n = 5;
            break;
          }
          _context.n = 4;
          return response.json();
        case 4:
          errorData = _context.v;
          throw new Error(errorData.error || "HTTP error! status: ".concat(response.status));
        case 5:
          _context.n = 6;
          return response.json();
        case 6:
          data = _context.v;
          setAnalysisResult(data);
          setActiveTab('analysis');
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          console.error('Analysis failed:', _t);
          setError(_t.message || 'Analysis failed. Please try again.');
        case 8:
          _context.p = 8;
          setIsLoading(false);
          return _context.f(8);
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[2, 7, 8, 9]]);
  })), [selectedFile]);
  var matchJob = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var response, data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (!(!jobDescription || !analysisResult)) {
            _context2.n = 1;
            break;
          }
          setError('Please provide job description and analyze resume first.');
          return _context2.a(2);
        case 1:
          setIsLoading(true);
          setError('');
          _context2.p = 2;
          _context2.n = 3;
          return fetch('/api/match-job', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              jobDescription: jobDescription,
              resumeText: 'Resume analyzed'
            })
          });
        case 3:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 4;
            break;
          }
          throw new Error('Job matching failed');
        case 4:
          _context2.n = 5;
          return response.json();
        case 5:
          data = _context2.v;
          setJobMatch(data);
          setActiveTab('jobMatch');
          _context2.n = 7;
          break;
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          console.error('Job matching failed:', _t2);
          setError(_t2.message || 'Job matching failed. Please try again.');
        case 7:
          _context2.p = 7;
          setIsLoading(false);
          return _context2.f(7);
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 6, 7, 8]]);
  })), [jobDescription, analysisResult]);
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-50"
  }, /*#__PURE__*/React.createElement("header", {
    className: "gradient-bg text-white py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl md:text-5xl font-bold mb-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-robot mr-3"
  }), "AI Resume Analyzer"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl opacity-90"
  }, "Get instant AI-powered feedback on your resume"))), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto mb-8 no-print"
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Upload Resume",
    icon: "fas fa-upload"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-dashed rounded-lg p-8 text-center transition-colors ".concat(dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'),
    onDrop: handleDrop,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-pdf text-4xl text-red-500 mb-4"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 mb-4"
  }, fileName || 'Drag & drop your PDF resume here or click to browse'), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".pdf",
    onChange: function onChange(e) {
      return handleFileChange(e.target.files[0]);
    },
    className: "hidden",
    id: "file-input"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "file-input",
    className: "bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
  }, "Choose PDF File")), selectedFile && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: analyzeResume,
    disabled: isLoading,
    className: "bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
  }, isLoading ? /*#__PURE__*/React.createElement(LoadingSpinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-brain mr-2"
  }), "Analyze Resume"))), error && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle mr-2"
  }), error))), analysisResult && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center space-x-1 bg-white p-1 rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('analysis');
    },
    className: "px-6 py-2 rounded-md font-medium transition-colors ".concat(activeTab === 'analysis' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-line mr-2"
  }), "Analysis"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('jobMatch');
    },
    className: "px-6 py-2 rounded-md font-medium transition-colors ".concat(activeTab === 'jobMatch' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-briefcase mr-2"
  }), "Job Match")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return exportToJSON(analysisResult, "resume-analysis-".concat(new Date().toISOString().split('T')[0], ".json"));
    },
    className: "bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm",
    title: "Export as JSON"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-download mr-1"
  }), "JSON"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return exportToCSV(analysisResult, "resume-analysis-".concat(new Date().toISOString().split('T')[0], ".csv"));
    },
    className: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm",
    title: "Export as CSV"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-table mr-1"
  }), "CSV"), /*#__PURE__*/React.createElement("button", {
    onClick: printResults,
    className: "bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm",
    title: "Print Results"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-print mr-1"
  }), "Print")))), activeTab === 'analysis' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Resume Rating",
    icon: "fas fa-star"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: analysisResult.rating
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 mt-2"
  }, analysisResult.rating >= 8 ? 'Excellent resume!' : analysisResult.rating >= 6 ? 'Good resume with room for improvement' : 'Needs significant improvement')), /*#__PURE__*/React.createElement(Section, {
    title: "Professional Summary",
    icon: "fas fa-user-tie"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700 italic leading-relaxed"
  }, "\"", analysisResult.summary, "\"")), /*#__PURE__*/React.createElement(Section, {
    title: "Key Highlights",
    icon: "fas fa-lightbulb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, (_analysisResult$highl = analysisResult.highlights) === null || _analysisResult$highl === void 0 ? void 0 : _analysisResult$highl.map(function (highlight, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex items-start"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-green-500 mr-2 mt-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-700"
    }, highlight));
  }))), analysisResult.skills && /*#__PURE__*/React.createElement(Section, {
    title: "Skills",
    icon: "fas fa-cogs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap"
  }, analysisResult.skills.map(function (skill, index) {
    return /*#__PURE__*/React.createElement(SkillBadge, {
      key: index,
      skill: skill
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Improvement Suggestions",
    icon: "fas fa-arrow-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, (_analysisResult$sugge = analysisResult.suggestions) === null || _analysisResult$sugge === void 0 ? void 0 : _analysisResult$sugge.map(function (suggestion, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex items-start"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-right text-blue-500 mr-2 mt-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-700"
    }, suggestion));
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Career Path Suggestions",
    icon: "fas fa-road"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, (_analysisResult$jobTi = analysisResult.jobTitleSuggestions) === null || _analysisResult$jobTi === void 0 ? void 0 : _analysisResult$jobTi.map(function (job, index) {
    return /*#__PURE__*/React.createElement(JobCard, {
      key: index,
      title: job.title,
      matchScore: job.matchScore
    });
  }))), analysisResult.strengths && /*#__PURE__*/React.createElement(Section, {
    title: "Strengths",
    icon: "fas fa-thumbs-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, analysisResult.strengths.map(function (strength, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex items-start"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle text-green-500 mr-2 mt-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-700"
    }, strength));
  }))), analysisResult.experience && /*#__PURE__*/React.createElement(Section, {
    title: "Experience Level",
    icon: "fas fa-briefcase"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700"
  }, analysisResult.experience)))), activeTab === 'jobMatch' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Job Description Matching",
    icon: "fas fa-search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-2"
  }, "Paste Job Description:"), /*#__PURE__*/React.createElement("textarea", {
    value: jobDescription,
    onChange: function onChange(e) {
      return setJobDescription(e.target.value);
    },
    className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    rows: "6",
    placeholder: "Paste the job description here to see how well your resume matches..."
  }), /*#__PURE__*/React.createElement("button", {
    onClick: matchJob,
    disabled: isLoading || !jobDescription,
    className: "mt-3 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 disabled:bg-gray-400"
  }, isLoading ? /*#__PURE__*/React.createElement(LoadingSpinner, null) : 'Match Job Requirements')), jobMatch && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-50 p-4 rounded-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-green-800 mb-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check mr-2"
  }), "Matched Skills"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, (_jobMatch$matchedSkil = jobMatch.matchedSkills) === null || _jobMatch$matchedSkil === void 0 ? void 0 : _jobMatch$matchedSkil.map(function (skill, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: index,
      className: "inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded mr-1 mb-1"
    }, skill);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 p-4 rounded-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-red-800 mb-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times mr-2"
  }), "Missing Skills"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, (_jobMatch$missingSkil = jobMatch.missingSkills) === null || _jobMatch$missingSkil === void 0 ? void 0 : _jobMatch$missingSkil.map(function (skill, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: index,
      className: "inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded mr-1 mb-1"
    }, skill);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2 bg-blue-50 p-4 rounded-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-blue-800 mb-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-lightbulb mr-2"
  }), "Recommendations"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, (_jobMatch$recommendat = jobMatch.recommendations) === null || _jobMatch$recommendat === void 0 ? void 0 : _jobMatch$recommendat.map(function (rec, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "flex items-start"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-right text-blue-500 mr-2 mt-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-700"
    }, rec));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block bg-white p-6 rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-gray-800 mb-2"
  }, "Overall Match Score"), /*#__PURE__*/React.createElement("div", {
    className: "text-4xl font-bold text-blue-600"
  }, jobMatch.matchScore, "%"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: jobMatch.matchScore,
    max: 100
  })))))))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-gray-800 text-white py-6 mt-12 no-print"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 text-center"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 AI Resume Analyzer. made with \u2764\uFE0F")))));
}

// Make App available globally
window.App = App;
