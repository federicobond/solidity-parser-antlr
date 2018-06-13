'use strict';

var antlr4 = require('./antlr4/index');

function mapCommasToNulls(children) {
  var comma = true;

  var lastNotEmpty = children.reduce(function (acc, el, idx) {
    if (el.children) {
      return idx;
    }
    return acc;
  });

  return children.reduce(function (acc, el, idx) {
    // we assume el is a terminal node if it has no children
    if (!el.children) {
      if (comma || idx > lastNotEmpty) {
        acc.push(null);
      } else {
        comma = true;
      }
    } else {
      acc.push(el);
      comma = false;
    }
    return acc;
  }, []);
}

var transformAST = {
  SourceUnit: function SourceUnit(ctx) {
    // last element is EOF terminal node
    return {
      children: this.visit(ctx.children.slice(0, -1))
    };
  },
  EnumDefinition: function EnumDefinition(ctx) {
    return {
      name: ctx.identifier().getText(),
      members: this.visit(ctx.enumValue())
    };
  },
  EnumValue: function EnumValue(ctx) {
    return {
      name: ctx.identifier().getText()
    };
  },
  UsingForDeclaration: function UsingForDeclaration(ctx) {
    var typeName = null;
    if (ctx.getChild(3).getText() !== '*') {
      typeName = this.visit(ctx.getChild(3));
    }

    return {
      typeName: typeName,
      libraryName: ctx.identifier().getText()
    };
  },
  PragmaDirective: function PragmaDirective(ctx) {
    return {
      name: ctx.pragmaName().getText(),
      value: ctx.pragmaValue().getText()
    };
  },
  ContractDefinition: function ContractDefinition(ctx) {
    var name = ctx.identifier().getText();
    this._currentContract = name;

    return {
      name: name,
      baseContracts: this.visit(ctx.inheritanceSpecifier()),
      subNodes: this.visit(ctx.contractPart()),
      kind: ctx.getChild(0).getText()
    };
  },
  InheritanceSpecifier: function InheritanceSpecifier(ctx) {
    return {
      baseName: this.visit(ctx.userDefinedTypeName()),
      arguments: this.visit(ctx.expression())
    };
  },
  ContractPart: function ContractPart(ctx) {
    return this.visit(ctx.children[0]);
  },
  ConstructorDefinition: function ConstructorDefinition(ctx) {
    var _this = this;

    var parameters = this.visit(ctx.parameterList());
    var block = this.visit(ctx.block());

    var modifiers = ctx.modifierList().modifierInvocation().map(function (mod) {
      return _this.visit(mod);
    });

    // parse function visibility
    var visibility = 'default';
    if (ctx.modifierList().ExternalKeyword(0)) {
      visibility = 'external';
    } else if (ctx.modifierList().InternalKeyword(0)) {
      visibility = 'internal';
    } else if (ctx.modifierList().PublicKeyword(0)) {
      visibility = 'public';
    } else if (ctx.modifierList().PrivateKeyword(0)) {
      visibility = 'private';
    }

    var stateMutability = null;
    if (ctx.modifierList().stateMutability(0)) {
      stateMutability = ctx.modifierList().stateMutability(0).getText();
    }

    return {
      type: 'FunctionDefinition',
      name: null,
      parameters: parameters,
      body: block,
      visibility: visibility,
      modifiers: modifiers,
      isConstructor: true,
      stateMutability: stateMutability
    };
  },
  FunctionDefinition: function FunctionDefinition(ctx) {
    var _this2 = this;

    var name = '';
    if (ctx.identifier(0)) {
      name = ctx.identifier(0).getText();
    }
    var parameters = this.visit(ctx.parameterList());

    var returnParameters = this.visit(ctx.returnParameters());

    var block = null;
    if (ctx.block()) {
      block = this.visit(ctx.block());
    }

    var modifiers = ctx.modifierList().modifierInvocation().map(function (mod) {
      return _this2.visit(mod);
    });

    // parse function visibility
    var visibility = 'default';
    if (ctx.modifierList().ExternalKeyword(0)) {
      visibility = 'external';
    } else if (ctx.modifierList().InternalKeyword(0)) {
      visibility = 'internal';
    } else if (ctx.modifierList().PublicKeyword(0)) {
      visibility = 'public';
    } else if (ctx.modifierList().PrivateKeyword(0)) {
      visibility = 'private';
    }

    var stateMutability = null;
    if (ctx.modifierList().stateMutability(0)) {
      stateMutability = ctx.modifierList().stateMutability(0).getText();
    }

    return {
      name: name,
      parameters: parameters,
      returnParameters: returnParameters,
      body: block,
      visibility: visibility,
      modifiers: modifiers,
      isConstructor: name === this._currentContract,
      stateMutability: stateMutability
    };
  },
  ModifierInvocation: function ModifierInvocation(ctx) {
    var exprList = ctx.expressionList();

    var args = void 0;
    if (exprList != null) {
      args = this.visit(exprList.expression());
    } else {
      args = [];
    }

    return {
      name: ctx.identifier().getText(),
      arguments: args
    };
  },
  ElementaryTypeNameExpression: function ElementaryTypeNameExpression(ctx) {
    return {
      typeName: this.visit(ctx.elementaryTypeName())
    };
  },
  TypeName: function TypeName(ctx) {
    if (ctx.children.length === 4 && ctx.getChild(1).getText() === '[' && ctx.getChild(3).getText() === ']') {
      this.visit(ctx.children[0]);

      return {
        type: 'ArrayTypeName',
        baseTypeName: this.visit(ctx.getChild(0)),
        length: this.visit(ctx.getChild(2))
      };
    }
    return this.visit(ctx.getChild(0));
  },
  FunctionTypeName: function FunctionTypeName(ctx) {
    var _this3 = this;

    var parameterTypes = ctx.functionTypeParameterList(0).functionTypeParameter().map(function (typeCtx) {
      return _this3.visit(typeCtx);
    });

    var returnTypes = [];
    if (ctx.functionTypeParameterList(1)) {
      returnTypes = ctx.functionTypeParameterList(1).functionTypeParameter().map(function (typeCtx) {
        return _this3.visit(typeCtx);
      });
    }

    var visibility = 'default';
    if (ctx.InternalKeyword(0)) {
      visibility = 'internal';
    } else if (ctx.ExternalKeyword(0)) {
      visibility = 'external';
    }

    var stateMutability = null;
    if (ctx.stateMutability(0)) {
      stateMutability = ctx.stateMutability(0).getText();
    }

    return {
      parameterTypes: parameterTypes,
      returnTypes: returnTypes,
      visibility: visibility,
      stateMutability: stateMutability
    };
  },
  ReturnStatement: function ReturnStatement(ctx) {
    var expression = null;
    if (ctx.expression()) {
      expression = this.visit(ctx.expression());
    }

    return { expression: expression };
  },
  EmitStatement: function EmitStatement(ctx) {
    return {
      eventCall: this.visit(ctx.functionCall())
    };
  },
  FunctionCall: function FunctionCall(ctx) {
    var _this4 = this;

    var args = [];
    var names = [];

    var ctxArgs = ctx.functionCallArguments();
    if (ctxArgs.expressionList()) {
      args = ctxArgs.expressionList().expression().map(function (exprCtx) {
        return _this4.visit(exprCtx);
      });
    } else if (ctxArgs.nameValueList()) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ctxArgs.nameValueList().nameValue()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var nameValue = _step.value;

          args.push(this.visit(nameValue.expression()));
          names.push(nameValue.identifier().getText());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return {
      expression: this.visit(ctx.expression()),
      arguments: args,
      names: names
    };
  },
  StructDefinition: function StructDefinition(ctx) {
    return {
      name: ctx.identifier().getText(),
      members: this.visit(ctx.variableDeclaration())
    };
  },
  VariableDeclaration: function VariableDeclaration(ctx) {
    var storageLocation = null;
    if (ctx.storageLocation()) {
      storageLocation = ctx.storageLocation().getText();
    }

    return {
      typeName: this.visit(ctx.typeName()),
      name: ctx.identifier().getText(),
      storageLocation: storageLocation,
      isStateVar: false,
      isIndexed: false
    };
  },
  EventParameter: function EventParameter(ctx) {
    var storageLocation = null;
    if (ctx.storageLocation(0)) {
      storageLocation = ctx.storageLocation(0).getText();
    }

    return {
      type: 'VariableDeclaration',
      typeName: this.visit(ctx.typeName()),
      name: ctx.identifier().getText(),
      storageLocation: storageLocation,
      isStateVar: false,
      isIndexed: !!ctx.IndexedKeyword(0)
    };
  },
  FunctionTypeParameter: function FunctionTypeParameter(ctx) {
    var storageLocation = null;
    if (ctx.storageLocation()) {
      storageLocation = ctx.storageLocation().getText();
    }

    return {
      type: 'VariableDeclaration',
      typeName: this.visit(ctx.typeName()),
      name: null,
      storageLocation: storageLocation,
      isStateVar: false,
      isIndexed: false
    };
  },
  WhileStatement: function WhileStatement(ctx) {
    return {
      condition: this.visit(ctx.expression()),
      body: this.visit(ctx.statement())
    };
  },
  DoWhileStatement: function DoWhileStatement(ctx) {
    return {
      condition: this.visit(ctx.expression()),
      body: this.visit(ctx.statement())
    };
  },
  IfStatement: function IfStatement(ctx) {
    var trueBody = this.visit(ctx.statement(0));

    var falseBody = null;
    if (ctx.statement().length > 1) {
      falseBody = this.visit(ctx.statement(1));
    }

    return {
      condition: this.visit(ctx.expression()),
      trueBody: trueBody,
      falseBody: falseBody
    };
  },
  UserDefinedTypeName: function UserDefinedTypeName(ctx) {
    return {
      namePath: ctx.getText()
    };
  },
  ElementaryTypeName: function ElementaryTypeName(ctx) {
    return {
      name: ctx.getText()
    };
  },
  Block: function Block(ctx) {
    return {
      statements: this.visit(ctx.statement())
    };
  },
  ExpressionStatement: function ExpressionStatement(ctx) {
    return {
      expression: this.visit(ctx.expression())
    };
  },
  NumberLiteral: function NumberLiteral(ctx) {
    var number = ctx.getChild(0).getText();
    var subdenomination = null;

    if (ctx.children.length === 2) {
      subdenomination = ctx.getChild(1).getText();
    }

    return {
      number: number,
      subdenomination: subdenomination
    };
  },
  Mapping: function Mapping(ctx) {
    return {
      keyType: this.visit(ctx.elementaryTypeName()),
      valueType: this.visit(ctx.typeName())
    };
  },
  ModifierDefinition: function ModifierDefinition(ctx) {
    var parameters = [];
    if (ctx.parameterList()) {
      parameters = this.visit(ctx.parameterList());
    }

    return {
      name: ctx.identifier().getText(),
      parameters: parameters,
      body: this.visit(ctx.block())
    };
  },
  Statement: function Statement(ctx) {
    return this.visit(ctx.getChild(0));
  },
  SimpleStatement: function SimpleStatement(ctx) {
    return this.visit(ctx.getChild(0));
  },
  Expression: function Expression(ctx) {
    var _this5 = this;

    var op = void 0;

    switch (ctx.children.length) {
      case 1:
        // primary expression
        return this.visit(ctx.getChild(0));

      case 2:
        op = ctx.getChild(0).getText();

        // new expression
        if (op === 'new') {
          return {
            type: 'NewExpression',
            typeName: this.visit(ctx.typeName())
          };
        }

        // prefix operators
        if (['+', '-', '++', '--', '!', '~', 'after', 'delete'].includes(op)) {
          return {
            type: 'UnaryOperation',
            operator: op,
            subExpression: this.visit(ctx.getChild(1)),
            isPrefix: true
          };
        }

        op = ctx.getChild(1).getText();

        // postfix operators
        if (['++', '--'].includes(op)) {
          return {
            type: 'UnaryOperation',
            operator: op,
            subExpression: this.visit(ctx.getChild(0)),
            isPrefix: false
          };
        }
        break;

      case 3:
        // treat parenthesis as no-op
        if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
          return {
            type: 'TupleExpression',
            components: [this.visit(ctx.getChild(1))],
            isArray: false
          };
        }

        op = ctx.getChild(1).getText();

        // tuple separator
        if (op === ',') {
          return {
            type: 'TupleExpression',
            components: [this.visit(ctx.getChild(0)), this.visit(ctx.getChild(2))],
            isArray: false
          };
        }

        // member access
        if (op === '.') {
          var expression = this.visit(ctx.getChild(0));
          var memberName = ctx.getChild(2).getText();
          return {
            type: 'MemberAccess',
            expression: expression,
            memberName: memberName
          };
        }

        // binary operation
        var binOps = ['+', '-', '*', '/', '**', '%', '<<', '>>', '&&', '||', '&', '|', '^', '<', '>', '<=', '>=', '==', '!=', '=', '|=', '^=', '&=', '<<=', '>>=', '+=', '-=', '*=', '/=', '%='];

        if (binOps.includes(op)) {
          return {
            type: 'BinaryOperation',
            operator: op,
            left: this.visit(ctx.getChild(0)),
            right: this.visit(ctx.getChild(2))
          };
        }
        break;

      case 4:
        // function call
        if (ctx.getChild(1).getText() === '(' && ctx.getChild(3).getText() === ')') {
          var args = [];
          var names = [];

          var ctxArgs = ctx.functionCallArguments();
          if (ctxArgs.expressionList()) {
            args = ctxArgs.expressionList().expression().map(function (exprCtx) {
              return _this5.visit(exprCtx);
            });
          } else if (ctxArgs.nameValueList()) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = ctxArgs.nameValueList().nameValue()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var nameValue = _step2.value;

                args.push(this.visit(nameValue.expression()));
                names.push(nameValue.identifier().getText());
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          return {
            type: 'FunctionCall',
            expression: this.visit(ctx.getChild(0)),
            arguments: args,
            names: names
          };
        }

        // index access
        if (ctx.getChild(1).getText() === '[' && ctx.getChild(3).getText() === ']') {
          return {
            type: 'IndexAccess',
            base: this.visit(ctx.getChild(0)),
            index: this.visit(ctx.getChild(2))
          };
        }
        break;

      case 5:
        // ternary operator
        if (ctx.getChild(1).getText() === '?' && ctx.getChild(3).getText() === ':') {
          return {
            type: 'Conditional',
            condition: this.visit(ctx.getChild(0)),
            trueExpression: this.visit(ctx.getChild(2)),
            falseExpression: this.visit(ctx.getChild(4))
          };
        }
        break;
    }

    throw new Error('unrecognized expression');
  },
  StateVariableDeclaration: function StateVariableDeclaration(ctx) {
    var type = this.visit(ctx.typeName());
    var iden = ctx.identifier();
    var name = iden.getText();

    var expression = null;
    if (ctx.expression()) {
      expression = this.visit(ctx.expression());
    }

    var visibility = 'default';
    if (ctx.InternalKeyword(0)) {
      visibility = 'internal';
    } else if (ctx.PublicKeyword(0)) {
      visibility = 'public';
    } else if (ctx.PrivateKeyword(0)) {
      visibility = 'private';
    }

    var isDeclaredConst = false;
    if (ctx.ConstantKeyword(0)) {
      isDeclaredConst = true;
    }

    var decl = this.createNode({
      type: 'VariableDeclaration',
      typeName: type,
      name: name,
      expression: expression,
      visibility: visibility,
      isStateVar: true,
      isDeclaredConst: isDeclaredConst,
      isIndexed: false
    }, iden);

    return {
      variables: [decl],
      initialValue: expression
    };
  },
  ForStatement: function ForStatement(ctx) {
    return {
      initExpression: this.visit(ctx.simpleStatement()),
      conditionExpression: this.visit(ctx.expression(0)),
      loopExpression: {
        type: 'ExpressionStatement',
        expression: this.visit(ctx.expression(1))
      },
      body: this.visit(ctx.statement())
    };
  },
  PrimaryExpression: function PrimaryExpression(ctx) {
    if (ctx.BooleanLiteral()) {
      return {
        type: 'BooleanLiteral',
        value: ctx.BooleanLiteral().getText() === 'true'
      };
    }

    if (ctx.HexLiteral()) {
      return {
        type: 'HexLiteral',
        value: ctx.HexLiteral().getText()
      };
    }

    if (ctx.StringLiteral()) {
      var text = ctx.getText();
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      };
    }

    return this.visit(ctx.getChild(0));
  },
  Identifier: function Identifier(ctx) {
    return {
      name: ctx.getText()
    };
  },
  TupleExpression: function TupleExpression(ctx) {
    var _this6 = this;

    // remove parentheses
    var children = ctx.children.slice(1, -1);
    var elements = mapCommasToNulls(children).map(function (expr) {
      // add a null for each empty value
      if (expr === null) {
        return null;
      }
      return _this6.visit(expr);
    });

    return {
      elements: elements,
      isArray: ctx.getChild(0).getText() === '['
    };
  },
  IdentifierList: function IdentifierList(ctx) {
    var _this7 = this;

    // remove parentheses
    var children = ctx.children.slice(1, -1);
    return mapCommasToNulls(children).map(function (iden) {
      // add a null for each empty value
      if (iden === null) {
        return null;
      }

      return _this7.createNode({
        type: 'VariableDeclaration',
        name: iden.getText(),
        isStateVar: false,
        isIndexed: false
      }, iden);
    });
  },
  VariableDeclarationList: function VariableDeclarationList(ctx) {
    var _this8 = this;

    // remove parentheses
    return mapCommasToNulls(ctx.children).map(function (decl) {
      // add a null for each empty value
      if (decl === null) {
        return null;
      }

      return _this8.createNode({
        type: 'VariableDeclaration',
        name: decl.identifier().getText(),
        typeName: _this8.visit(decl.typeName()),
        isStateVar: false,
        isIndexed: false
      }, decl);
    });
  },
  VariableDeclarationStatement: function VariableDeclarationStatement(ctx) {
    var variables = void 0;
    if (ctx.variableDeclaration()) {
      variables = [this.visit(ctx.variableDeclaration())];
    } else if (ctx.identifierList()) {
      variables = this.visit(ctx.identifierList());
    } else if (ctx.variableDeclarationList()) {
      variables = this.visit(ctx.variableDeclarationList());
    }

    var initialValue = null;
    if (ctx.expression()) {
      initialValue = this.visit(ctx.expression());
    }

    return {
      variables: variables,
      initialValue: initialValue
    };
  },
  ImportDirective: function ImportDirective(ctx) {
    var pathString = ctx.StringLiteral().getText();
    var unitAlias = null;
    var symbolAliases = null;

    if (ctx.importDeclaration().length > 0) {
      symbolAliases = ctx.importDeclaration().map(function (decl) {
        var symbol = decl.identifier(0).getText();
        var alias = null;
        if (decl.identifier(1)) {
          alias = decl.identifier(1).getText();
        }
        return [symbol, alias];
      });
    } else if (ctx.children.length === 7) {
      unitAlias = ctx.getChild(3).getText();
    } else if (ctx.children.length === 5) {
      unitAlias = ctx.getChild(3).getText();
    }

    return {
      path: pathString.substring(1, pathString.length - 1),
      unitAlias: unitAlias,
      symbolAliases: symbolAliases
    };
  },
  EventDefinition: function EventDefinition(ctx) {
    return {
      name: ctx.identifier().getText(),
      parameters: this.visit(ctx.eventParameterList()),
      isAnonymous: !!ctx.AnonymousKeyword()
    };
  },
  EventParameterList: function EventParameterList(ctx) {
    var parameters = ctx.eventParameter().map(function (paramCtx) {
      var type = this.visit(paramCtx.typeName());
      var name = null;
      if (paramCtx.identifier()) {
        name = paramCtx.identifier().getText();
      }

      return this.createNode({
        type: 'VariableDeclaration',
        typeName: type,
        name: name,
        isStateVar: false,
        isIndexed: !!paramCtx.IndexedKeyword(0)
      }, paramCtx);
    }, this);

    return {
      type: 'ParameterList',
      parameters: parameters
    };
  },
  ReturnParameters: function ReturnParameters(ctx) {
    return this.visit(ctx.parameterList());
  },
  ParameterList: function ParameterList(ctx) {
    var _this9 = this;

    var parameters = ctx.parameter().map(function (paramCtx) {
      return _this9.visit(paramCtx);
    });
    return { parameters: parameters };
  },
  Parameter: function Parameter(ctx) {
    var storageLocation = null;
    if (ctx.storageLocation()) {
      storageLocation = ctx.storageLocation().getText();
    }

    var name = null;
    if (ctx.identifier()) {
      name = ctx.identifier().getText();
    }

    return {
      typeName: this.visit(ctx.typeName()),
      name: name,
      storageLocation: storageLocation,
      isStateVar: false,
      isIndexed: false
    };
  },
  InlineAssemblyStatement: function InlineAssemblyStatement(ctx) {
    var language = null;
    if (ctx.StringLiteral()) {
      language = ctx.StringLiteral().getText();
      language = language.substring(1, language.length - 1);
    }

    return {
      language: language,
      body: this.visit(ctx.assemblyBlock())
    };
  },
  AssemblyBlock: function AssemblyBlock(ctx) {
    var _this10 = this;

    var operations = ctx.assemblyItem().map(function (it) {
      return _this10.visit(it);
    });

    return { operations: operations };
  },
  AssemblyItem: function AssemblyItem(ctx) {
    var text = void 0;

    if (ctx.HexLiteral()) {
      return {
        type: 'HexLiteral',
        value: ctx.HexLiteral().getText()
      };
    }

    if (ctx.StringLiteral()) {
      text = ctx.StringLiteral().getText();
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      };
    }

    if (ctx.BreakKeyword()) {
      return {
        type: 'Break'
      };
    }

    if (ctx.ContinueKeyword()) {
      return {
        type: 'Continue'
      };
    }

    return this.visit(ctx.getChild(0));
  },
  AssemblyExpression: function AssemblyExpression(ctx) {
    return this.visit(ctx.getChild(0));
  },
  AssemblyCall: function AssemblyCall(ctx) {
    var _this11 = this;

    var functionName = ctx.getChild(0).getText();
    var args = ctx.assemblyExpression().map(function (arg) {
      return _this11.visit(arg);
    });

    return {
      functionName: functionName,
      arguments: args
    };
  },
  AssemblyLiteral: function AssemblyLiteral(ctx) {
    var text = void 0;

    if (ctx.StringLiteral()) {
      text = ctx.getText();
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      };
    }

    if (ctx.DecimalNumber()) {
      return {
        type: 'DecimalNumber',
        value: ctx.getText()
      };
    }

    if (ctx.HexNumber()) {
      return {
        type: 'HexNumber',
        value: ctx.getText()
      };
    }

    if (ctx.HexLiteral()) {
      return {
        type: 'HexLiteral',
        value: ctx.getText()
      };
    }
  },
  AssemblySwitch: function AssemblySwitch(ctx) {
    var _this12 = this;

    return {
      expression: this.visit(ctx.assemblyExpression()),
      cases: ctx.assemblyCase().map(function (c) {
        return _this12.visit(c);
      })
    };
  },
  AssemblyCase: function AssemblyCase(ctx) {
    var value = null;
    if (ctx.getChild(0).getText() === 'case') {
      value = this.visit(ctx.assemblyLiteral());
    }

    var node = { block: this.visit(ctx.assemblyBlock()) };
    if (value !== null) {
      node.value = value;
    } else {
      node.default = true;
    }

    return node;
  },
  AssemblyLocalDefinition: function AssemblyLocalDefinition(ctx) {
    var names = ctx.assemblyIdentifierOrList();
    if (names.identifier()) {
      names = [this.visit(names.identifier())];
    } else {
      names = this.visit(names.assemblyIdentifierList().identifier());
    }

    return {
      names: names,
      expression: this.visit(ctx.assemblyExpression())
    };
  },
  AssemblyFunctionDefinition: function AssemblyFunctionDefinition(ctx) {
    var args = ctx.assemblyIdentifierList().identifier();
    var returnArgs = ctx.assemblyFunctionReturns().assemblyIdentifierList().identifier();

    return {
      name: ctx.identifier().getText(),
      arguments: this.visit(args),
      returnArguments: this.visit(returnArgs),
      body: this.visit(ctx.assemblyBlock())
    };
  },
  AssemblyAssignment: function AssemblyAssignment(ctx) {
    var names = ctx.assemblyIdentifierOrList();
    if (names.identifier()) {
      names = [this.visit(names.identifier())];
    } else {
      names = this.visit(names.assemblyIdentifierList().identifier());
    }

    return {
      names: names,
      expression: this.visit(ctx.assemblyExpression())
    };
  },
  LabelDefinition: function LabelDefinition(ctx) {
    return {
      name: ctx.identifier().getText()
    };
  },
  AssemblyStackAssignment: function AssemblyStackAssignment(ctx) {
    return {
      name: ctx.identifier().getText()
    };
  },
  AssemblyFor: function AssemblyFor(ctx) {
    return {
      pre: this.visit(ctx.getChild(1)),
      condition: this.visit(ctx.getChild(2)),
      post: this.visit(ctx.getChild(3)),
      body: this.visit(ctx.getChild(4))
    };
  },
  AssemblyIf: function AssemblyIf(ctx) {
    return {
      condition: this.visit(ctx.assemblyExpression()),
      body: this.visit(ctx.assemblyBlock())
    };
  }
};

function ASTBuilder(options) {
  antlr4.tree.ParseTreeVisitor.call(this);
  this.options = options;
}

ASTBuilder.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ASTBuilder.prototype.constructor = ASTBuilder;

ASTBuilder.prototype._loc = function (ctx) {
  var sourceLocation = {
    start: {
      line: ctx.start.line,
      column: ctx.start.column
    },
    end: {
      line: ctx.stop.line,
      column: ctx.stop.column
    }
  };
  return { loc: sourceLocation };
};

ASTBuilder.prototype._range = function (ctx) {
  return { range: [ctx.start.start, ctx.stop.stop] };
};

ASTBuilder.prototype.meta = function (ctx) {
  var ret = {};
  if (this.options.loc) {
    Object.assign(ret, this._loc(ctx));
  }
  if (this.options.range) {
    Object.assign(ret, this._range(ctx));
  }
  return ret;
};

ASTBuilder.prototype.createNode = function (obj, ctx) {
  return Object.assign(obj, this.meta(ctx));
};

ASTBuilder.prototype.visit = function (ctx) {
  if (ctx == null) {
    return null;
  }

  if (Array.isArray(ctx)) {
    return ctx.map(function (child) {
      return this.visit(child);
    }, this);
  }

  var name = ctx.constructor.name;
  if (name.endsWith('Context')) {
    name = name.substring(0, name.length - 'Context'.length);
  }

  var node = { type: name };

  if (name in transformAST) {
    var visited = transformAST[name].call(this, ctx);
    if (Array.isArray(visited)) {
      return visited;
    }
    Object.assign(node, visited);
  }

  return this.createNode(node, ctx);
};

module.exports = ASTBuilder;