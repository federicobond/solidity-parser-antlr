var fs = require("fs")
var { assert } = require('chai')
var parser = require("../src/index")
var { parseNode, parseStatement } = require('./utils')

describe("#parse", function() {

  it("parses test file correctly", function() {
    var content = fs.readFileSync(__dirname + "/test.sol")
    parser.parse(content.toString())
  })

  it("throws ParserError on syntax error", function() {
    var source = "not good"
    assert.throws(() => {
      parser.parse(source)
    }, parser.ParseError)
  })

  it("supports tolerant mode", function() {
    var source = "not good"
    var root = parser.parse(source, { tolerant: true })
    assert.equal(root.errors.length, 1)
  })

  it("supports loc", function() {
    var source = "contract test { uint a; }"
    var root = parser.parse(source, { loc: true })
    assert.isOk(root.hasOwnProperty('loc'))
  })

  it("supports range", function() {
    var source = "contract test { uint a; }"
    var root = parser.parse(source, { range: true })
    assert.isOk(root.hasOwnProperty('range'))
  })

  it('can build ast with tolerant mode errors', () => {
    // TODO: just a few examples here, more should be added
    var cases = [
      'contract { function a() return bool {} }',
      'contract test { function () { 2 + + 2; } }',
      'contract test { uint ; }',
      'contract test { modifier {  } }'
    ]

    for (var c of cases) {
      parser.parse(c, { tolerant: true })
    }
  })


  describe("node meta", function() {

    it("adds meta to VariableDeclaration inside StateVariableDeclaration", function() {
      var ast = parseNode("uint public a;", { loc: true })
      assert.isOk(ast.variables[0].loc)
    })

    it("adds meta to VariableDeclaration inside VariableDeclarationStatement", function() {
      var ast = parseStatement("uint a;", { loc: true })
      assert.isOk(ast.variables[0].loc)
    })

    it("adds meta to VariableDeclaration inside EventDefinition", function() {
      var ast = parseNode("event Foo(address bar);", { loc: true })
      assert.isOk(ast.parameters[0].loc)
    })
  })
})

function checkFieldsEqShallow(got, expected) {
  for (const field of Object.keys(expected)) {
    //console.log("field: ", field, "got: |", got[field], "|expected: |", expected[field], "|")
    if (got[field] != expected[field]) {
      //console.log("|", got[field], "|!=|", expected[field], "|")
      return false
    }
  }

  return true
}

describe("#parseType", function() {
  it(`parses simple typename `, function() {
    function assertElementaryTypename(obj, typeName) {
      assert.isTrue(checkFieldsEqShallow(obj, { type: "ElementaryTypeName", name: typeName }), true)
    }

    function assertArrayTypename(obj, baseType, length) {
      assert.equal(obj.type, "ArrayTypeName")
      assert.isTrue(checkFieldsEqShallow(obj.baseTypeName, baseType))
      if (length !== undefined && length !== null) {
        assert.isTrue(checkFieldsEqShallow(obj.length, length))
      } else {
        assert.equal(obj.length, null)
      }
    }

    function assertMapTypename(obj, keyType, valueType) {
      assert.equal(obj.type, "Mapping")
      assert.isTrue(checkFieldsEqShallow(obj.keyType, keyType))
      assert.isTrue(checkFieldsEqShallow(obj.valueType, valueType))
    }

    // Simple types
    const tests = ["uint", "int", "bool", "string", "bytes", "address"]
    for (const typeName of tests) {
      var parsedT = parser.parseType(typeName, { strict: true })
      assertElementaryTypename(parsedT, typeName)
    }

    // (u)?int[0-9]* and byte[0-9]*
    for (let i = 1; i < 32; i++) {
      const nbits = i * 8
      var parsedT = parser.parseType("uint" + nbits, { strict: true })
      assertElementaryTypename(parsedT, "uint" + nbits)
      var parsedT = parser.parseType("int" + nbits, { strict: true })
      assertElementaryTypename(parsedT, "int" + nbits)
      var parsedT = parser.parseType("bytes" + i, { strict: true })
      assertElementaryTypename(parsedT, "bytes" + i)
    }

    // Address payable
    var addrPayableT = parser.parseType("address payable", { strict: true })
    assert.isTrue(checkFieldsEqShallow(addrPayableT, { type: "ElementaryTypeName", name: "address", stateMutability: "payable" }))

    // User-define typename
    var uTypename1 = parser.parseType("foo", { strict: true })
    assert.isTrue(checkFieldsEqShallow(uTypename1, { type: "UserDefinedTypeName", namePath: "foo" }))
    var uTypename2 = parser.parseType("Foo", { strict: true })
    assert.isTrue(checkFieldsEqShallow(uTypename2, { type: "UserDefinedTypeName", namePath: "Foo" }))
    var uTypename3 = parser.parseType("Contract.Foo", { strict: true })
    assert.isTrue(checkFieldsEqShallow(uTypename3, { type: "UserDefinedTypeName", namePath: "Contract.Foo" }))

    // Array names
    var arr1 = parser.parseType("uint[]", { strict: true })
    assertArrayTypename(arr1, { type: "ElementaryTypeName", name: "uint" })
    // Fixed array names
    var arr2 = parser.parseType("bytes4[3]", { strict: true })
    assertArrayTypename(
      arr2,
      { type: "ElementaryTypeName", name: "bytes4" },
      { type: "NumberLiteral", number: "3", subdenomination: null }
    )
    // 2D array names
    var arr3 = parser.parseType("string[][]", { strict: true })
    assertArrayTypename(arr3, { type: "ArrayTypeName" })
    assertArrayTypename(arr3.baseTypeName, { type: "ElementaryTypeName", name: "string" })

    // Mapping names
    var map1 = parser.parseType("mapping (uint=>uint)", { strict: true })
    assertMapTypename(map1, {type: "ElementaryTypeName", name: "uint"}, {type: "ElementaryTypeName", name: "uint"})
    var map2 = parser.parseType("mapping (address=>Foo)", { strict: true })
    assertMapTypename(map2, {type: "ElementaryTypeName", name: "address"}, {type: "UserDefinedTypeName", namePath: "Foo"})

    var map3 = parser.parseType("mapping (string=>uint[])", { strict: true })
    assertMapTypename(map3, {type: "ElementaryTypeName", name: "string"}, {type: "ArrayTypeName"})
    assertArrayTypename(map3.valueType, {type: "ElementaryTypeName", name: "uint"})

    var map4 = parser.parseType("mapping (string=>mapping(uint=>uint[]))", { strict: true })
    assertMapTypename(map4, {type: "ElementaryTypeName", name: "string"}, {type: "Mapping"})
    assertMapTypename(map4.valueType, {type: "ElementaryTypeName", name: "uint"}, {type: "ArrayTypeName"})
    assertArrayTypename(map4.valueType.valueType, {type: "ElementaryTypeName", name: "uint"})
  })
})

describe("#visit", function() {

  it("walks visitor through AST", function() {
    var source = "contract test { uint a; }"
    var ast = parser.parse(source)
    parser.visit(ast, {
      ContractDefinition: (node) => {
        assert.equal(node.type, 'ContractDefinition')
      },

      'ContractDefinition:exit': (node) => {
        assert.equal(node.type, 'ContractDefinition')
      }
    })
  })

  it("can stop visiting inner nodes by returning false", function() {
    var source = "contract test { uint a; }"
    var ast = parser.parse(source)
    parser.visit(ast, {
      ContractDefinition: (node) => {
        return false
      },

      'ContractDefinition:exit': (node) => {
        assert.fail('should not reach here')
      }
    })
  })

  it("shouldn't print anything if the lexer fails", function() {
    const originalConsoleError = console.error
    let called = false
    console.error = () => called = true

    var ast = parser.parse('"', {tolerant: true})

    console.error = originalConsoleError

    assert.isFalse(called, "Should not call console.error on lexer errors")
  });

})
