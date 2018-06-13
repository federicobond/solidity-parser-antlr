'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var antlr4 = require('./antlr4/index');

var _require = require('./lib/SolidityLexer'),
    SolidityLexer = _require.SolidityLexer;

var _require2 = require('./lib/SolidityParser'),
    SolidityParser = _require2.SolidityParser;

var ASTBuilder = require('./ASTBuilder');
var ErrorListener = require('./ErrorListener');

var _require3 = require('./tokens'),
    buildTokenList = _require3.buildTokenList;

function ParserError(args) {
  this.name = 'ParserError';
  this.message = args.errors.map(function (e) {
    return e.message;
  }).join('. ');
  this.errors = args.errors;
  this.stack = new Error().stack;
}

ParserError.prototype = Object.create(Error.prototype);
ParserError.prototype.constructor = ParserError;

function tokenize(input, options) {
  options = options || {};

  var chars = antlr4.CharStreams.fromString(input);
  var lexer = new SolidityLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);

  return buildTokenList(tokens.tokenSource.getAllTokens(), options);
}

function parse(input, options) {
  options = options || {};

  var chars = antlr4.CharStreams.fromString(input);
  var lexer = new SolidityLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);

  var parser = new SolidityParser(tokens);
  var listener = new ErrorListener();

  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.buildParseTrees = true;

  var tree = parser.sourceUnit();

  var tokenList = void 0;
  if (options.tokens) {
    var tokenSource = tokens.tokenSource;
    tokenSource.reset();

    tokenList = buildTokenList(tokenSource.getAllTokens(), options);
  }

  if (!options.tolerant && listener.hasErrors()) {
    throw new ParserError({ errors: listener.getErrors() });
  }

  var visitor = new ASTBuilder(options);
  var ast = visitor.visit(tree);

  if (options.tolerant && listener.hasErrors()) {
    ast.errors = listener.getErrors();
  }
  if (options.tokens) {
    ast.tokens = tokenList;
  }

  return ast;
}

function _isASTNode(node) {
  return !!node && (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && node.hasOwnProperty('type');
}

function visit(node, visitor) {
  if (Array.isArray(node)) {
    node.forEach(function (child) {
      return visit(child, visitor);
    });
  }

  if (!_isASTNode(node)) return;

  var cont = true;

  if (visitor[node.type]) {
    cont = visitor[node.type](node);
  }

  if (cont === false) return;

  for (var prop in node) {
    if (node.hasOwnProperty(prop)) {
      visit(node[prop], visitor);
    }
  }

  var selector = node.type + ':exit';
  if (visitor[selector]) {
    visitor[selector](node);
  }
}

exports.tokenize = tokenize;
exports.parse = parse;
exports.visit = visit;
exports.ParserError = ParserError;