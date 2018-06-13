'use strict';

// Generated from solidity-antlr4/Solidity.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('../antlr4/index');
var SolidityListener = require('./SolidityListener').SolidityListener;
var grammarFileName = "Solidity.g4";

var serializedATN = ['\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964', '\x03y\u03BB\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t', '\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04', '\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04', '\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04', '\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t', '\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04', '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t', '\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04', '\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#\t#\x04$\t$\x04', '%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+\x04', ',\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x04', '3\t3\x044\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04', ':\t:\x04;\t;\x04<\t<\x04=\t=\x04>\t>\x04?\t?\x04@\t@\x04', 'A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04F\tF\x04G\tG\x04', 'H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04', 'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03', '\x02\x03\x02\x03\x02\x07\x02\xAE\n\x02\f\x02\x0E', '\x02\xB1\x0B\x02\x03\x02\x03\x02\x03\x03\x03\x03', '\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05', '\x03\x05\x05\x05\xBE\n\x05\x03\x06\x03\x06\x05', '\x06\xC2\n\x06\x03\x07\x03\x07\x03\b\x05\b\xC7\n', '\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xCE\n\t\x03\n', '\x03\n\x03\n\x03\n\x05\n\xD4\n\n\x03\n\x03\n\x03\n\x03', '\n\x05\n\xDA\n\n\x03\n\x03\n\x05\n\xDE\n\n\x03\n\x03', '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xE8\n\n', '\f\n\x0E\n\xEB\x0B\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05', '\n\xF2\n\n\x03\x0B\x03\x0B\x03\x0B\x03\x0B\x03\x0B', '\x03\x0B\x07\x0B\xFA\n\x0B\f\x0B\x0E\x0B\xFD\x0B', '\x0B\x05\x0B\xFF\n\x0B\x03\x0B\x03\x0B\x07\x0B', '\u0103\n\x0B\f\x0B\x0E\x0B\u0106\x0B\x0B\x03\x0B\x03', '\x0B\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u010F\n\f\f\f', '\x0E\f\u0112\x0B\f\x03\f\x03\f\x05\f\u0116\n\f\x03\r\x03', '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0120\n\r', '\x03\x0E\x03\x0E\x07\x0E\u0124\n\x0E\f\x0E\x0E\x0E', '\u0127\x0B\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u012C', '\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F', '\x03\x0F\x03\x0F\x05\x0F\u0135\n\x0F\x03\x0F\x03', '\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03', '\x10\x03\x10\x03\x10\x07\x10\u0141\n\x10\f\x10\x0E', '\x10\u0144\x0B\x10\x05\x10\u0146\n\x10\x03\x10\x03', '\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03', '\x12\x03\x12\x03\x12\x05\x12\u0152\n\x12\x03\x12', '\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0159\n', '\x13\x03\x13\x05\x13\u015C\n\x13\x03\x14\x03\x14', '\x05\x14\u0160\n\x14\x03\x14\x03\x14\x03\x14\x05', '\x14\u0165\n\x14\x03\x14\x03\x14\x05\x14\u0169\n\x14', '\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16', '\x03\x16\x03\x16\x03\x16\x07\x16\u0174\n\x16\f\x16', '\x0E\x16\u0177\x0B\x16\x03\x17\x03\x17\x03\x17\x03', '\x17\x05\x17\u017D\n\x17\x03\x17\x03\x17\x03\x18', '\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19', '\u0187\n\x19\x03\x19\x03\x19\x07\x19\u018B\n\x19\f\x19', '\x0E\x19\u018E\x0B\x19\x03\x19\x03\x19\x03\x1A\x03', '\x1A\x03\x1A\x03\x1A\x07\x1A\u0196\n\x1A\f\x1A\x0E', '\x1A\u0199\x0B\x1A\x05\x1A\u019B\n\x1A\x03\x1A\x03', '\x1A\x03\x1B\x03\x1B\x05\x1B\u01A1\n\x1B\x03\x1B', '\x05\x1B\u01A4\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03', '\x1C\x07\x1C\u01AA\n\x1C\f\x1C\x0E\x1C\u01AD\x0B\x1C', '\x05\x1C\u01AF\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03', '\x1D\x05\x1D\u01B5\n\x1D\x03\x1D\x05\x1D\u01B8\n\x1D', '\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01BE\n', '\x1E\f\x1E\x0E\x1E\u01C1\x0B\x1E\x05\x1E\u01C3\n\x1E', '\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01C9\n', '\x1F\x03 \x03 \x05 \u01CD\n \x03 \x03 \x03!\x03!\x03', '!\x03!\x03!\x05!\u01D6\n!\x03!\x03!\x03!\x05!\u01DB\n', '!\x03!\x07!\u01DE\n!\f!\x0E!\u01E1\x0B!\x03"\x03"\x03', '"\x07"\u01E6\n"\f"\x0E"\u01E9\x0B"\x03#\x03#\x03#', '\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x07', '$\u01F7\n$\f$\x0E$\u01FA\x0B$\x03$\x03$\x05$\u01FE\n$\x03', '%\x03%\x03&\x03&\x03\'\x03\'\x07\'\u0206\n\'\f\'\x0E\'', '\u0209\x0B\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03', '(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0219\n(\x03)\x03', ')\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0225', '\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x05,\u022F', '\n,\x03-\x03-\x03-\x03-\x05-\u0235\n-\x03-\x05-\u0238', '\n-\x03-\x03-\x05-\u023C\n-\x03-\x03-\x03-\x03.\x03', '.\x05.\u0243\n.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03', '/\x03/\x03/\x030\x030\x030\x031\x031\x031\x032\x03', '2\x052\u0257\n2\x032\x032\x033\x033\x033\x034\x034\x03', '4\x034\x035\x035\x035\x035\x035\x035\x035\x055\u0269', '\n5\x035\x035\x055\u026D\n5\x035\x035\x036\x056\u0272', '\n6\x036\x036\x056\u0276\n6\x076\u0278\n6\f6\x0E6\u027B\x0B', '6\x037\x037\x057\u027F\n7\x037\x077\u0282\n7\f7\x0E7\u0285', '\x0B7\x037\x057\u0288\n7\x037\x037\x038\x038\x039\x03', '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03', '9\x039\x039\x039\x039\x039\x039\x059\u02A0\n9\x039\x03', '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03', '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03', '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03', '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03', '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03', '9\x039\x039\x039\x039\x039\x079\u02DB\n9\f9\x0E9\u02DE', '\x0B9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u02E7', '\n:\x03;\x03;\x03;\x07;\u02EC\n;\f;\x0E;\u02EF\x0B;\x03', '<\x03<\x03<\x07<\u02F4\n<\f<\x0E<\u02F7\x0B<\x03<\x05', '<\u02FA\n<\x03=\x03=\x03=\x03=\x03>\x03>\x05>\u0302\n', '>\x03>\x03>\x05>\u0306\n>\x05>\u0308\n>\x03?\x03?\x03', '?\x03?\x03?\x03@\x03@\x07@\u0311\n@\f@\x0E@\u0314\x0B', '@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03', 'A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05', 'A\u0329\nA\x03B\x03B\x05B\u032D\nB\x03C\x03C\x03C\x03', 'C\x05C\u0333\nC\x03C\x03C\x05C\u0337\nC\x03C\x03C\x07', 'C\u033B\nC\fC\x0EC\u033E\x0BC\x03C\x05C\u0341\nC\x03D\x03', 'D\x03D\x03D\x05D\u0347\nD\x03E\x03E\x03E\x03E\x03F\x03', 'F\x03F\x03F\x03F\x05F\u0352\nF\x03G\x03G\x03G\x07G\u0357', '\nG\fG\x0EG\u035A\x0BG\x03H\x03H\x03H\x03I\x03I\x03', 'I\x03J\x03J\x03J\x07J\u0365\nJ\fJ\x0EJ\u0368\x0BJ\x03', 'K\x03K\x03K\x03K\x03K\x03K\x05K\u0370\nK\x03L\x03L\x03', 'L\x03L\x05L\u0376\nL\x03L\x03L\x05L\u037A\nL\x03L\x03', 'L\x03M\x03M\x03M\x03N\x03N\x03N\x05N\u0384\nN\x03N\x03', 'N\x03N\x05N\u0389\nN\x03N\x03N\x03O\x03O\x03O\x03O\x03', 'P\x03P\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x05R\u0399\nR\x03', 'R\x03R\x05R\u039D\nR\x07R\u039F\nR\fR\x0ER\u03A2\x0BR\x03', 'R\x03R\x03R\x03R\x03R\x07R\u03A9\nR\fR\x0ER\u03AC\x0B', 'R\x05R\u03AE\nR\x03R\x05R\u03B1\nR\x03S\x03S\x03T\x03', 'T\x05T\u03B7\nT\x03U\x03U\x03U\x02\x04@pV\x02\x04\x06', '\b\n\f\x0E\x10\x12\x14\x16\x18\x1A\x1C\x1E "$&(*', ',.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\x80\x82\x84\x86', '\x88\x8A\x8C\x8E\x90\x92\x94\x96\x98\x9A\x9C\x9E', '\xA0\xA2\xA4\xA6\xA8\x02\x13\x03\x02\x05\x0B\x03', '\x02\x13\x15\x05\x02kkooqr\x03\x02\')\x05\x02kkpp', 'st\x04\x0226]a\x03\x0278\x03\x02:;\x03\x02<=\x04\x02', '\x0E\x0E@A\x03\x02BC\x03\x02\x07\n\x03\x02FG\x04', '\x02\x0B\x0BLU\x05\x02deggvv\x03\x02de\x04\x02\x0F', '\x0Fuu\x02\u0411\x02\xAF\x03\x02\x02\x02\x04\xB4', '\x03\x02\x02\x02\x06\xB9\x03\x02\x02\x02\b\xBD', '\x03\x02\x02\x02\n\xBF\x03\x02\x02\x02\f\xC3\x03', '\x02\x02\x02\x0E\xC6\x03\x02\x02\x02\x10\xCA\x03', '\x02\x02\x02\x12\xF1\x03\x02\x02\x02\x14\xF3\x03', '\x02\x02\x02\x16\u0109\x03\x02\x02\x02\x18\u011F\x03', '\x02\x02\x02\x1A\u0121\x03\x02\x02\x02\x1C\u012F\x03', '\x02\x02\x02\x1E\u0138\x03\x02\x02\x02 \u0149\x03', '\x02\x02\x02"\u014E\x03\x02\x02\x02$\u0155\x03\x02', '\x02\x02&\u015D\x03\x02\x02\x02(\u016A\x03\x02\x02', '\x02*\u0175\x03\x02\x02\x02,\u0178\x03\x02\x02\x02', '.\u0180\x03\x02\x02\x020\u0182\x03\x02\x02\x022\u0191', '\x03\x02\x02\x024\u019E\x03\x02\x02\x026\u01A5\x03', '\x02\x02\x028\u01B2\x03\x02\x02\x02:\u01B9\x03\x02', '\x02\x02<\u01C6\x03\x02\x02\x02>\u01CA\x03\x02\x02', '\x02@\u01D5\x03\x02\x02\x02B\u01E2\x03\x02\x02\x02', 'D\u01EA\x03\x02\x02\x02F\u01F1\x03\x02\x02\x02H\u01FF', '\x03\x02\x02\x02J\u0201\x03\x02\x02\x02L\u0203\x03', '\x02\x02\x02N\u0218\x03\x02\x02\x02P\u021A\x03\x02', '\x02\x02R\u021D\x03\x02\x02\x02T\u0226\x03\x02\x02', '\x02V\u022E\x03\x02\x02\x02X\u0230\x03\x02\x02\x02', 'Z\u0240\x03\x02\x02\x02\\\u0246\x03\x02\x02\x02^\u024E', '\x03\x02\x02\x02`\u0251\x03\x02\x02\x02b\u0254\x03', '\x02\x02\x02d\u025A\x03\x02\x02\x02f\u025D\x03\x02', '\x02\x02h\u0268\x03\x02\x02\x02j\u0271\x03\x02\x02', '\x02l\u027C\x03\x02\x02\x02n\u028B\x03\x02\x02\x02', 'p\u029F\x03\x02\x02\x02r\u02E6\x03\x02\x02\x02t\u02E8', '\x03\x02\x02\x02v\u02F0\x03\x02\x02\x02x\u02FB\x03', '\x02\x02\x02z\u0307\x03\x02\x02\x02|\u0309\x03\x02', '\x02\x02~\u030E\x03\x02\x02\x02\x80\u0328\x03\x02', '\x02\x02\x82\u032C\x03\x02\x02\x02\x84\u0332\x03\x02', '\x02\x02\x86\u0342\x03\x02\x02\x02\x88\u0348\x03\x02', '\x02\x02\x8A\u0351\x03\x02\x02\x02\x8C\u0353\x03\x02', '\x02\x02\x8E\u035B\x03\x02\x02\x02\x90\u035E\x03\x02', '\x02\x02\x92\u0361\x03\x02\x02\x02\x94\u036F\x03\x02', '\x02\x02\x96\u0371\x03\x02\x02\x02\x98\u037D\x03\x02', '\x02\x02\x9A\u0380\x03\x02\x02\x02\x9C\u038C\x03\x02', '\x02\x02\x9E\u0390\x03\x02\x02\x02\xA0\u0392\x03\x02', '\x02\x02\xA2\u03B0\x03\x02\x02\x02\xA4\u03B2\x03\x02', '\x02\x02\xA6\u03B4\x03\x02\x02\x02\xA8\u03B8\x03\x02', '\x02\x02\xAA\xAE\x05\x04\x03\x02\xAB\xAE\x05\x12', '\n\x02\xAC\xAE\x05\x14\x0B\x02\xAD\xAA\x03\x02', '\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02', '\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02', '\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02', '\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\x02', '\x02\x03\xB3\x03\x03\x02\x02\x02\xB4\xB5\x07\x03', '\x02\x02\xB5\xB6\x05\x06\x04\x02\xB6\xB7\x05\b', '\x05\x02\xB7\xB8\x07\x04\x02\x02\xB8\x05\x03\x02', '\x02\x02\xB9\xBA\x05\xA8U\x02\xBA\x07\x03\x02', '\x02\x02\xBB\xBE\x05\n\x06\x02\xBC\xBE\x05p9\x02', '\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02', '\xBE\t\x03\x02\x02\x02\xBF\xC1\x05\x0E\b\x02\xC0', '\xC2\x05\x0E\b\x02\xC1\xC0\x03\x02\x02\x02\xC1', '\xC2\x03\x02\x02\x02\xC2\x0B\x03\x02\x02\x02\xC3', '\xC4\t\x02\x02\x02\xC4\r\x03\x02\x02\x02\xC5\xC7', '\x05\f\x07\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7', '\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9', '\x07b\x02\x02\xC9\x0F\x03\x02\x02\x02\xCA\xCD', '\x05\xA8U\x02\xCB\xCC\x07\f\x02\x02\xCC\xCE\x05', '\xA8U\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03', '\x02\x02\x02\xCE\x11\x03\x02\x02\x02\xCF\xD0\x07', '\r\x02\x02\xD0\xD3\x07v\x02\x02\xD1\xD2\x07\f\x02', '\x02\xD2\xD4\x05\xA8U\x02\xD3\xD1\x03\x02\x02', '\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\x03\x02\x02', '\x02\xD5\xF2\x07\x04\x02\x02\xD6\xD9\x07\r\x02', '\x02\xD7\xDA\x07\x0E\x02\x02\xD8\xDA\x05\xA8U', '\x02\xD9\xD7\x03\x02\x02\x02\xD9\xD8\x03\x02\x02', '\x02\xDA\xDD\x03\x02\x02\x02\xDB\xDC\x07\f\x02', '\x02\xDC\xDE\x05\xA8U\x02\xDD\xDB\x03\x02\x02', '\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02', '\x02\xDF\xE0\x07\x0F\x02\x02\xE0\xE1\x07v\x02', '\x02\xE1\xF2\x07\x04\x02\x02\xE2\xE3\x07\r\x02', '\x02\xE3\xE4\x07\x10\x02\x02\xE4\xE9\x05\x10\t', '\x02\xE5\xE6\x07\x11\x02\x02\xE6\xE8\x05\x10\t', '\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02', '\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02', '\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02\x02', '\x02\xEC\xED\x07\x12\x02\x02\xED\xEE\x07\x0F\x02', '\x02\xEE\xEF\x07v\x02\x02\xEF\xF0\x07\x04\x02', '\x02\xF0\xF2\x03\x02\x02\x02\xF1\xCF\x03\x02\x02', '\x02\xF1\xD6\x03\x02\x02\x02\xF1\xE2\x03\x02\x02', '\x02\xF2\x13\x03\x02\x02\x02\xF3\xF4\t\x03\x02', '\x02\xF4\xFE\x05\xA8U\x02\xF5\xF6\x07\x16\x02', '\x02\xF6\xFB\x05\x16\f\x02\xF7\xF8\x07\x11\x02', '\x02\xF8\xFA\x05\x16\f\x02\xF9\xF7\x03\x02\x02', '\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02', '\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02', '\x02\xFD\xFB\x03\x02\x02\x02\xFE\xF5\x03\x02\x02', '\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02', '\x02\u0100\u0104\x07\x10\x02\x02\u0101\u0103\x05\x18\r', '\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02', '\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02', '\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0104\x03\x02\x02', '\x02\u0107\u0108\x07\x12\x02\x02\u0108\x15\x03\x02\x02', '\x02\u0109\u0115\x05B"\x02\u010A\u010B\x07\x17\x02\x02', '\u010B\u0110\x05p9\x02\u010C\u010D\x07\x11\x02\x02\u010D', '\u010F\x05p9\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0112', '\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111', '\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0110', '\x03\x02\x02\x02\u0113\u0114\x07\x18\x02\x02\u0114\u0116', '\x03\x02\x02\x02\u0115\u010A\x03\x02\x02\x02\u0115\u0116', '\x03\x02\x02\x02\u0116\x17\x03\x02\x02\x02\u0117\u0120', '\x05\x1A\x0E\x02\u0118\u0120\x05\x1C\x0F\x02\u0119\u0120', '\x05\x1E\x10\x02\u011A\u0120\x05 \x11\x02\u011B\u0120', '\x05"\x12\x02\u011C\u0120\x05&\x14\x02\u011D\u0120\x05', ',\x17\x02\u011E\u0120\x050\x19\x02\u011F\u0117\x03\x02', '\x02\x02\u011F\u0118\x03\x02\x02\x02\u011F\u0119\x03\x02', '\x02\x02\u011F\u011A\x03\x02\x02\x02\u011F\u011B\x03\x02', '\x02\x02\u011F\u011C\x03\x02\x02\x02\u011F\u011D\x03\x02', '\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\x19\x03\x02', '\x02\x02\u0121\u0125\x05@!\x02\u0122\u0124\t\x04\x02\x02', '\u0123\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02', '\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02', '\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02', '\u0128\u012B\x05\xA8U\x02\u0129\u012A\x07\x0B\x02\x02', '\u012A\u012C\x05p9\x02\u012B\u0129\x03\x02\x02\x02\u012B', '\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D', '\u012E\x07\x04\x02\x02\u012E\x1B\x03\x02\x02\x02\u012F', '\u0130\x07\x19\x02\x02\u0130\u0131\x05\xA8U\x02\u0131', '\u0134\x07\x1A\x02\x02\u0132\u0135\x07\x0E\x02\x02\u0133', '\u0135\x05@!\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133', '\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137', '\x07\x04\x02\x02\u0137\x1D\x03\x02\x02\x02\u0138\u0139', '\x07\x1B\x02\x02\u0139\u013A\x05\xA8U\x02\u013A\u0145', '\x07\x10\x02\x02\u013B\u013C\x05> \x02\u013C\u0142\x07', '\x04\x02\x02\u013D\u013E\x05> \x02\u013E\u013F\x07\x04', '\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140\u013D\x03\x02', '\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02', '\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0146\x03\x02', '\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u013B\x03\x02', '\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03\x02', '\x02\x02\u0147\u0148\x07\x12\x02\x02\u0148\x1F\x03\x02', '\x02\x02\u0149\u014A\x07\x1C\x02\x02\u014A\u014B\x052', '\x1A\x02\u014B\u014C\x05*\x16\x02\u014C\u014D\x05L\'\x02', '\u014D!\x03\x02\x02\x02\u014E\u014F\x07\x1D\x02\x02', '\u014F\u0151\x05\xA8U\x02\u0150\u0152\x052\x1A\x02\u0151', '\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152', '\u0153\x03\x02\x02\x02\u0153\u0154\x05L\'\x02\u0154#\x03', '\x02\x02\x02\u0155\u015B\x05\xA8U\x02\u0156\u0158\x07', '\x17\x02\x02\u0157\u0159\x05t;\x02\u0158\u0157\x03\x02', '\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x03\x02', '\x02\x02\u015A\u015C\x07\x18\x02\x02\u015B\u0156\x03\x02', '\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C%\x03\x02', '\x02\x02\u015D\u015F\x07\x1E\x02\x02\u015E\u0160\x05\xA8', 'U\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02', '\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x052', '\x1A\x02\u0162\u0164\x05*\x16\x02\u0163\u0165\x05(\x15', '\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02', '\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0169\x07\x04\x02', '\x02\u0167\u0169\x05L\'\x02\u0168\u0166\x03\x02\x02\x02', '\u0168\u0167\x03\x02\x02\x02\u0169\'\x03\x02\x02\x02', '\u016A\u016B\x07\x1F\x02\x02\u016B\u016C\x052\x1A\x02', '\u016C)\x03\x02\x02\x02\u016D\u0174\x05$\x13\x02\u016E', '\u0174\x05J&\x02\u016F\u0174\x07m\x02\x02\u0170\u0174\x07', 'r\x02\x02\u0171\u0174\x07o\x02\x02\u0172\u0174\x07q\x02', '\x02\u0173\u016D\x03\x02\x02\x02\u0173\u016E\x03\x02\x02', '\x02\u0173\u016F\x03\x02\x02\x02\u0173\u0170\x03\x02\x02', '\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03\x02\x02', '\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02', '\x02\u0175\u0176\x03\x02\x02\x02\u0176+\x03\x02\x02', '\x02\u0177\u0175\x03\x02\x02\x02\u0178\u0179\x07 \x02', '\x02\u0179\u017A\x05\xA8U\x02\u017A\u017C\x056\x1C\x02', '\u017B\u017D\x07i\x02\x02\u017C\u017B\x03\x02\x02\x02', '\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02', '\u017E\u017F\x07\x04\x02\x02\u017F-\x03\x02\x02\x02', '\u0180\u0181\x05\xA8U\x02\u0181/\x03\x02\x02\x02\u0182', '\u0183\x07!\x02\x02\u0183\u0184\x05\xA8U\x02\u0184\u0186', '\x07\x10\x02\x02\u0185\u0187\x05.\x18\x02\u0186\u0185', '\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u018C', '\x03\x02\x02\x02\u0188\u0189\x07\x11\x02\x02\u0189\u018B', '\x05.\x18\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018E', '\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D', '\x03\x02\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C', '\x03\x02\x02\x02\u018F\u0190\x07\x12\x02\x02\u01901', '\x03\x02\x02\x02\u0191\u019A\x07\x17\x02\x02\u0192\u0197', '\x054\x1B\x02\u0193\u0194\x07\x11\x02\x02\u0194\u0196', '\x054\x1B\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199', '\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198', '\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199\u0197', '\x03\x02\x02\x02\u019A\u0192\x03\x02\x02\x02\u019A\u019B', '\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D', '\x07\x18\x02\x02\u019D3\x03\x02\x02\x02\u019E\u01A0', '\x05@!\x02\u019F\u01A1\x05H%\x02\u01A0\u019F\x03\x02\x02', '\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3\x03\x02\x02', '\x02\u01A2\u01A4\x05\xA8U\x02\u01A3\u01A2\x03\x02\x02', '\x02\u01A3\u01A4\x03\x02\x02\x02\u01A45\x03\x02\x02', '\x02\u01A5\u01AE\x07\x17\x02\x02\u01A6\u01AB\x058\x1D', '\x02\u01A7\u01A8\x07\x11\x02\x02\u01A8\u01AA\x058\x1D', '\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02', '\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02', '\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02', '\x02\u01AE\u01A6\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02', '\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x07\x18\x02', '\x02\u01B17\x03\x02\x02\x02\u01B2\u01B4\x05@!\x02\u01B3', '\u01B5\x07n\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4', '\u01B5\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6', '\u01B8\x05\xA8U\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7', '\u01B8\x03\x02\x02\x02\u01B89\x03\x02\x02\x02\u01B9', '\u01C2\x07\x17\x02\x02\u01BA\u01BF\x05<\x1F\x02\u01BB', '\u01BC\x07\x11\x02\x02\u01BC\u01BE\x05<\x1F\x02\u01BD', '\u01BB\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF', '\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0', '\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2', '\u01BA\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3', '\u01C4\x03\x02\x02\x02\u01C4\u01C5\x07\x18\x02\x02\u01C5', ';\x03\x02\x02\x02\u01C6\u01C8\x05@!\x02\u01C7\u01C9\x05', 'H%\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02', '\x02\x02\u01C9=\x03\x02\x02\x02\u01CA\u01CC\x05@!\x02', '\u01CB\u01CD\x05H%\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC', '\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE', '\u01CF\x05\xA8U\x02\u01CF?\x03\x02\x02\x02\u01D0\u01D1', '\b!\x01\x02\u01D1\u01D6\x05n8\x02\u01D2\u01D6\x05B"\x02', '\u01D3\u01D6\x05D#\x02\u01D4\u01D6\x05F$\x02\u01D5\u01D0\x03', '\x02\x02\x02\u01D5\u01D2\x03\x02\x02\x02\u01D5\u01D3\x03', '\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01DF\x03', '\x02\x02\x02\u01D7\u01D8\f\x04\x02\x02\u01D8\u01DA\x07', '"\x02\x02\u01D9\u01DB\x05p9\x02\u01DA\u01D9\x03\x02\x02', '\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02', '\x02\u01DC\u01DE\x07#\x02\x02\u01DD\u01D7\x03\x02\x02', '\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02', '\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0A\x03\x02\x02', '\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E7\x05\xA8U', '\x02\u01E3\u01E4\x07$\x02\x02\u01E4\u01E6\x05\xA8U\x02', '\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02', '\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02', '\u01E8C\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02', '\u01EA\u01EB\x07%\x02\x02\u01EB\u01EC\x07\x17\x02\x02', '\u01EC\u01ED\x05n8\x02\u01ED\u01EE\x07&\x02\x02\u01EE\u01EF', '\x05@!\x02\u01EF\u01F0\x07\x18\x02\x02\u01F0E\x03\x02', '\x02\x02\u01F1\u01F2\x07\x1E\x02\x02\u01F2\u01F8\x05:', '\x1E\x02\u01F3\u01F7\x07o\x02\x02\u01F4\u01F7\x07m\x02', '\x02\u01F5\u01F7\x05J&\x02\u01F6\u01F3\x03\x02\x02\x02', '\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02', '\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02', '\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FD\x03\x02\x02\x02', '\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FC\x07\x1F\x02\x02', '\u01FC\u01FE\x05:\x1E\x02\u01FD\u01FB\x03\x02\x02\x02', '\u01FD\u01FE\x03\x02\x02\x02\u01FEG\x03\x02\x02\x02', '\u01FF\u0200\t\x05\x02\x02\u0200I\x03\x02\x02\x02\u0201', '\u0202\t\x06\x02\x02\u0202K\x03\x02\x02\x02\u0203\u0207', '\x07\x10\x02\x02\u0204\u0206\x05N(\x02\u0205\u0204\x03', '\x02\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03', '\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03', '\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020B\x07', '\x12\x02\x02\u020BM\x03\x02\x02\x02\u020C\u0219\x05', 'R*\x02\u020D\u0219\x05T+\x02\u020E\u0219\x05X-\x02\u020F\u0219', '\x05L\'\x02\u0210\u0219\x05Z.\x02\u0211\u0219\x05\\/\x02', '\u0212\u0219\x05^0\x02\u0213\u0219\x05`1\x02\u0214\u0219\x05', 'b2\x02\u0215\u0219\x05d3\x02\u0216\u0219\x05f4\x02\u0217\u0219', '\x05V,\x02\u0218\u020C\x03\x02\x02\x02\u0218\u020D\x03', '\x02\x02\x02\u0218\u020E\x03\x02\x02\x02\u0218\u020F\x03', '\x02\x02\x02\u0218\u0210\x03\x02\x02\x02\u0218\u0211\x03', '\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0218\u0213\x03', '\x02\x02\x02\u0218\u0214\x03\x02\x02\x02\u0218\u0215\x03', '\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03', '\x02\x02\x02\u0219O\x03\x02\x02\x02\u021A\u021B\x05', 'p9\x02\u021B\u021C\x07\x04\x02\x02\u021CQ\x03\x02\x02', '\x02\u021D\u021E\x07*\x02\x02\u021E\u021F\x07\x17\x02', '\x02\u021F\u0220\x05p9\x02\u0220\u0221\x07\x18\x02\x02', '\u0221\u0224\x05N(\x02\u0222\u0223\x07+\x02\x02\u0223\u0225', '\x05N(\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03', '\x02\x02\x02\u0225S\x03\x02\x02\x02\u0226\u0227\x07', ',\x02\x02\u0227\u0228\x07\x17\x02\x02\u0228\u0229\x05', 'p9\x02\u0229\u022A\x07\x18\x02\x02\u022A\u022B\x05N(\x02', '\u022BU\x03\x02\x02\x02\u022C\u022F\x05h5\x02\u022D\u022F', '\x05P)\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03', '\x02\x02\x02\u022FW\x03\x02\x02\x02\u0230\u0231\x07', '\x1A\x02\x02\u0231\u0234\x07\x17\x02\x02\u0232\u0235\x05', 'V,\x02\u0233\u0235\x07\x04\x02\x02\u0234\u0232\x03\x02', '\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0237\x03\x02', '\x02\x02\u0236\u0238\x05p9\x02\u0237\u0236\x03\x02\x02', '\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x03\x02\x02', '\x02\u0239\u023B\x07\x04\x02\x02\u023A\u023C\x05p9\x02', '\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02', '\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x07\x18\x02\x02', '\u023E\u023F\x05N(\x02\u023FY\x03\x02\x02\x02\u0240\u0242', '\x07-\x02\x02\u0241\u0243\x07v\x02\x02\u0242\u0241\x03', '\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03', '\x02\x02\x02\u0244\u0245\x05~@\x02\u0245[\x03\x02\x02', '\x02\u0246\u0247\x07.\x02\x02\u0247\u0248\x05N(\x02\u0248', '\u0249\x07,\x02\x02\u0249\u024A\x07\x17\x02\x02\u024A', '\u024B\x05p9\x02\u024B\u024C\x07\x18\x02\x02\u024C\u024D', '\x07\x04\x02\x02\u024D]\x03\x02\x02\x02\u024E\u024F', '\x07l\x02\x02\u024F\u0250\x07\x04\x02\x02\u0250_\x03', '\x02\x02\x02\u0251\u0252\x07j\x02\x02\u0252\u0253\x07', '\x04\x02\x02\u0253a\x03\x02\x02\x02\u0254\u0256\x07', '/\x02\x02\u0255\u0257\x05p9\x02\u0256\u0255\x03\x02\x02', '\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x03\x02\x02', '\x02\u0258\u0259\x07\x04\x02\x02\u0259c\x03\x02\x02', '\x02\u025A\u025B\x070\x02\x02\u025B\u025C\x07\x04\x02', '\x02\u025Ce\x03\x02\x02\x02\u025D\u025E\x071\x02\x02', '\u025E\u025F\x05|?\x02\u025F\u0260\x07\x04\x02\x02\u0260', 'g\x03\x02\x02\x02\u0261\u0262\x072\x02\x02\u0262\u0269', '\x05l7\x02\u0263\u0269\x05> \x02\u0264\u0265\x07\x17\x02', '\x02\u0265\u0266\x05j6\x02\u0266\u0267\x07\x18\x02\x02', '\u0267\u0269\x03\x02\x02\x02\u0268\u0261\x03\x02\x02\x02', '\u0268\u0263\x03\x02\x02\x02\u0268\u0264\x03\x02\x02\x02', '\u0269\u026C\x03\x02\x02\x02\u026A\u026B\x07\x0B\x02\x02', '\u026B\u026D\x05p9\x02\u026C\u026A\x03\x02\x02\x02\u026C', '\u026D\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E', '\u026F\x07\x04\x02\x02\u026Fi\x03\x02\x02\x02\u0270', '\u0272\x05> \x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272', '\x03\x02\x02\x02\u0272\u0279\x03\x02\x02\x02\u0273\u0275', '\x07\x11\x02\x02\u0274\u0276\x05> \x02\u0275\u0274\x03', '\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03', '\x02\x02\x02\u0277\u0273\x03\x02\x02\x02\u0278\u027B\x03', '\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03', '\x02\x02\x02\u027Ak\x03\x02\x02\x02\u027B\u0279\x03', '\x02\x02\x02\u027C\u0283\x07\x17\x02\x02\u027D\u027F\x05', '\xA8U\x02\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03', '\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0282\x07', '\x11\x02\x02\u0281\u027E\x03\x02\x02\x02\u0282\u0285\x03', '\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03', '\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03', '\x02\x02\x02\u0286\u0288\x05\xA8U\x02\u0287\u0286\x03', '\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x03', '\x02\x02\x02\u0289\u028A\x07\x18\x02\x02\u028Am\x03', '\x02\x02\x02\u028B\u028C\t\x07\x02\x02\u028Co\x03\x02', '\x02\x02\u028D\u028E\b9\x01\x02\u028E\u028F\x079\x02\x02', '\u028F\u02A0\x05@!\x02\u0290\u0291\x07\x17\x02\x02\u0291', '\u0292\x05p9\x02\u0292\u0293\x07\x18\x02\x02\u0293\u02A0', '\x03\x02\x02\x02\u0294\u0295\t\b\x02\x02\u0295\u02A0\x05', 'p9\x15\u0296\u0297\t\t\x02\x02\u0297\u02A0\x05p9\x14\u0298', '\u0299\t\n\x02\x02\u0299\u02A0\x05p9\x13\u029A\u029B\x07>', '\x02\x02\u029B\u02A0\x05p9\x12\u029C\u029D\x07\x06\x02', '\x02\u029D\u02A0\x05p9\x11\u029E\u02A0\x05r:\x02\u029F\u028D', '\x03\x02\x02\x02\u029F\u0290\x03\x02\x02\x02\u029F\u0294', '\x03\x02\x02\x02\u029F\u0296\x03\x02\x02\x02\u029F\u0298', '\x03\x02\x02\x02\u029F\u029A\x03\x02\x02\x02\u029F\u029C', '\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0\u02DC', '\x03\x02\x02\x02\u02A1\u02A2\f\x10\x02\x02\u02A2\u02A3', '\x07?\x02\x02\u02A3\u02DB\x05p9\x11\u02A4\u02A5\f\x0F\x02', '\x02\u02A5\u02A6\t\x0B\x02\x02\u02A6\u02DB\x05p9\x10\u02A7', '\u02A8\f\x0E\x02\x02\u02A8\u02A9\t\t\x02\x02\u02A9\u02DB\x05', 'p9\x0F\u02AA\u02AB\f\r\x02\x02\u02AB\u02AC\t\f\x02\x02\u02AC', '\u02DB\x05p9\x0E\u02AD\u02AE\f\f\x02\x02\u02AE\u02AF\x07D', '\x02\x02\u02AF\u02DB\x05p9\r\u02B0\u02B1\f\x0B\x02\x02\u02B1', '\u02B2\x07\x05\x02\x02\u02B2\u02DB\x05p9\f\u02B3\u02B4\f\n', '\x02\x02\u02B4\u02B5\x07E\x02\x02\u02B5\u02DB\x05p9\x0B', '\u02B6\u02B7\f\t\x02\x02\u02B7\u02B8\t\r\x02\x02\u02B8\u02DB', '\x05p9\n\u02B9\u02BA\f\b\x02\x02\u02BA\u02BB\t\x0E\x02\x02', '\u02BB\u02DB\x05p9\t\u02BC\u02BD\f\x07\x02\x02\u02BD\u02BE\x07', 'H\x02\x02\u02BE\u02DB\x05p9\b\u02BF\u02C0\f\x06\x02\x02', '\u02C0\u02C1\x07I\x02\x02\u02C1\u02DB\x05p9\x07\u02C2\u02C3', '\f\x05\x02\x02\u02C3\u02C4\x07J\x02\x02\u02C4\u02C5\x05', 'p9\x02\u02C5\u02C6\x07K\x02\x02\u02C6\u02C7\x05p9\x06\u02C7', '\u02DB\x03\x02\x02\x02\u02C8\u02C9\f\x04\x02\x02\u02C9', '\u02CA\t\x0F\x02\x02\u02CA\u02DB\x05p9\x05\u02CB\u02CC\f\x1B', '\x02\x02\u02CC\u02DB\t\b\x02\x02\u02CD\u02CE\f\x19\x02\x02', '\u02CE\u02CF\x07"\x02\x02\u02CF\u02D0\x05p9\x02\u02D0\u02D1', '\x07#\x02\x02\u02D1\u02DB\x03\x02\x02\x02\u02D2\u02D3', '\f\x18\x02\x02\u02D3\u02D4\x07\x17\x02\x02\u02D4\u02D5', '\x05z>\x02\u02D5\u02D6\x07\x18\x02\x02\u02D6\u02DB\x03', '\x02\x02\x02\u02D7\u02D8\f\x17\x02\x02\u02D8\u02D9\x07', '$\x02\x02\u02D9\u02DB\x05\xA8U\x02\u02DA\u02A1\x03\x02', '\x02\x02\u02DA\u02A4\x03\x02\x02\x02\u02DA\u02A7\x03\x02', '\x02\x02\u02DA\u02AA\x03\x02\x02\x02\u02DA\u02AD\x03\x02', '\x02\x02\u02DA\u02B0\x03\x02\x02\x02\u02DA\u02B3\x03\x02', '\x02\x02\u02DA\u02B6\x03\x02\x02\x02\u02DA\u02B9\x03\x02', '\x02\x02\u02DA\u02BC\x03\x02\x02\x02\u02DA\u02BF\x03\x02', '\x02\x02\u02DA\u02C2\x03\x02\x02\x02\u02DA\u02C8\x03\x02', '\x02\x02\u02DA\u02CB\x03\x02\x02\x02\u02DA\u02CD\x03\x02', '\x02\x02\u02DA\u02D2\x03\x02\x02\x02\u02DA\u02D7\x03\x02', '\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DA\x03\x02', '\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DDq\x03\x02', '\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E7\x07c', '\x02\x02\u02E0\u02E7\x05\xA6T\x02\u02E1\u02E7\x07g\x02', '\x02\u02E2\u02E7\x07v\x02\x02\u02E3\u02E7\x05\xA8U\x02', '\u02E4\u02E7\x05\xA2R\x02\u02E5\u02E7\x05\xA4S\x02\u02E6', '\u02DF\x03\x02\x02\x02\u02E6\u02E0\x03\x02\x02\x02\u02E6', '\u02E1\x03\x02\x02\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6', '\u02E3\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6', '\u02E5\x03\x02\x02\x02\u02E7s\x03\x02\x02\x02\u02E8', '\u02ED\x05p9\x02\u02E9\u02EA\x07\x11\x02\x02\u02EA\u02EC', '\x05p9\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02EF\x03', '\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03', '\x02\x02\x02\u02EEu\x03\x02\x02\x02\u02EF\u02ED\x03', '\x02\x02\x02\u02F0\u02F5\x05x=\x02\u02F1\u02F2\x07\x11', '\x02\x02\u02F2\u02F4\x05x=\x02\u02F3\u02F1\x03\x02\x02', '\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02', '\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F9\x03\x02\x02', '\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8\u02FA\x07\x11\x02', '\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02', '\x02\u02FAw\x03\x02\x02\x02\u02FB\u02FC\x05\xA8U\x02', '\u02FC\u02FD\x07K\x02\x02\u02FD\u02FE\x05p9\x02\u02FEy\x03', '\x02\x02\x02\u02FF\u0301\x07\x10\x02\x02\u0300\u0302\x05', 'v<\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302\x03\x02', '\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0308\x07\x12', '\x02\x02\u0304\u0306\x05t;\x02\u0305\u0304\x03\x02\x02', '\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0308\x03\x02\x02', '\x02\u0307\u02FF\x03\x02\x02\x02\u0307\u0305\x03\x02\x02', '\x02\u0308{\x03\x02\x02\x02\u0309\u030A\x05p9\x02\u030A', '\u030B\x07\x17\x02\x02\u030B\u030C\x05z>\x02\u030C\u030D', '\x07\x18\x02\x02\u030D}\x03\x02\x02\x02\u030E\u0312', '\x07\x10\x02\x02\u030F\u0311\x05\x80A\x02\u0310\u030F', '\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310', '\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315', '\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0316', '\x07\x12\x02\x02\u0316\x7F\x03\x02\x02\x02\u0317\u0329', '\x05\xA8U\x02\u0318\u0329\x05~@\x02\u0319\u0329\x05\x82', 'B\x02\u031A\u0329\x05\x86D\x02\u031B\u0329\x05\x88E\x02', '\u031C\u0329\x05\x8EH\x02\u031D\u0329\x05\x90I\x02\u031E', '\u0329\x05\x92J\x02\u031F\u0329\x05\x96L\x02\u0320\u0329', '\x05\x9AN\x02\u0321\u0329\x05\x9CO\x02\u0322\u0329\x07', 'j\x02\x02\u0323\u0329\x07l\x02\x02\u0324\u0329\x05\xA0', 'Q\x02\u0325\u0329\x05\xA6T\x02\u0326\u0329\x07v\x02\x02', '\u0327\u0329\x07g\x02\x02\u0328\u0317\x03\x02\x02\x02', '\u0328\u0318\x03\x02\x02\x02\u0328\u0319\x03\x02\x02\x02', '\u0328\u031A\x03\x02\x02\x02\u0328\u031B\x03\x02\x02\x02', '\u0328\u031C\x03\x02\x02\x02\u0328\u031D\x03\x02\x02\x02', '\u0328\u031E\x03\x02\x02\x02\u0328\u031F\x03\x02\x02\x02', '\u0328\u0320\x03\x02\x02\x02\u0328\u0321\x03\x02\x02\x02', '\u0328\u0322\x03\x02\x02\x02\u0328\u0323\x03\x02\x02\x02', '\u0328\u0324\x03\x02\x02\x02\u0328\u0325\x03\x02\x02\x02', '\u0328\u0326\x03\x02\x02\x02\u0328\u0327\x03\x02\x02\x02', '\u0329\x81\x03\x02\x02\x02\u032A\u032D\x05\x84C\x02', '\u032B\u032D\x05\x9EP\x02\u032C\u032A\x03\x02\x02\x02', '\u032C\u032B\x03\x02\x02\x02\u032D\x83\x03\x02\x02\x02', '\u032E\u0333\x07/\x02\x02\u032F\u0333\x073\x02\x02\u0330', '\u0333\x076\x02\x02\u0331\u0333\x05\xA8U\x02\u0332\u032E', '\x03\x02\x02\x02\u0332\u032F\x03\x02\x02\x02\u0332\u0330', '\x03\x02\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333\u0340', '\x03\x02\x02\x02\u0334\u0336\x07\x17\x02\x02\u0335\u0337', '\x05\x82B\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337', '\x03\x02\x02\x02\u0337\u033C\x03\x02\x02\x02\u0338\u0339', '\x07\x11\x02\x02\u0339\u033B\x05\x82B\x02\u033A\u0338', '\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A', '\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033F', '\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033F\u0341', '\x07\x18\x02\x02\u0340\u0334\x03\x02\x02\x02\u0340\u0341', '\x03\x02\x02\x02\u0341\x85\x03\x02\x02\x02\u0342\u0343', '\x07V\x02\x02\u0343\u0346\x05\x8AF\x02\u0344\u0345\x07', 'W\x02\x02\u0345\u0347\x05\x82B\x02\u0346\u0344\x03\x02', '\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\x87\x03\x02', '\x02\x02\u0348\u0349\x05\x8AF\x02\u0349\u034A\x07W\x02', '\x02\u034A\u034B\x05\x82B\x02\u034B\x89\x03\x02\x02', '\x02\u034C\u0352\x05\xA8U\x02\u034D\u034E\x07\x17\x02', '\x02\u034E\u034F\x05\x8CG\x02\u034F\u0350\x07\x18\x02', '\x02\u0350\u0352\x03\x02\x02\x02\u0351\u034C\x03\x02\x02', '\x02\u0351\u034D\x03\x02\x02\x02\u0352\x8B\x03\x02\x02', '\x02\u0353\u0358\x05\xA8U\x02\u0354\u0355\x07\x11\x02', '\x02\u0355\u0357\x05\xA8U\x02\u0356\u0354\x03\x02\x02', '\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0356\x03\x02\x02', '\x02\u0358\u0359\x03\x02\x02\x02\u0359\x8D\x03\x02\x02', '\x02\u035A\u0358\x03\x02\x02\x02\u035B\u035C\x07X\x02', '\x02\u035C\u035D\x05\xA8U\x02\u035D\x8F\x03\x02\x02', '\x02\u035E\u035F\x05\xA8U\x02\u035F\u0360\x07K\x02\x02', '\u0360\x91\x03\x02\x02\x02\u0361\u0362\x07Y\x02\x02', '\u0362\u0366\x05\x82B\x02\u0363\u0365\x05\x94K\x02\u0364', '\u0363\x03\x02\x02\x02\u0365\u0368\x03\x02\x02\x02\u0366', '\u0364\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367', '\x93\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369', '\u036A\x07Z\x02\x02\u036A\u036B\x05\x9EP\x02\u036B\u036C', '\x05~@\x02\u036C\u0370\x03\x02\x02\x02\u036D\u036E\x07', '[\x02\x02\u036E\u0370\x05~@\x02\u036F\u0369\x03\x02\x02', '\x02\u036F\u036D\x03\x02\x02\x02\u0370\x95\x03\x02\x02', '\x02\u0371\u0372\x07\x1E\x02\x02\u0372\u0373\x05\xA8U', '\x02\u0373\u0375\x07\x17\x02\x02\u0374\u0376\x05\x8CG', '\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02', '\x02\u0376\u0377\x03\x02\x02\x02\u0377\u0379\x07\x18\x02', '\x02\u0378\u037A\x05\x98M\x02\u0379\u0378\x03\x02\x02', '\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02\x02', '\x02\u037B\u037C\x05~@\x02\u037C\x97\x03\x02\x02\x02', '\u037D\u037E\x07\\\x02\x02\u037E\u037F\x05\x8CG\x02\u037F', '\x99\x03\x02\x02\x02\u0380\u0383\x07\x1A\x02\x02\u0381', '\u0384\x05~@\x02\u0382\u0384\x05\x82B\x02\u0383\u0381\x03', '\x02\x02\x02\u0383\u0382\x03\x02\x02\x02\u0384\u0385\x03', '\x02\x02\x02\u0385\u0388\x05\x82B\x02\u0386\u0389\x05', '~@\x02\u0387\u0389\x05\x82B\x02\u0388\u0386\x03\x02\x02', '\x02\u0388\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02\x02', '\x02\u038A\u038B\x05~@\x02\u038B\x9B\x03\x02\x02\x02', '\u038C\u038D\x07*\x02\x02\u038D\u038E\x05\x82B\x02\u038E', '\u038F\x05~@\x02\u038F\x9D\x03\x02\x02\x02\u0390\u0391', '\t\x10\x02\x02\u0391\x9F\x03\x02\x02\x02\u0392\u0393', '\x07-\x02\x02\u0393\u0394\x05\xA8U\x02\u0394\u0395\x05', '~@\x02\u0395\xA1\x03\x02\x02\x02\u0396\u0398\x07\x17', '\x02\x02\u0397\u0399\x05p9\x02\u0398\u0397\x03\x02\x02', '\x02\u0398\u0399\x03\x02\x02\x02\u0399\u03A0\x03\x02\x02', '\x02\u039A\u039C\x07\x11\x02\x02\u039B\u039D\x05p9\x02', '\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02', '\u039D\u039F\x03\x02\x02\x02\u039E\u039A\x03\x02\x02\x02', '\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02', '\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3\x03\x02\x02\x02', '\u03A2\u03A0\x03\x02\x02\x02\u03A3\u03B1\x07\x18\x02\x02', '\u03A4\u03AD\x07"\x02\x02\u03A5\u03AA\x05p9\x02\u03A6\u03A7', '\x07\x11\x02\x02\u03A7\u03A9\x05p9\x02\u03A8\u03A6\x03', '\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03', '\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AE\x03', '\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03A5\x03', '\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x03', '\x02\x02\x02\u03AF\u03B1\x07#\x02\x02\u03B0\u0396\x03', '\x02\x02\x02\u03B0\u03A4\x03\x02\x02\x02\u03B1\xA3\x03', '\x02\x02\x02\u03B2\u03B3\x05n8\x02\u03B3\xA5\x03\x02', '\x02\x02\u03B4\u03B6\t\x11\x02\x02\u03B5\u03B7\x07f\x02', '\x02\u03B6\u03B5\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02', '\x02\u03B7\xA7\x03\x02\x02\x02\u03B8\u03B9\t\x12\x02', '\x02\u03B9\xA9\x03\x02\x02\x02h\xAD\xAF\xBD\xC1', '\xC6\xCD\xD3\xD9\xDD\xE9\xF1\xFB\xFE\u0104\u0110\u0115', '\u011F\u0125\u012B\u0134\u0142\u0145\u0151\u0158\u015B\u015F\u0164\u0168', '\u0173\u0175\u017C\u0186\u018C\u0197\u019A\u01A0\u01A3\u01AB\u01AE\u01B4', '\u01B7\u01BF\u01C2\u01C8\u01CC\u01D5\u01DA\u01DF\u01E7\u01F6\u01F8\u01FD', '\u0207\u0218\u0224\u022E\u0234\u0237\u023B\u0242\u0256\u0268\u026C\u0271', '\u0275\u0279\u027E\u0283\u0287\u029F\u02DA\u02DC\u02E6\u02ED\u02F5\u02F9', '\u0301\u0305\u0307\u0312\u0328\u032C\u0332\u0336\u033C\u0340\u0346\u0351', '\u0358\u0366\u036F\u0375\u0379\u0383\u0388\u0398\u039C\u03A0\u03AA\u03AD', '\u03B0\u03B6'].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'pragma'", "';'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='", "'='", "'as'", "'import'", "'*'", "'from'", "'{'", "','", "'}'", "'contract'", "'interface'", "'library'", "'is'", "'('", "')'", "'using'", "'for'", "'struct'", "'constructor'", "'modifier'", "'function'", "'returns'", "'event'", "'enum'", "'['", "']'", "'.'", "'mapping'", "'=>'", "'memory'", "'storage'", "'calldata'", "'if'", "'else'", "'while'", "'assembly'", "'do'", "'return'", "'throw'", "'emit'", "'var'", "'address'", "'bool'", "'string'", "'byte'", "'++'", "'--'", "'new'", "'+'", "'-'", "'after'", "'delete'", "'!'", "'**'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'=='", "'!='", "'&&'", "'||'", "'?'", "':'", "'|='", "'^='", "'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", "':='", "'=:'", "'switch'", "'case'", "'default'", "'->'", null, null, null, null, null, null, null, null, null, null, null, null, "'anonymous'", "'break'", "'constant'", "'continue'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'", "'public'", "'pure'", "'view'"];

var symbolicNames = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Int", "Uint", "Byte", "Fixed", "Ufixed", "VersionLiteral", "BooleanLiteral", "DecimalNumber", "HexNumber", "NumberUnit", "HexLiteral", "ReservedKeyword", "AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "ContinueKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", "PayableKeyword", "PrivateKeyword", "PublicKeyword", "PureKeyword", "ViewKeyword", "Identifier", "StringLiteral", "WS", "COMMENT", "LINE_COMMENT"];

var ruleNames = ["sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", "versionOperator", "versionConstraint", "importDeclaration", "importDirective", "contractDefinition", "inheritanceSpecifier", "contractPart", "stateVariableDeclaration", "usingForDeclaration", "structDefinition", "constructorDefinition", "modifierDefinition", "modifierInvocation", "functionDefinition", "returnParameters", "modifierList", "eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", "eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", "variableDeclaration", "typeName", "userDefinedTypeName", "mapping", "functionTypeName", "storageLocation", "stateMutability", "block", "statement", "expressionStatement", "ifStatement", "whileStatement", "simpleStatement", "forStatement", "inlineAssemblyStatement", "doWhileStatement", "continueStatement", "breakStatement", "returnStatement", "throwStatement", "emitStatement", "variableDeclarationStatement", "variableDeclarationList", "identifierList", "elementaryTypeName", "expression", "primaryExpression", "expressionList", "nameValueList", "nameValue", "functionCallArguments", "functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", "assemblyIdentifierOrList", "assemblyIdentifierList", "assemblyStackAssignment", "labelDefinition", "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", "assemblyFunctionReturns", "assemblyFor", "assemblyIf", "assemblyLiteral", "subAssembly", "tupleExpression", "elementaryTypeNameExpression", "numberLiteral", "identifier"];

function SolidityParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SolidityParser.prototype = Object.create(antlr4.Parser.prototype);
SolidityParser.prototype.constructor = SolidityParser;

Object.defineProperty(SolidityParser.prototype, "atn", {
    get: function get() {
        return atn;
    }
});

SolidityParser.EOF = antlr4.Token.EOF;
SolidityParser.T__0 = 1;
SolidityParser.T__1 = 2;
SolidityParser.T__2 = 3;
SolidityParser.T__3 = 4;
SolidityParser.T__4 = 5;
SolidityParser.T__5 = 6;
SolidityParser.T__6 = 7;
SolidityParser.T__7 = 8;
SolidityParser.T__8 = 9;
SolidityParser.T__9 = 10;
SolidityParser.T__10 = 11;
SolidityParser.T__11 = 12;
SolidityParser.T__12 = 13;
SolidityParser.T__13 = 14;
SolidityParser.T__14 = 15;
SolidityParser.T__15 = 16;
SolidityParser.T__16 = 17;
SolidityParser.T__17 = 18;
SolidityParser.T__18 = 19;
SolidityParser.T__19 = 20;
SolidityParser.T__20 = 21;
SolidityParser.T__21 = 22;
SolidityParser.T__22 = 23;
SolidityParser.T__23 = 24;
SolidityParser.T__24 = 25;
SolidityParser.T__25 = 26;
SolidityParser.T__26 = 27;
SolidityParser.T__27 = 28;
SolidityParser.T__28 = 29;
SolidityParser.T__29 = 30;
SolidityParser.T__30 = 31;
SolidityParser.T__31 = 32;
SolidityParser.T__32 = 33;
SolidityParser.T__33 = 34;
SolidityParser.T__34 = 35;
SolidityParser.T__35 = 36;
SolidityParser.T__36 = 37;
SolidityParser.T__37 = 38;
SolidityParser.T__38 = 39;
SolidityParser.T__39 = 40;
SolidityParser.T__40 = 41;
SolidityParser.T__41 = 42;
SolidityParser.T__42 = 43;
SolidityParser.T__43 = 44;
SolidityParser.T__44 = 45;
SolidityParser.T__45 = 46;
SolidityParser.T__46 = 47;
SolidityParser.T__47 = 48;
SolidityParser.T__48 = 49;
SolidityParser.T__49 = 50;
SolidityParser.T__50 = 51;
SolidityParser.T__51 = 52;
SolidityParser.T__52 = 53;
SolidityParser.T__53 = 54;
SolidityParser.T__54 = 55;
SolidityParser.T__55 = 56;
SolidityParser.T__56 = 57;
SolidityParser.T__57 = 58;
SolidityParser.T__58 = 59;
SolidityParser.T__59 = 60;
SolidityParser.T__60 = 61;
SolidityParser.T__61 = 62;
SolidityParser.T__62 = 63;
SolidityParser.T__63 = 64;
SolidityParser.T__64 = 65;
SolidityParser.T__65 = 66;
SolidityParser.T__66 = 67;
SolidityParser.T__67 = 68;
SolidityParser.T__68 = 69;
SolidityParser.T__69 = 70;
SolidityParser.T__70 = 71;
SolidityParser.T__71 = 72;
SolidityParser.T__72 = 73;
SolidityParser.T__73 = 74;
SolidityParser.T__74 = 75;
SolidityParser.T__75 = 76;
SolidityParser.T__76 = 77;
SolidityParser.T__77 = 78;
SolidityParser.T__78 = 79;
SolidityParser.T__79 = 80;
SolidityParser.T__80 = 81;
SolidityParser.T__81 = 82;
SolidityParser.T__82 = 83;
SolidityParser.T__83 = 84;
SolidityParser.T__84 = 85;
SolidityParser.T__85 = 86;
SolidityParser.T__86 = 87;
SolidityParser.T__87 = 88;
SolidityParser.T__88 = 89;
SolidityParser.T__89 = 90;
SolidityParser.Int = 91;
SolidityParser.Uint = 92;
SolidityParser.Byte = 93;
SolidityParser.Fixed = 94;
SolidityParser.Ufixed = 95;
SolidityParser.VersionLiteral = 96;
SolidityParser.BooleanLiteral = 97;
SolidityParser.DecimalNumber = 98;
SolidityParser.HexNumber = 99;
SolidityParser.NumberUnit = 100;
SolidityParser.HexLiteral = 101;
SolidityParser.ReservedKeyword = 102;
SolidityParser.AnonymousKeyword = 103;
SolidityParser.BreakKeyword = 104;
SolidityParser.ConstantKeyword = 105;
SolidityParser.ContinueKeyword = 106;
SolidityParser.ExternalKeyword = 107;
SolidityParser.IndexedKeyword = 108;
SolidityParser.InternalKeyword = 109;
SolidityParser.PayableKeyword = 110;
SolidityParser.PrivateKeyword = 111;
SolidityParser.PublicKeyword = 112;
SolidityParser.PureKeyword = 113;
SolidityParser.ViewKeyword = 114;
SolidityParser.Identifier = 115;
SolidityParser.StringLiteral = 116;
SolidityParser.WS = 117;
SolidityParser.COMMENT = 118;
SolidityParser.LINE_COMMENT = 119;

SolidityParser.RULE_sourceUnit = 0;
SolidityParser.RULE_pragmaDirective = 1;
SolidityParser.RULE_pragmaName = 2;
SolidityParser.RULE_pragmaValue = 3;
SolidityParser.RULE_version = 4;
SolidityParser.RULE_versionOperator = 5;
SolidityParser.RULE_versionConstraint = 6;
SolidityParser.RULE_importDeclaration = 7;
SolidityParser.RULE_importDirective = 8;
SolidityParser.RULE_contractDefinition = 9;
SolidityParser.RULE_inheritanceSpecifier = 10;
SolidityParser.RULE_contractPart = 11;
SolidityParser.RULE_stateVariableDeclaration = 12;
SolidityParser.RULE_usingForDeclaration = 13;
SolidityParser.RULE_structDefinition = 14;
SolidityParser.RULE_constructorDefinition = 15;
SolidityParser.RULE_modifierDefinition = 16;
SolidityParser.RULE_modifierInvocation = 17;
SolidityParser.RULE_functionDefinition = 18;
SolidityParser.RULE_returnParameters = 19;
SolidityParser.RULE_modifierList = 20;
SolidityParser.RULE_eventDefinition = 21;
SolidityParser.RULE_enumValue = 22;
SolidityParser.RULE_enumDefinition = 23;
SolidityParser.RULE_parameterList = 24;
SolidityParser.RULE_parameter = 25;
SolidityParser.RULE_eventParameterList = 26;
SolidityParser.RULE_eventParameter = 27;
SolidityParser.RULE_functionTypeParameterList = 28;
SolidityParser.RULE_functionTypeParameter = 29;
SolidityParser.RULE_variableDeclaration = 30;
SolidityParser.RULE_typeName = 31;
SolidityParser.RULE_userDefinedTypeName = 32;
SolidityParser.RULE_mapping = 33;
SolidityParser.RULE_functionTypeName = 34;
SolidityParser.RULE_storageLocation = 35;
SolidityParser.RULE_stateMutability = 36;
SolidityParser.RULE_block = 37;
SolidityParser.RULE_statement = 38;
SolidityParser.RULE_expressionStatement = 39;
SolidityParser.RULE_ifStatement = 40;
SolidityParser.RULE_whileStatement = 41;
SolidityParser.RULE_simpleStatement = 42;
SolidityParser.RULE_forStatement = 43;
SolidityParser.RULE_inlineAssemblyStatement = 44;
SolidityParser.RULE_doWhileStatement = 45;
SolidityParser.RULE_continueStatement = 46;
SolidityParser.RULE_breakStatement = 47;
SolidityParser.RULE_returnStatement = 48;
SolidityParser.RULE_throwStatement = 49;
SolidityParser.RULE_emitStatement = 50;
SolidityParser.RULE_variableDeclarationStatement = 51;
SolidityParser.RULE_variableDeclarationList = 52;
SolidityParser.RULE_identifierList = 53;
SolidityParser.RULE_elementaryTypeName = 54;
SolidityParser.RULE_expression = 55;
SolidityParser.RULE_primaryExpression = 56;
SolidityParser.RULE_expressionList = 57;
SolidityParser.RULE_nameValueList = 58;
SolidityParser.RULE_nameValue = 59;
SolidityParser.RULE_functionCallArguments = 60;
SolidityParser.RULE_functionCall = 61;
SolidityParser.RULE_assemblyBlock = 62;
SolidityParser.RULE_assemblyItem = 63;
SolidityParser.RULE_assemblyExpression = 64;
SolidityParser.RULE_assemblyCall = 65;
SolidityParser.RULE_assemblyLocalDefinition = 66;
SolidityParser.RULE_assemblyAssignment = 67;
SolidityParser.RULE_assemblyIdentifierOrList = 68;
SolidityParser.RULE_assemblyIdentifierList = 69;
SolidityParser.RULE_assemblyStackAssignment = 70;
SolidityParser.RULE_labelDefinition = 71;
SolidityParser.RULE_assemblySwitch = 72;
SolidityParser.RULE_assemblyCase = 73;
SolidityParser.RULE_assemblyFunctionDefinition = 74;
SolidityParser.RULE_assemblyFunctionReturns = 75;
SolidityParser.RULE_assemblyFor = 76;
SolidityParser.RULE_assemblyIf = 77;
SolidityParser.RULE_assemblyLiteral = 78;
SolidityParser.RULE_subAssembly = 79;
SolidityParser.RULE_tupleExpression = 80;
SolidityParser.RULE_elementaryTypeNameExpression = 81;
SolidityParser.RULE_numberLiteral = 82;
SolidityParser.RULE_identifier = 83;

function SourceUnitContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_sourceUnit;
    return this;
}

SourceUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceUnitContext.prototype.constructor = SourceUnitContext;

SourceUnitContext.prototype.EOF = function () {
    return this.getToken(SolidityParser.EOF, 0);
};

SourceUnitContext.prototype.pragmaDirective = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(PragmaDirectiveContext);
    } else {
        return this.getTypedRuleContext(PragmaDirectiveContext, i);
    }
};

SourceUnitContext.prototype.importDirective = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ImportDirectiveContext);
    } else {
        return this.getTypedRuleContext(ImportDirectiveContext, i);
    }
};

SourceUnitContext.prototype.contractDefinition = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ContractDefinitionContext);
    } else {
        return this.getTypedRuleContext(ContractDefinitionContext, i);
    }
};

SourceUnitContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterSourceUnit(this);
    }
};

SourceUnitContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitSourceUnit(this);
    }
};

SolidityParser.SourceUnitContext = SourceUnitContext;

SolidityParser.prototype.sourceUnit = function () {

    var localctx = new SourceUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SolidityParser.RULE_sourceUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__0 | 1 << SolidityParser.T__10 | 1 << SolidityParser.T__16 | 1 << SolidityParser.T__17 | 1 << SolidityParser.T__18)) !== 0) {
            this.state = 171;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__0:
                    this.state = 168;
                    this.pragmaDirective();
                    break;
                case SolidityParser.T__10:
                    this.state = 169;
                    this.importDirective();
                    break;
                case SolidityParser.T__16:
                case SolidityParser.T__17:
                case SolidityParser.T__18:
                    this.state = 170;
                    this.contractDefinition();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 175;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 176;
        this.match(SolidityParser.EOF);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PragmaDirectiveContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_pragmaDirective;
    return this;
}

PragmaDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PragmaDirectiveContext.prototype.constructor = PragmaDirectiveContext;

PragmaDirectiveContext.prototype.pragmaName = function () {
    return this.getTypedRuleContext(PragmaNameContext, 0);
};

PragmaDirectiveContext.prototype.pragmaValue = function () {
    return this.getTypedRuleContext(PragmaValueContext, 0);
};

PragmaDirectiveContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterPragmaDirective(this);
    }
};

PragmaDirectiveContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitPragmaDirective(this);
    }
};

SolidityParser.PragmaDirectiveContext = PragmaDirectiveContext;

SolidityParser.prototype.pragmaDirective = function () {

    var localctx = new PragmaDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SolidityParser.RULE_pragmaDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(SolidityParser.T__0);
        this.state = 179;
        this.pragmaName();
        this.state = 180;
        this.pragmaValue();
        this.state = 181;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PragmaNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_pragmaName;
    return this;
}

PragmaNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PragmaNameContext.prototype.constructor = PragmaNameContext;

PragmaNameContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

PragmaNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterPragmaName(this);
    }
};

PragmaNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitPragmaName(this);
    }
};

SolidityParser.PragmaNameContext = PragmaNameContext;

SolidityParser.prototype.pragmaName = function () {

    var localctx = new PragmaNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SolidityParser.RULE_pragmaName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.identifier();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PragmaValueContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_pragmaValue;
    return this;
}

PragmaValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PragmaValueContext.prototype.constructor = PragmaValueContext;

PragmaValueContext.prototype.version = function () {
    return this.getTypedRuleContext(VersionContext, 0);
};

PragmaValueContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

PragmaValueContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterPragmaValue(this);
    }
};

PragmaValueContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitPragmaValue(this);
    }
};

SolidityParser.PragmaValueContext = PragmaValueContext;

SolidityParser.prototype.pragmaValue = function () {

    var localctx = new PragmaValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SolidityParser.RULE_pragmaValue);
    try {
        this.state = 187;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 185;
                this.version();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 186;
                this.expression(0);
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.versionConstraint = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(VersionConstraintContext);
    } else {
        return this.getTypedRuleContext(VersionConstraintContext, i);
    }
};

VersionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterVersion(this);
    }
};

VersionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitVersion(this);
    }
};

SolidityParser.VersionContext = VersionContext;

SolidityParser.prototype.version = function () {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SolidityParser.RULE_version);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.versionConstraint();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__2 | 1 << SolidityParser.T__3 | 1 << SolidityParser.T__4 | 1 << SolidityParser.T__5 | 1 << SolidityParser.T__6 | 1 << SolidityParser.T__7 | 1 << SolidityParser.T__8)) !== 0 || _la === SolidityParser.VersionLiteral) {
            this.state = 190;
            this.versionConstraint();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionOperatorContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_versionOperator;
    return this;
}

VersionOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionOperatorContext.prototype.constructor = VersionOperatorContext;

VersionOperatorContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterVersionOperator(this);
    }
};

VersionOperatorContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitVersionOperator(this);
    }
};

SolidityParser.VersionOperatorContext = VersionOperatorContext;

SolidityParser.prototype.versionOperator = function () {

    var localctx = new VersionOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SolidityParser.RULE_versionOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__2 | 1 << SolidityParser.T__3 | 1 << SolidityParser.T__4 | 1 << SolidityParser.T__5 | 1 << SolidityParser.T__6 | 1 << SolidityParser.T__7 | 1 << SolidityParser.T__8)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionConstraintContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_versionConstraint;
    return this;
}

VersionConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionConstraintContext.prototype.constructor = VersionConstraintContext;

VersionConstraintContext.prototype.VersionLiteral = function () {
    return this.getToken(SolidityParser.VersionLiteral, 0);
};

VersionConstraintContext.prototype.versionOperator = function () {
    return this.getTypedRuleContext(VersionOperatorContext, 0);
};

VersionConstraintContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterVersionConstraint(this);
    }
};

VersionConstraintContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitVersionConstraint(this);
    }
};

SolidityParser.VersionConstraintContext = VersionConstraintContext;

SolidityParser.prototype.versionConstraint = function () {

    var localctx = new VersionConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SolidityParser.RULE_versionConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__2 | 1 << SolidityParser.T__3 | 1 << SolidityParser.T__4 | 1 << SolidityParser.T__5 | 1 << SolidityParser.T__6 | 1 << SolidityParser.T__7 | 1 << SolidityParser.T__8)) !== 0) {
            this.state = 195;
            this.versionOperator();
        }

        this.state = 198;
        this.match(SolidityParser.VersionLiteral);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_importDeclaration;
    return this;
}

ImportDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclarationContext.prototype.constructor = ImportDeclarationContext;

ImportDeclarationContext.prototype.identifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
};

ImportDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterImportDeclaration(this);
    }
};

ImportDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitImportDeclaration(this);
    }
};

SolidityParser.ImportDeclarationContext = ImportDeclarationContext;

SolidityParser.prototype.importDeclaration = function () {

    var localctx = new ImportDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SolidityParser.RULE_importDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.identifier();
        this.state = 203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__9) {
            this.state = 201;
            this.match(SolidityParser.T__9);
            this.state = 202;
            this.identifier();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportDirectiveContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_importDirective;
    return this;
}

ImportDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDirectiveContext.prototype.constructor = ImportDirectiveContext;

ImportDirectiveContext.prototype.StringLiteral = function () {
    return this.getToken(SolidityParser.StringLiteral, 0);
};

ImportDirectiveContext.prototype.identifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
};

ImportDirectiveContext.prototype.importDeclaration = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ImportDeclarationContext);
    } else {
        return this.getTypedRuleContext(ImportDeclarationContext, i);
    }
};

ImportDirectiveContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterImportDirective(this);
    }
};

ImportDirectiveContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitImportDirective(this);
    }
};

SolidityParser.ImportDirectiveContext = ImportDirectiveContext;

SolidityParser.prototype.importDirective = function () {

    var localctx = new ImportDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SolidityParser.RULE_importDirective);
    var _la = 0; // Token type
    try {
        this.state = 239;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 205;
                this.match(SolidityParser.T__10);
                this.state = 206;
                this.match(SolidityParser.StringLiteral);
                this.state = 209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__9) {
                    this.state = 207;
                    this.match(SolidityParser.T__9);
                    this.state = 208;
                    this.identifier();
                }

                this.state = 211;
                this.match(SolidityParser.T__1);
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 212;
                this.match(SolidityParser.T__10);
                this.state = 215;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.T__11:
                        this.state = 213;
                        this.match(SolidityParser.T__11);
                        break;
                    case SolidityParser.T__12:
                    case SolidityParser.Identifier:
                        this.state = 214;
                        this.identifier();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__9) {
                    this.state = 217;
                    this.match(SolidityParser.T__9);
                    this.state = 218;
                    this.identifier();
                }

                this.state = 221;
                this.match(SolidityParser.T__12);
                this.state = 222;
                this.match(SolidityParser.StringLiteral);
                this.state = 223;
                this.match(SolidityParser.T__1);
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 224;
                this.match(SolidityParser.T__10);
                this.state = 225;
                this.match(SolidityParser.T__13);
                this.state = 226;
                this.importDeclaration();
                this.state = 231;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__14) {
                    this.state = 227;
                    this.match(SolidityParser.T__14);
                    this.state = 228;
                    this.importDeclaration();
                    this.state = 233;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 234;
                this.match(SolidityParser.T__15);
                this.state = 235;
                this.match(SolidityParser.T__12);
                this.state = 236;
                this.match(SolidityParser.StringLiteral);
                this.state = 237;
                this.match(SolidityParser.T__1);
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContractDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_contractDefinition;
    return this;
}

ContractDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContractDefinitionContext.prototype.constructor = ContractDefinitionContext;

ContractDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

ContractDefinitionContext.prototype.inheritanceSpecifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InheritanceSpecifierContext);
    } else {
        return this.getTypedRuleContext(InheritanceSpecifierContext, i);
    }
};

ContractDefinitionContext.prototype.contractPart = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ContractPartContext);
    } else {
        return this.getTypedRuleContext(ContractPartContext, i);
    }
};

ContractDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterContractDefinition(this);
    }
};

ContractDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitContractDefinition(this);
    }
};

SolidityParser.ContractDefinitionContext = ContractDefinitionContext;

SolidityParser.prototype.contractDefinition = function () {

    var localctx = new ContractDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SolidityParser.RULE_contractDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__16 | 1 << SolidityParser.T__17 | 1 << SolidityParser.T__18)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 242;
        this.identifier();
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__19) {
            this.state = 243;
            this.match(SolidityParser.T__19);
            this.state = 244;
            this.inheritanceSpecifier();
            this.state = 249;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__14) {
                this.state = 245;
                this.match(SolidityParser.T__14);
                this.state = 246;
                this.inheritanceSpecifier();
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 254;
        this.match(SolidityParser.T__13);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__12 | 1 << SolidityParser.T__22 | 1 << SolidityParser.T__24 | 1 << SolidityParser.T__25 | 1 << SolidityParser.T__26 | 1 << SolidityParser.T__27 | 1 << SolidityParser.T__29 | 1 << SolidityParser.T__30)) !== 0 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
            this.state = 255;
            this.contractPart();
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 261;
        this.match(SolidityParser.T__15);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InheritanceSpecifierContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_inheritanceSpecifier;
    return this;
}

InheritanceSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InheritanceSpecifierContext.prototype.constructor = InheritanceSpecifierContext;

InheritanceSpecifierContext.prototype.userDefinedTypeName = function () {
    return this.getTypedRuleContext(UserDefinedTypeNameContext, 0);
};

InheritanceSpecifierContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};

InheritanceSpecifierContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterInheritanceSpecifier(this);
    }
};

InheritanceSpecifierContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitInheritanceSpecifier(this);
    }
};

SolidityParser.InheritanceSpecifierContext = InheritanceSpecifierContext;

SolidityParser.prototype.inheritanceSpecifier = function () {

    var localctx = new InheritanceSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SolidityParser.RULE_inheritanceSpecifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.userDefinedTypeName();
        this.state = 275;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__20) {
            this.state = 264;
            this.match(SolidityParser.T__20);
            this.state = 265;
            this.expression(0);
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__14) {
                this.state = 266;
                this.match(SolidityParser.T__14);
                this.state = 267;
                this.expression(0);
                this.state = 272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 273;
            this.match(SolidityParser.T__21);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContractPartContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_contractPart;
    return this;
}

ContractPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContractPartContext.prototype.constructor = ContractPartContext;

ContractPartContext.prototype.stateVariableDeclaration = function () {
    return this.getTypedRuleContext(StateVariableDeclarationContext, 0);
};

ContractPartContext.prototype.usingForDeclaration = function () {
    return this.getTypedRuleContext(UsingForDeclarationContext, 0);
};

ContractPartContext.prototype.structDefinition = function () {
    return this.getTypedRuleContext(StructDefinitionContext, 0);
};

ContractPartContext.prototype.constructorDefinition = function () {
    return this.getTypedRuleContext(ConstructorDefinitionContext, 0);
};

ContractPartContext.prototype.modifierDefinition = function () {
    return this.getTypedRuleContext(ModifierDefinitionContext, 0);
};

ContractPartContext.prototype.functionDefinition = function () {
    return this.getTypedRuleContext(FunctionDefinitionContext, 0);
};

ContractPartContext.prototype.eventDefinition = function () {
    return this.getTypedRuleContext(EventDefinitionContext, 0);
};

ContractPartContext.prototype.enumDefinition = function () {
    return this.getTypedRuleContext(EnumDefinitionContext, 0);
};

ContractPartContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterContractPart(this);
    }
};

ContractPartContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitContractPart(this);
    }
};

SolidityParser.ContractPartContext = ContractPartContext;

SolidityParser.prototype.contractPart = function () {

    var localctx = new ContractPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SolidityParser.RULE_contractPart);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 277;
                this.stateVariableDeclaration();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 278;
                this.usingForDeclaration();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 279;
                this.structDefinition();
                break;

            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 280;
                this.constructorDefinition();
                break;

            case 5:
                this.enterOuterAlt(localctx, 5);
                this.state = 281;
                this.modifierDefinition();
                break;

            case 6:
                this.enterOuterAlt(localctx, 6);
                this.state = 282;
                this.functionDefinition();
                break;

            case 7:
                this.enterOuterAlt(localctx, 7);
                this.state = 283;
                this.eventDefinition();
                break;

            case 8:
                this.enterOuterAlt(localctx, 8);
                this.state = 284;
                this.enumDefinition();
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StateVariableDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_stateVariableDeclaration;
    return this;
}

StateVariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StateVariableDeclarationContext.prototype.constructor = StateVariableDeclarationContext;

StateVariableDeclarationContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

StateVariableDeclarationContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

StateVariableDeclarationContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

StateVariableDeclarationContext.prototype.PublicKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.PublicKeyword);
    } else {
        return this.getToken(SolidityParser.PublicKeyword, i);
    }
};

StateVariableDeclarationContext.prototype.InternalKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.InternalKeyword);
    } else {
        return this.getToken(SolidityParser.InternalKeyword, i);
    }
};

StateVariableDeclarationContext.prototype.PrivateKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.PrivateKeyword);
    } else {
        return this.getToken(SolidityParser.PrivateKeyword, i);
    }
};

StateVariableDeclarationContext.prototype.ConstantKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.ConstantKeyword);
    } else {
        return this.getToken(SolidityParser.ConstantKeyword, i);
    }
};

StateVariableDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterStateVariableDeclaration(this);
    }
};

StateVariableDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitStateVariableDeclaration(this);
    }
};

SolidityParser.StateVariableDeclarationContext = StateVariableDeclarationContext;

SolidityParser.prototype.stateVariableDeclaration = function () {

    var localctx = new StateVariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SolidityParser.RULE_stateVariableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.typeName(0);
        this.state = 291;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la - 105 & ~0x1f) == 0 && (1 << _la - 105 & (1 << SolidityParser.ConstantKeyword - 105 | 1 << SolidityParser.InternalKeyword - 105 | 1 << SolidityParser.PrivateKeyword - 105 | 1 << SolidityParser.PublicKeyword - 105)) !== 0) {
            this.state = 288;
            _la = this._input.LA(1);
            if (!((_la - 105 & ~0x1f) == 0 && (1 << _la - 105 & (1 << SolidityParser.ConstantKeyword - 105 | 1 << SolidityParser.InternalKeyword - 105 | 1 << SolidityParser.PrivateKeyword - 105 | 1 << SolidityParser.PublicKeyword - 105)) !== 0)) {
                this._errHandler.recoverInline(this);
            } else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 294;
        this.identifier();
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__8) {
            this.state = 295;
            this.match(SolidityParser.T__8);
            this.state = 296;
            this.expression(0);
        }

        this.state = 299;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsingForDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_usingForDeclaration;
    return this;
}

UsingForDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsingForDeclarationContext.prototype.constructor = UsingForDeclarationContext;

UsingForDeclarationContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

UsingForDeclarationContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

UsingForDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterUsingForDeclaration(this);
    }
};

UsingForDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitUsingForDeclaration(this);
    }
};

SolidityParser.UsingForDeclarationContext = UsingForDeclarationContext;

SolidityParser.prototype.usingForDeclaration = function () {

    var localctx = new UsingForDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SolidityParser.RULE_usingForDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(SolidityParser.T__22);
        this.state = 302;
        this.identifier();
        this.state = 303;
        this.match(SolidityParser.T__23);
        this.state = 306;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__11:
                this.state = 304;
                this.match(SolidityParser.T__11);
                break;
            case SolidityParser.T__12:
            case SolidityParser.T__27:
            case SolidityParser.T__34:
            case SolidityParser.T__47:
            case SolidityParser.T__48:
            case SolidityParser.T__49:
            case SolidityParser.T__50:
            case SolidityParser.T__51:
            case SolidityParser.Int:
            case SolidityParser.Uint:
            case SolidityParser.Byte:
            case SolidityParser.Fixed:
            case SolidityParser.Ufixed:
            case SolidityParser.Identifier:
                this.state = 305;
                this.typeName(0);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 308;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_structDefinition;
    return this;
}

StructDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructDefinitionContext.prototype.constructor = StructDefinitionContext;

StructDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

StructDefinitionContext.prototype.variableDeclaration = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationContext, i);
    }
};

StructDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterStructDefinition(this);
    }
};

StructDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitStructDefinition(this);
    }
};

SolidityParser.StructDefinitionContext = StructDefinitionContext;

SolidityParser.prototype.structDefinition = function () {

    var localctx = new StructDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SolidityParser.RULE_structDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.match(SolidityParser.T__24);
        this.state = 311;
        this.identifier();
        this.state = 312;
        this.match(SolidityParser.T__13);
        this.state = 323;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
            this.state = 313;
            this.variableDeclaration();
            this.state = 314;
            this.match(SolidityParser.T__1);
            this.state = 320;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
                this.state = 315;
                this.variableDeclaration();
                this.state = 316;
                this.match(SolidityParser.T__1);
                this.state = 322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 325;
        this.match(SolidityParser.T__15);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstructorDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_constructorDefinition;
    return this;
}

ConstructorDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructorDefinitionContext.prototype.constructor = ConstructorDefinitionContext;

ConstructorDefinitionContext.prototype.parameterList = function () {
    return this.getTypedRuleContext(ParameterListContext, 0);
};

ConstructorDefinitionContext.prototype.modifierList = function () {
    return this.getTypedRuleContext(ModifierListContext, 0);
};

ConstructorDefinitionContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

ConstructorDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterConstructorDefinition(this);
    }
};

ConstructorDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitConstructorDefinition(this);
    }
};

SolidityParser.ConstructorDefinitionContext = ConstructorDefinitionContext;

SolidityParser.prototype.constructorDefinition = function () {

    var localctx = new ConstructorDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SolidityParser.RULE_constructorDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this.match(SolidityParser.T__25);
        this.state = 328;
        this.parameterList();
        this.state = 329;
        this.modifierList();
        this.state = 330;
        this.block();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModifierDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_modifierDefinition;
    return this;
}

ModifierDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierDefinitionContext.prototype.constructor = ModifierDefinitionContext;

ModifierDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

ModifierDefinitionContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

ModifierDefinitionContext.prototype.parameterList = function () {
    return this.getTypedRuleContext(ParameterListContext, 0);
};

ModifierDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterModifierDefinition(this);
    }
};

ModifierDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitModifierDefinition(this);
    }
};

SolidityParser.ModifierDefinitionContext = ModifierDefinitionContext;

SolidityParser.prototype.modifierDefinition = function () {

    var localctx = new ModifierDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SolidityParser.RULE_modifierDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(SolidityParser.T__26);
        this.state = 333;
        this.identifier();
        this.state = 335;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__20) {
            this.state = 334;
            this.parameterList();
        }

        this.state = 337;
        this.block();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModifierInvocationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_modifierInvocation;
    return this;
}

ModifierInvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierInvocationContext.prototype.constructor = ModifierInvocationContext;

ModifierInvocationContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

ModifierInvocationContext.prototype.expressionList = function () {
    return this.getTypedRuleContext(ExpressionListContext, 0);
};

ModifierInvocationContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterModifierInvocation(this);
    }
};

ModifierInvocationContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitModifierInvocation(this);
    }
};

SolidityParser.ModifierInvocationContext = ModifierInvocationContext;

SolidityParser.prototype.modifierInvocation = function () {

    var localctx = new ModifierInvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SolidityParser.RULE_modifierInvocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.identifier();
        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__20) {
            this.state = 340;
            this.match(SolidityParser.T__20);
            this.state = 342;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
                this.state = 341;
                this.expressionList();
            }

            this.state = 344;
            this.match(SolidityParser.T__21);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_functionDefinition;
    return this;
}

FunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefinitionContext.prototype.constructor = FunctionDefinitionContext;

FunctionDefinitionContext.prototype.parameterList = function () {
    return this.getTypedRuleContext(ParameterListContext, 0);
};

FunctionDefinitionContext.prototype.modifierList = function () {
    return this.getTypedRuleContext(ModifierListContext, 0);
};

FunctionDefinitionContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

FunctionDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

FunctionDefinitionContext.prototype.returnParameters = function () {
    return this.getTypedRuleContext(ReturnParametersContext, 0);
};

FunctionDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterFunctionDefinition(this);
    }
};

FunctionDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitFunctionDefinition(this);
    }
};

SolidityParser.FunctionDefinitionContext = FunctionDefinitionContext;

SolidityParser.prototype.functionDefinition = function () {

    var localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SolidityParser.RULE_functionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(SolidityParser.T__27);
        this.state = 349;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
            this.state = 348;
            this.identifier();
        }

        this.state = 351;
        this.parameterList();
        this.state = 352;
        this.modifierList();
        this.state = 354;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__28) {
            this.state = 353;
            this.returnParameters();
        }

        this.state = 358;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__1:
                this.state = 356;
                this.match(SolidityParser.T__1);
                break;
            case SolidityParser.T__13:
                this.state = 357;
                this.block();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnParametersContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_returnParameters;
    return this;
}

ReturnParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnParametersContext.prototype.constructor = ReturnParametersContext;

ReturnParametersContext.prototype.parameterList = function () {
    return this.getTypedRuleContext(ParameterListContext, 0);
};

ReturnParametersContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterReturnParameters(this);
    }
};

ReturnParametersContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitReturnParameters(this);
    }
};

SolidityParser.ReturnParametersContext = ReturnParametersContext;

SolidityParser.prototype.returnParameters = function () {

    var localctx = new ReturnParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SolidityParser.RULE_returnParameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(SolidityParser.T__28);
        this.state = 361;
        this.parameterList();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModifierListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_modifierList;
    return this;
}

ModifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierListContext.prototype.constructor = ModifierListContext;

ModifierListContext.prototype.modifierInvocation = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ModifierInvocationContext);
    } else {
        return this.getTypedRuleContext(ModifierInvocationContext, i);
    }
};

ModifierListContext.prototype.stateMutability = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StateMutabilityContext);
    } else {
        return this.getTypedRuleContext(StateMutabilityContext, i);
    }
};

ModifierListContext.prototype.ExternalKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.ExternalKeyword);
    } else {
        return this.getToken(SolidityParser.ExternalKeyword, i);
    }
};

ModifierListContext.prototype.PublicKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.PublicKeyword);
    } else {
        return this.getToken(SolidityParser.PublicKeyword, i);
    }
};

ModifierListContext.prototype.InternalKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.InternalKeyword);
    } else {
        return this.getToken(SolidityParser.InternalKeyword, i);
    }
};

ModifierListContext.prototype.PrivateKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.PrivateKeyword);
    } else {
        return this.getToken(SolidityParser.PrivateKeyword, i);
    }
};

ModifierListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterModifierList(this);
    }
};

ModifierListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitModifierList(this);
    }
};

SolidityParser.ModifierListContext = ModifierListContext;

SolidityParser.prototype.modifierList = function () {

    var localctx = new ModifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SolidityParser.RULE_modifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SolidityParser.T__12 || (_la - 105 & ~0x1f) == 0 && (1 << _la - 105 & (1 << SolidityParser.ConstantKeyword - 105 | 1 << SolidityParser.ExternalKeyword - 105 | 1 << SolidityParser.InternalKeyword - 105 | 1 << SolidityParser.PayableKeyword - 105 | 1 << SolidityParser.PrivateKeyword - 105 | 1 << SolidityParser.PublicKeyword - 105 | 1 << SolidityParser.PureKeyword - 105 | 1 << SolidityParser.ViewKeyword - 105 | 1 << SolidityParser.Identifier - 105)) !== 0) {
            this.state = 369;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SolidityParser.T__12:
                case SolidityParser.Identifier:
                    this.state = 363;
                    this.modifierInvocation();
                    break;
                case SolidityParser.ConstantKeyword:
                case SolidityParser.PayableKeyword:
                case SolidityParser.PureKeyword:
                case SolidityParser.ViewKeyword:
                    this.state = 364;
                    this.stateMutability();
                    break;
                case SolidityParser.ExternalKeyword:
                    this.state = 365;
                    this.match(SolidityParser.ExternalKeyword);
                    break;
                case SolidityParser.PublicKeyword:
                    this.state = 366;
                    this.match(SolidityParser.PublicKeyword);
                    break;
                case SolidityParser.InternalKeyword:
                    this.state = 367;
                    this.match(SolidityParser.InternalKeyword);
                    break;
                case SolidityParser.PrivateKeyword:
                    this.state = 368;
                    this.match(SolidityParser.PrivateKeyword);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 373;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_eventDefinition;
    return this;
}

EventDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventDefinitionContext.prototype.constructor = EventDefinitionContext;

EventDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

EventDefinitionContext.prototype.eventParameterList = function () {
    return this.getTypedRuleContext(EventParameterListContext, 0);
};

EventDefinitionContext.prototype.AnonymousKeyword = function () {
    return this.getToken(SolidityParser.AnonymousKeyword, 0);
};

EventDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterEventDefinition(this);
    }
};

EventDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitEventDefinition(this);
    }
};

SolidityParser.EventDefinitionContext = EventDefinitionContext;

SolidityParser.prototype.eventDefinition = function () {

    var localctx = new EventDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SolidityParser.RULE_eventDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(SolidityParser.T__29);
        this.state = 375;
        this.identifier();
        this.state = 376;
        this.eventParameterList();
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.AnonymousKeyword) {
            this.state = 377;
            this.match(SolidityParser.AnonymousKeyword);
        }

        this.state = 380;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumValueContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_enumValue;
    return this;
}

EnumValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumValueContext.prototype.constructor = EnumValueContext;

EnumValueContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

EnumValueContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterEnumValue(this);
    }
};

EnumValueContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitEnumValue(this);
    }
};

SolidityParser.EnumValueContext = EnumValueContext;

SolidityParser.prototype.enumValue = function () {

    var localctx = new EnumValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SolidityParser.RULE_enumValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.identifier();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_enumDefinition;
    return this;
}

EnumDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumDefinitionContext.prototype.constructor = EnumDefinitionContext;

EnumDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

EnumDefinitionContext.prototype.enumValue = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(EnumValueContext);
    } else {
        return this.getTypedRuleContext(EnumValueContext, i);
    }
};

EnumDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterEnumDefinition(this);
    }
};

EnumDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitEnumDefinition(this);
    }
};

SolidityParser.EnumDefinitionContext = EnumDefinitionContext;

SolidityParser.prototype.enumDefinition = function () {

    var localctx = new EnumDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SolidityParser.RULE_enumDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(SolidityParser.T__30);
        this.state = 385;
        this.identifier();
        this.state = 386;
        this.match(SolidityParser.T__13);
        this.state = 388;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
            this.state = 387;
            this.enumValue();
        }

        this.state = 394;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SolidityParser.T__14) {
            this.state = 390;
            this.match(SolidityParser.T__14);
            this.state = 391;
            this.enumValue();
            this.state = 396;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 397;
        this.match(SolidityParser.T__15);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_parameterList;
    return this;
}

ParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListContext.prototype.constructor = ParameterListContext;

ParameterListContext.prototype.parameter = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext, i);
    }
};

ParameterListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterParameterList(this);
    }
};

ParameterListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitParameterList(this);
    }
};

SolidityParser.ParameterListContext = ParameterListContext;

SolidityParser.prototype.parameterList = function () {

    var localctx = new ParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SolidityParser.RULE_parameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        this.match(SolidityParser.T__20);
        this.state = 408;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
            this.state = 400;
            this.parameter();
            this.state = 405;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__14) {
                this.state = 401;
                this.match(SolidityParser.T__14);
                this.state = 402;
                this.parameter();
                this.state = 407;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 410;
        this.match(SolidityParser.T__21);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

ParameterContext.prototype.storageLocation = function () {
    return this.getTypedRuleContext(StorageLocationContext, 0);
};

ParameterContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

ParameterContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterParameter(this);
    }
};

ParameterContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitParameter(this);
    }
};

SolidityParser.ParameterContext = ParameterContext;

SolidityParser.prototype.parameter = function () {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SolidityParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.typeName(0);
        this.state = 414;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 37 & ~0x1f) == 0 && (1 << _la - 37 & (1 << SolidityParser.T__36 - 37 | 1 << SolidityParser.T__37 - 37 | 1 << SolidityParser.T__38 - 37)) !== 0) {
            this.state = 413;
            this.storageLocation();
        }

        this.state = 417;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
            this.state = 416;
            this.identifier();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventParameterListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_eventParameterList;
    return this;
}

EventParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventParameterListContext.prototype.constructor = EventParameterListContext;

EventParameterListContext.prototype.eventParameter = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(EventParameterContext);
    } else {
        return this.getTypedRuleContext(EventParameterContext, i);
    }
};

EventParameterListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterEventParameterList(this);
    }
};

EventParameterListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitEventParameterList(this);
    }
};

SolidityParser.EventParameterListContext = EventParameterListContext;

SolidityParser.prototype.eventParameterList = function () {

    var localctx = new EventParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SolidityParser.RULE_eventParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this.match(SolidityParser.T__20);
        this.state = 428;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
            this.state = 420;
            this.eventParameter();
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__14) {
                this.state = 421;
                this.match(SolidityParser.T__14);
                this.state = 422;
                this.eventParameter();
                this.state = 427;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 430;
        this.match(SolidityParser.T__21);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventParameterContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_eventParameter;
    return this;
}

EventParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventParameterContext.prototype.constructor = EventParameterContext;

EventParameterContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

EventParameterContext.prototype.IndexedKeyword = function () {
    return this.getToken(SolidityParser.IndexedKeyword, 0);
};

EventParameterContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

EventParameterContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterEventParameter(this);
    }
};

EventParameterContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitEventParameter(this);
    }
};

SolidityParser.EventParameterContext = EventParameterContext;

SolidityParser.prototype.eventParameter = function () {

    var localctx = new EventParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SolidityParser.RULE_eventParameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        this.typeName(0);
        this.state = 434;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.IndexedKeyword) {
            this.state = 433;
            this.match(SolidityParser.IndexedKeyword);
        }

        this.state = 437;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
            this.state = 436;
            this.identifier();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionTypeParameterListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_functionTypeParameterList;
    return this;
}

FunctionTypeParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionTypeParameterListContext.prototype.constructor = FunctionTypeParameterListContext;

FunctionTypeParameterListContext.prototype.functionTypeParameter = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FunctionTypeParameterContext);
    } else {
        return this.getTypedRuleContext(FunctionTypeParameterContext, i);
    }
};

FunctionTypeParameterListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterFunctionTypeParameterList(this);
    }
};

FunctionTypeParameterListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitFunctionTypeParameterList(this);
    }
};

SolidityParser.FunctionTypeParameterListContext = FunctionTypeParameterListContext;

SolidityParser.prototype.functionTypeParameterList = function () {

    var localctx = new FunctionTypeParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SolidityParser.RULE_functionTypeParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439;
        this.match(SolidityParser.T__20);
        this.state = 448;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
            this.state = 440;
            this.functionTypeParameter();
            this.state = 445;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__14) {
                this.state = 441;
                this.match(SolidityParser.T__14);
                this.state = 442;
                this.functionTypeParameter();
                this.state = 447;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 450;
        this.match(SolidityParser.T__21);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionTypeParameterContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_functionTypeParameter;
    return this;
}

FunctionTypeParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionTypeParameterContext.prototype.constructor = FunctionTypeParameterContext;

FunctionTypeParameterContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

FunctionTypeParameterContext.prototype.storageLocation = function () {
    return this.getTypedRuleContext(StorageLocationContext, 0);
};

FunctionTypeParameterContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterFunctionTypeParameter(this);
    }
};

FunctionTypeParameterContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitFunctionTypeParameter(this);
    }
};

SolidityParser.FunctionTypeParameterContext = FunctionTypeParameterContext;

SolidityParser.prototype.functionTypeParameter = function () {

    var localctx = new FunctionTypeParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SolidityParser.RULE_functionTypeParameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.typeName(0);
        this.state = 454;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 37 & ~0x1f) == 0 && (1 << _la - 37 & (1 << SolidityParser.T__36 - 37 | 1 << SolidityParser.T__37 - 37 | 1 << SolidityParser.T__38 - 37)) !== 0) {
            this.state = 453;
            this.storageLocation();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

VariableDeclarationContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

VariableDeclarationContext.prototype.storageLocation = function () {
    return this.getTypedRuleContext(StorageLocationContext, 0);
};

VariableDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterVariableDeclaration(this);
    }
};

VariableDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitVariableDeclaration(this);
    }
};

SolidityParser.VariableDeclarationContext = VariableDeclarationContext;

SolidityParser.prototype.variableDeclaration = function () {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SolidityParser.RULE_variableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 456;
        this.typeName(0);
        this.state = 458;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la - 37 & ~0x1f) == 0 && (1 << _la - 37 & (1 << SolidityParser.T__36 - 37 | 1 << SolidityParser.T__37 - 37 | 1 << SolidityParser.T__38 - 37)) !== 0) {
            this.state = 457;
            this.storageLocation();
        }

        this.state = 460;
        this.identifier();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_typeName;
    return this;
}

TypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeNameContext.prototype.constructor = TypeNameContext;

TypeNameContext.prototype.elementaryTypeName = function () {
    return this.getTypedRuleContext(ElementaryTypeNameContext, 0);
};

TypeNameContext.prototype.userDefinedTypeName = function () {
    return this.getTypedRuleContext(UserDefinedTypeNameContext, 0);
};

TypeNameContext.prototype.mapping = function () {
    return this.getTypedRuleContext(MappingContext, 0);
};

TypeNameContext.prototype.functionTypeName = function () {
    return this.getTypedRuleContext(FunctionTypeNameContext, 0);
};

TypeNameContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

TypeNameContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

TypeNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterTypeName(this);
    }
};

TypeNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitTypeName(this);
    }
};

SolidityParser.prototype.typeName = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TypeNameContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 62;
    this.enterRecursionRule(localctx, 62, SolidityParser.RULE_typeName, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__47:
            case SolidityParser.T__48:
            case SolidityParser.T__49:
            case SolidityParser.T__50:
            case SolidityParser.T__51:
            case SolidityParser.Int:
            case SolidityParser.Uint:
            case SolidityParser.Byte:
            case SolidityParser.Fixed:
            case SolidityParser.Ufixed:
                this.state = 463;
                this.elementaryTypeName();
                break;
            case SolidityParser.T__12:
            case SolidityParser.Identifier:
                this.state = 464;
                this.userDefinedTypeName();
                break;
            case SolidityParser.T__34:
                this.state = 465;
                this.mapping();
                break;
            case SolidityParser.T__27:
                this.state = 466;
                this.functionTypeName();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 477;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TypeNameContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_typeName);
                this.state = 469;
                if (!this.precpred(this._ctx, 2)) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 470;
                this.match(SolidityParser.T__31);
                this.state = 472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
                    this.state = 471;
                    this.expression(0);
                }

                this.state = 474;
                this.match(SolidityParser.T__32);
            }
            this.state = 479;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function UserDefinedTypeNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_userDefinedTypeName;
    return this;
}

UserDefinedTypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserDefinedTypeNameContext.prototype.constructor = UserDefinedTypeNameContext;

UserDefinedTypeNameContext.prototype.identifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
};

UserDefinedTypeNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterUserDefinedTypeName(this);
    }
};

UserDefinedTypeNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitUserDefinedTypeName(this);
    }
};

SolidityParser.UserDefinedTypeNameContext = UserDefinedTypeNameContext;

SolidityParser.prototype.userDefinedTypeName = function () {

    var localctx = new UserDefinedTypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SolidityParser.RULE_userDefinedTypeName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 480;
        this.identifier();
        this.state = 485;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 481;
                this.match(SolidityParser.T__33);
                this.state = 482;
                this.identifier();
            }
            this.state = 487;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MappingContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_mapping;
    return this;
}

MappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingContext.prototype.constructor = MappingContext;

MappingContext.prototype.elementaryTypeName = function () {
    return this.getTypedRuleContext(ElementaryTypeNameContext, 0);
};

MappingContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

MappingContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterMapping(this);
    }
};

MappingContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitMapping(this);
    }
};

SolidityParser.MappingContext = MappingContext;

SolidityParser.prototype.mapping = function () {

    var localctx = new MappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SolidityParser.RULE_mapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 488;
        this.match(SolidityParser.T__34);
        this.state = 489;
        this.match(SolidityParser.T__20);
        this.state = 490;
        this.elementaryTypeName();
        this.state = 491;
        this.match(SolidityParser.T__35);
        this.state = 492;
        this.typeName(0);
        this.state = 493;
        this.match(SolidityParser.T__21);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionTypeNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_functionTypeName;
    return this;
}

FunctionTypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionTypeNameContext.prototype.constructor = FunctionTypeNameContext;

FunctionTypeNameContext.prototype.functionTypeParameterList = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(FunctionTypeParameterListContext);
    } else {
        return this.getTypedRuleContext(FunctionTypeParameterListContext, i);
    }
};

FunctionTypeNameContext.prototype.InternalKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.InternalKeyword);
    } else {
        return this.getToken(SolidityParser.InternalKeyword, i);
    }
};

FunctionTypeNameContext.prototype.ExternalKeyword = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(SolidityParser.ExternalKeyword);
    } else {
        return this.getToken(SolidityParser.ExternalKeyword, i);
    }
};

FunctionTypeNameContext.prototype.stateMutability = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StateMutabilityContext);
    } else {
        return this.getTypedRuleContext(StateMutabilityContext, i);
    }
};

FunctionTypeNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterFunctionTypeName(this);
    }
};

FunctionTypeNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitFunctionTypeName(this);
    }
};

SolidityParser.FunctionTypeNameContext = FunctionTypeNameContext;

SolidityParser.prototype.functionTypeName = function () {

    var localctx = new FunctionTypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SolidityParser.RULE_functionTypeName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this.match(SolidityParser.T__27);
        this.state = 496;
        this.functionTypeParameterList();
        this.state = 502;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 500;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SolidityParser.InternalKeyword:
                        this.state = 497;
                        this.match(SolidityParser.InternalKeyword);
                        break;
                    case SolidityParser.ExternalKeyword:
                        this.state = 498;
                        this.match(SolidityParser.ExternalKeyword);
                        break;
                    case SolidityParser.ConstantKeyword:
                    case SolidityParser.PayableKeyword:
                    case SolidityParser.PureKeyword:
                    case SolidityParser.ViewKeyword:
                        this.state = 499;
                        this.stateMutability();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
            }
            this.state = 504;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
        }

        this.state = 507;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 51, this._ctx);
        if (la_ === 1) {
            this.state = 505;
            this.match(SolidityParser.T__28);
            this.state = 506;
            this.functionTypeParameterList();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StorageLocationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_storageLocation;
    return this;
}

StorageLocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StorageLocationContext.prototype.constructor = StorageLocationContext;

StorageLocationContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterStorageLocation(this);
    }
};

StorageLocationContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitStorageLocation(this);
    }
};

SolidityParser.StorageLocationContext = StorageLocationContext;

SolidityParser.prototype.storageLocation = function () {

    var localctx = new StorageLocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SolidityParser.RULE_storageLocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        _la = this._input.LA(1);
        if (!((_la - 37 & ~0x1f) == 0 && (1 << _la - 37 & (1 << SolidityParser.T__36 - 37 | 1 << SolidityParser.T__37 - 37 | 1 << SolidityParser.T__38 - 37)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StateMutabilityContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_stateMutability;
    return this;
}

StateMutabilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StateMutabilityContext.prototype.constructor = StateMutabilityContext;

StateMutabilityContext.prototype.PureKeyword = function () {
    return this.getToken(SolidityParser.PureKeyword, 0);
};

StateMutabilityContext.prototype.ConstantKeyword = function () {
    return this.getToken(SolidityParser.ConstantKeyword, 0);
};

StateMutabilityContext.prototype.ViewKeyword = function () {
    return this.getToken(SolidityParser.ViewKeyword, 0);
};

StateMutabilityContext.prototype.PayableKeyword = function () {
    return this.getToken(SolidityParser.PayableKeyword, 0);
};

StateMutabilityContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterStateMutability(this);
    }
};

StateMutabilityContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitStateMutability(this);
    }
};

SolidityParser.StateMutabilityContext = StateMutabilityContext;

SolidityParser.prototype.stateMutability = function () {

    var localctx = new StateMutabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SolidityParser.RULE_stateMutability);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        _la = this._input.LA(1);
        if (!((_la - 105 & ~0x1f) == 0 && (1 << _la - 105 & (1 << SolidityParser.ConstantKeyword - 105 | 1 << SolidityParser.PayableKeyword - 105 | 1 << SolidityParser.PureKeyword - 105 | 1 << SolidityParser.ViewKeyword - 105)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext, i);
    }
};

BlockContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterBlock(this);
    }
};

BlockContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitBlock(this);
    }
};

SolidityParser.BlockContext = BlockContext;

SolidityParser.prototype.block = function () {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SolidityParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this.match(SolidityParser.T__13);
        this.state = 517;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__13 | 1 << SolidityParser.T__20 | 1 << SolidityParser.T__23 | 1 << SolidityParser.T__27)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__34 - 32 | 1 << SolidityParser.T__39 - 32 | 1 << SolidityParser.T__41 - 32 | 1 << SolidityParser.T__42 - 32 | 1 << SolidityParser.T__43 - 32 | 1 << SolidityParser.T__44 - 32 | 1 << SolidityParser.T__45 - 32 | 1 << SolidityParser.T__46 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.BreakKeyword - 91 | 1 << SolidityParser.ContinueKeyword - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
            this.state = 514;
            this.statement();
            this.state = 519;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 520;
        this.match(SolidityParser.T__15);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.ifStatement = function () {
    return this.getTypedRuleContext(IfStatementContext, 0);
};

StatementContext.prototype.whileStatement = function () {
    return this.getTypedRuleContext(WhileStatementContext, 0);
};

StatementContext.prototype.forStatement = function () {
    return this.getTypedRuleContext(ForStatementContext, 0);
};

StatementContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

StatementContext.prototype.inlineAssemblyStatement = function () {
    return this.getTypedRuleContext(InlineAssemblyStatementContext, 0);
};

StatementContext.prototype.doWhileStatement = function () {
    return this.getTypedRuleContext(DoWhileStatementContext, 0);
};

StatementContext.prototype.continueStatement = function () {
    return this.getTypedRuleContext(ContinueStatementContext, 0);
};

StatementContext.prototype.breakStatement = function () {
    return this.getTypedRuleContext(BreakStatementContext, 0);
};

StatementContext.prototype.returnStatement = function () {
    return this.getTypedRuleContext(ReturnStatementContext, 0);
};

StatementContext.prototype.throwStatement = function () {
    return this.getTypedRuleContext(ThrowStatementContext, 0);
};

StatementContext.prototype.emitStatement = function () {
    return this.getTypedRuleContext(EmitStatementContext, 0);
};

StatementContext.prototype.simpleStatement = function () {
    return this.getTypedRuleContext(SimpleStatementContext, 0);
};

StatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterStatement(this);
    }
};

StatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitStatement(this);
    }
};

SolidityParser.StatementContext = StatementContext;

SolidityParser.prototype.statement = function () {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SolidityParser.RULE_statement);
    try {
        this.state = 534;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__39:
                this.enterOuterAlt(localctx, 1);
                this.state = 522;
                this.ifStatement();
                break;
            case SolidityParser.T__41:
                this.enterOuterAlt(localctx, 2);
                this.state = 523;
                this.whileStatement();
                break;
            case SolidityParser.T__23:
                this.enterOuterAlt(localctx, 3);
                this.state = 524;
                this.forStatement();
                break;
            case SolidityParser.T__13:
                this.enterOuterAlt(localctx, 4);
                this.state = 525;
                this.block();
                break;
            case SolidityParser.T__42:
                this.enterOuterAlt(localctx, 5);
                this.state = 526;
                this.inlineAssemblyStatement();
                break;
            case SolidityParser.T__43:
                this.enterOuterAlt(localctx, 6);
                this.state = 527;
                this.doWhileStatement();
                break;
            case SolidityParser.ContinueKeyword:
                this.enterOuterAlt(localctx, 7);
                this.state = 528;
                this.continueStatement();
                break;
            case SolidityParser.BreakKeyword:
                this.enterOuterAlt(localctx, 8);
                this.state = 529;
                this.breakStatement();
                break;
            case SolidityParser.T__44:
                this.enterOuterAlt(localctx, 9);
                this.state = 530;
                this.returnStatement();
                break;
            case SolidityParser.T__45:
                this.enterOuterAlt(localctx, 10);
                this.state = 531;
                this.throwStatement();
                break;
            case SolidityParser.T__46:
                this.enterOuterAlt(localctx, 11);
                this.state = 532;
                this.emitStatement();
                break;
            case SolidityParser.T__3:
            case SolidityParser.T__12:
            case SolidityParser.T__20:
            case SolidityParser.T__27:
            case SolidityParser.T__31:
            case SolidityParser.T__34:
            case SolidityParser.T__47:
            case SolidityParser.T__48:
            case SolidityParser.T__49:
            case SolidityParser.T__50:
            case SolidityParser.T__51:
            case SolidityParser.T__52:
            case SolidityParser.T__53:
            case SolidityParser.T__54:
            case SolidityParser.T__55:
            case SolidityParser.T__56:
            case SolidityParser.T__57:
            case SolidityParser.T__58:
            case SolidityParser.T__59:
            case SolidityParser.Int:
            case SolidityParser.Uint:
            case SolidityParser.Byte:
            case SolidityParser.Fixed:
            case SolidityParser.Ufixed:
            case SolidityParser.BooleanLiteral:
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
            case SolidityParser.HexLiteral:
            case SolidityParser.Identifier:
            case SolidityParser.StringLiteral:
                this.enterOuterAlt(localctx, 12);
                this.state = 533;
                this.simpleStatement();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

ExpressionStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterExpressionStatement(this);
    }
};

ExpressionStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitExpressionStatement(this);
    }
};

SolidityParser.ExpressionStatementContext = ExpressionStatementContext;

SolidityParser.prototype.expressionStatement = function () {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SolidityParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 536;
        this.expression(0);
        this.state = 537;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

IfStatementContext.prototype.statement = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext, i);
    }
};

IfStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterIfStatement(this);
    }
};

IfStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitIfStatement(this);
    }
};

SolidityParser.IfStatementContext = IfStatementContext;

SolidityParser.prototype.ifStatement = function () {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SolidityParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 539;
        this.match(SolidityParser.T__39);
        this.state = 540;
        this.match(SolidityParser.T__20);
        this.state = 541;
        this.expression(0);
        this.state = 542;
        this.match(SolidityParser.T__21);
        this.state = 543;
        this.statement();
        this.state = 546;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 54, this._ctx);
        if (la_ === 1) {
            this.state = 544;
            this.match(SolidityParser.T__40);
            this.state = 545;
            this.statement();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

WhileStatementContext.prototype.statement = function () {
    return this.getTypedRuleContext(StatementContext, 0);
};

WhileStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterWhileStatement(this);
    }
};

WhileStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitWhileStatement(this);
    }
};

SolidityParser.WhileStatementContext = WhileStatementContext;

SolidityParser.prototype.whileStatement = function () {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SolidityParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
        this.match(SolidityParser.T__41);
        this.state = 549;
        this.match(SolidityParser.T__20);
        this.state = 550;
        this.expression(0);
        this.state = 551;
        this.match(SolidityParser.T__21);
        this.state = 552;
        this.statement();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_simpleStatement;
    return this;
}

SimpleStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleStatementContext.prototype.constructor = SimpleStatementContext;

SimpleStatementContext.prototype.variableDeclarationStatement = function () {
    return this.getTypedRuleContext(VariableDeclarationStatementContext, 0);
};

SimpleStatementContext.prototype.expressionStatement = function () {
    return this.getTypedRuleContext(ExpressionStatementContext, 0);
};

SimpleStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterSimpleStatement(this);
    }
};

SimpleStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitSimpleStatement(this);
    }
};

SolidityParser.SimpleStatementContext = SimpleStatementContext;

SolidityParser.prototype.simpleStatement = function () {

    var localctx = new SimpleStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SolidityParser.RULE_simpleStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 556;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 55, this._ctx);
        switch (la_) {
            case 1:
                this.state = 554;
                this.variableDeclarationStatement();
                break;

            case 2:
                this.state = 555;
                this.expressionStatement();
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.statement = function () {
    return this.getTypedRuleContext(StatementContext, 0);
};

ForStatementContext.prototype.simpleStatement = function () {
    return this.getTypedRuleContext(SimpleStatementContext, 0);
};

ForStatementContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};

ForStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterForStatement(this);
    }
};

ForStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitForStatement(this);
    }
};

SolidityParser.ForStatementContext = ForStatementContext;

SolidityParser.prototype.forStatement = function () {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SolidityParser.RULE_forStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 558;
        this.match(SolidityParser.T__23);
        this.state = 559;
        this.match(SolidityParser.T__20);
        this.state = 562;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__3:
            case SolidityParser.T__12:
            case SolidityParser.T__20:
            case SolidityParser.T__27:
            case SolidityParser.T__31:
            case SolidityParser.T__34:
            case SolidityParser.T__47:
            case SolidityParser.T__48:
            case SolidityParser.T__49:
            case SolidityParser.T__50:
            case SolidityParser.T__51:
            case SolidityParser.T__52:
            case SolidityParser.T__53:
            case SolidityParser.T__54:
            case SolidityParser.T__55:
            case SolidityParser.T__56:
            case SolidityParser.T__57:
            case SolidityParser.T__58:
            case SolidityParser.T__59:
            case SolidityParser.Int:
            case SolidityParser.Uint:
            case SolidityParser.Byte:
            case SolidityParser.Fixed:
            case SolidityParser.Ufixed:
            case SolidityParser.BooleanLiteral:
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
            case SolidityParser.HexLiteral:
            case SolidityParser.Identifier:
            case SolidityParser.StringLiteral:
                this.state = 560;
                this.simpleStatement();
                break;
            case SolidityParser.T__1:
                this.state = 561;
                this.match(SolidityParser.T__1);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 565;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
            this.state = 564;
            this.expression(0);
        }

        this.state = 567;
        this.match(SolidityParser.T__1);
        this.state = 569;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
            this.state = 568;
            this.expression(0);
        }

        this.state = 571;
        this.match(SolidityParser.T__21);
        this.state = 572;
        this.statement();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InlineAssemblyStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_inlineAssemblyStatement;
    return this;
}

InlineAssemblyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InlineAssemblyStatementContext.prototype.constructor = InlineAssemblyStatementContext;

InlineAssemblyStatementContext.prototype.assemblyBlock = function () {
    return this.getTypedRuleContext(AssemblyBlockContext, 0);
};

InlineAssemblyStatementContext.prototype.StringLiteral = function () {
    return this.getToken(SolidityParser.StringLiteral, 0);
};

InlineAssemblyStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterInlineAssemblyStatement(this);
    }
};

InlineAssemblyStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitInlineAssemblyStatement(this);
    }
};

SolidityParser.InlineAssemblyStatementContext = InlineAssemblyStatementContext;

SolidityParser.prototype.inlineAssemblyStatement = function () {

    var localctx = new InlineAssemblyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SolidityParser.RULE_inlineAssemblyStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 574;
        this.match(SolidityParser.T__42);
        this.state = 576;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.StringLiteral) {
            this.state = 575;
            this.match(SolidityParser.StringLiteral);
        }

        this.state = 578;
        this.assemblyBlock();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DoWhileStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_doWhileStatement;
    return this;
}

DoWhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoWhileStatementContext.prototype.constructor = DoWhileStatementContext;

DoWhileStatementContext.prototype.statement = function () {
    return this.getTypedRuleContext(StatementContext, 0);
};

DoWhileStatementContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

DoWhileStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterDoWhileStatement(this);
    }
};

DoWhileStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitDoWhileStatement(this);
    }
};

SolidityParser.DoWhileStatementContext = DoWhileStatementContext;

SolidityParser.prototype.doWhileStatement = function () {

    var localctx = new DoWhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SolidityParser.RULE_doWhileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 580;
        this.match(SolidityParser.T__43);
        this.state = 581;
        this.statement();
        this.state = 582;
        this.match(SolidityParser.T__41);
        this.state = 583;
        this.match(SolidityParser.T__20);
        this.state = 584;
        this.expression(0);
        this.state = 585;
        this.match(SolidityParser.T__21);
        this.state = 586;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContinueStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_continueStatement;
    return this;
}

ContinueStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueStatementContext.prototype.constructor = ContinueStatementContext;

ContinueStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterContinueStatement(this);
    }
};

ContinueStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitContinueStatement(this);
    }
};

SolidityParser.ContinueStatementContext = ContinueStatementContext;

SolidityParser.prototype.continueStatement = function () {

    var localctx = new ContinueStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SolidityParser.RULE_continueStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 588;
        this.match(SolidityParser.ContinueKeyword);
        this.state = 589;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BreakStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_breakStatement;
    return this;
}

BreakStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakStatementContext.prototype.constructor = BreakStatementContext;

BreakStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterBreakStatement(this);
    }
};

BreakStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitBreakStatement(this);
    }
};

SolidityParser.BreakStatementContext = BreakStatementContext;

SolidityParser.prototype.breakStatement = function () {

    var localctx = new BreakStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SolidityParser.RULE_breakStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 591;
        this.match(SolidityParser.BreakKeyword);
        this.state = 592;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

ReturnStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterReturnStatement(this);
    }
};

ReturnStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitReturnStatement(this);
    }
};

SolidityParser.ReturnStatementContext = ReturnStatementContext;

SolidityParser.prototype.returnStatement = function () {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SolidityParser.RULE_returnStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 594;
        this.match(SolidityParser.T__44);
        this.state = 596;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
            this.state = 595;
            this.expression(0);
        }

        this.state = 598;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ThrowStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_throwStatement;
    return this;
}

ThrowStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowStatementContext.prototype.constructor = ThrowStatementContext;

ThrowStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterThrowStatement(this);
    }
};

ThrowStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitThrowStatement(this);
    }
};

SolidityParser.ThrowStatementContext = ThrowStatementContext;

SolidityParser.prototype.throwStatement = function () {

    var localctx = new ThrowStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SolidityParser.RULE_throwStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 600;
        this.match(SolidityParser.T__45);
        this.state = 601;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmitStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_emitStatement;
    return this;
}

EmitStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmitStatementContext.prototype.constructor = EmitStatementContext;

EmitStatementContext.prototype.functionCall = function () {
    return this.getTypedRuleContext(FunctionCallContext, 0);
};

EmitStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterEmitStatement(this);
    }
};

EmitStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitEmitStatement(this);
    }
};

SolidityParser.EmitStatementContext = EmitStatementContext;

SolidityParser.prototype.emitStatement = function () {

    var localctx = new EmitStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SolidityParser.RULE_emitStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 603;
        this.match(SolidityParser.T__46);
        this.state = 604;
        this.functionCall();
        this.state = 605;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDeclarationStatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_variableDeclarationStatement;
    return this;
}

VariableDeclarationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationStatementContext.prototype.constructor = VariableDeclarationStatementContext;

VariableDeclarationStatementContext.prototype.identifierList = function () {
    return this.getTypedRuleContext(IdentifierListContext, 0);
};

VariableDeclarationStatementContext.prototype.variableDeclaration = function () {
    return this.getTypedRuleContext(VariableDeclarationContext, 0);
};

VariableDeclarationStatementContext.prototype.variableDeclarationList = function () {
    return this.getTypedRuleContext(VariableDeclarationListContext, 0);
};

VariableDeclarationStatementContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

VariableDeclarationStatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterVariableDeclarationStatement(this);
    }
};

VariableDeclarationStatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitVariableDeclarationStatement(this);
    }
};

SolidityParser.VariableDeclarationStatementContext = VariableDeclarationStatementContext;

SolidityParser.prototype.variableDeclarationStatement = function () {

    var localctx = new VariableDeclarationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SolidityParser.RULE_variableDeclarationStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 614;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 61, this._ctx);
        switch (la_) {
            case 1:
                this.state = 607;
                this.match(SolidityParser.T__47);
                this.state = 608;
                this.identifierList();
                break;

            case 2:
                this.state = 609;
                this.variableDeclaration();
                break;

            case 3:
                this.state = 610;
                this.match(SolidityParser.T__20);
                this.state = 611;
                this.variableDeclarationList();
                this.state = 612;
                this.match(SolidityParser.T__21);
                break;

        }
        this.state = 618;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__8) {
            this.state = 616;
            this.match(SolidityParser.T__8);
            this.state = 617;
            this.expression(0);
        }

        this.state = 620;
        this.match(SolidityParser.T__1);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDeclarationListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_variableDeclarationList;
    return this;
}

VariableDeclarationListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationListContext.prototype.constructor = VariableDeclarationListContext;

VariableDeclarationListContext.prototype.variableDeclaration = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationContext, i);
    }
};

VariableDeclarationListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterVariableDeclarationList(this);
    }
};

VariableDeclarationListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitVariableDeclarationList(this);
    }
};

SolidityParser.VariableDeclarationListContext = VariableDeclarationListContext;

SolidityParser.prototype.variableDeclarationList = function () {

    var localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SolidityParser.RULE_variableDeclarationList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 623;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
            this.state = 622;
            this.variableDeclaration();
        }

        this.state = 631;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SolidityParser.T__14) {
            this.state = 625;
            this.match(SolidityParser.T__14);
            this.state = 627;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || (_la - 35 & ~0x1f) == 0 && (1 << _la - 35 & (1 << SolidityParser.T__34 - 35 | 1 << SolidityParser.T__47 - 35 | 1 << SolidityParser.T__48 - 35 | 1 << SolidityParser.T__49 - 35 | 1 << SolidityParser.T__50 - 35 | 1 << SolidityParser.T__51 - 35)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.Identifier - 91)) !== 0) {
                this.state = 626;
                this.variableDeclaration();
            }

            this.state = 633;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_identifierList;
    return this;
}

IdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListContext.prototype.constructor = IdentifierListContext;

IdentifierListContext.prototype.identifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
};

IdentifierListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterIdentifierList(this);
    }
};

IdentifierListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitIdentifierList(this);
    }
};

SolidityParser.IdentifierListContext = IdentifierListContext;

SolidityParser.prototype.identifierList = function () {

    var localctx = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SolidityParser.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 634;
        this.match(SolidityParser.T__20);
        this.state = 641;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 636;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    this.state = 635;
                    this.identifier();
                }

                this.state = 638;
                this.match(SolidityParser.T__14);
            }
            this.state = 643;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
        }

        this.state = 645;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
            this.state = 644;
            this.identifier();
        }

        this.state = 647;
        this.match(SolidityParser.T__21);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementaryTypeNameContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_elementaryTypeName;
    return this;
}

ElementaryTypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementaryTypeNameContext.prototype.constructor = ElementaryTypeNameContext;

ElementaryTypeNameContext.prototype.Int = function () {
    return this.getToken(SolidityParser.Int, 0);
};

ElementaryTypeNameContext.prototype.Uint = function () {
    return this.getToken(SolidityParser.Uint, 0);
};

ElementaryTypeNameContext.prototype.Byte = function () {
    return this.getToken(SolidityParser.Byte, 0);
};

ElementaryTypeNameContext.prototype.Fixed = function () {
    return this.getToken(SolidityParser.Fixed, 0);
};

ElementaryTypeNameContext.prototype.Ufixed = function () {
    return this.getToken(SolidityParser.Ufixed, 0);
};

ElementaryTypeNameContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterElementaryTypeName(this);
    }
};

ElementaryTypeNameContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitElementaryTypeName(this);
    }
};

SolidityParser.ElementaryTypeNameContext = ElementaryTypeNameContext;

SolidityParser.prototype.elementaryTypeName = function () {

    var localctx = new ElementaryTypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, SolidityParser.RULE_elementaryTypeName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 649;
        _la = this._input.LA(1);
        if (!((_la - 48 & ~0x1f) == 0 && (1 << _la - 48 & (1 << SolidityParser.T__47 - 48 | 1 << SolidityParser.T__48 - 48 | 1 << SolidityParser.T__49 - 48 | 1 << SolidityParser.T__50 - 48 | 1 << SolidityParser.T__51 - 48)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.typeName = function () {
    return this.getTypedRuleContext(TypeNameContext, 0);
};

ExpressionContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};

ExpressionContext.prototype.primaryExpression = function () {
    return this.getTypedRuleContext(PrimaryExpressionContext, 0);
};

ExpressionContext.prototype.functionCallArguments = function () {
    return this.getTypedRuleContext(FunctionCallArgumentsContext, 0);
};

ExpressionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

ExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterExpression(this);
    }
};

ExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitExpression(this);
    }
};

SolidityParser.prototype.expression = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 110;
    this.enterRecursionRule(localctx, 110, SolidityParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 669;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 69, this._ctx);
        switch (la_) {
            case 1:
                this.state = 652;
                this.match(SolidityParser.T__54);
                this.state = 653;
                this.typeName(0);
                break;

            case 2:
                this.state = 654;
                this.match(SolidityParser.T__20);
                this.state = 655;
                this.expression(0);
                this.state = 656;
                this.match(SolidityParser.T__21);
                break;

            case 3:
                this.state = 658;
                _la = this._input.LA(1);
                if (!(_la === SolidityParser.T__52 || _la === SolidityParser.T__53)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 659;
                this.expression(19);
                break;

            case 4:
                this.state = 660;
                _la = this._input.LA(1);
                if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 661;
                this.expression(18);
                break;

            case 5:
                this.state = 662;
                _la = this._input.LA(1);
                if (!(_la === SolidityParser.T__57 || _la === SolidityParser.T__58)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 663;
                this.expression(17);
                break;

            case 6:
                this.state = 664;
                this.match(SolidityParser.T__59);
                this.state = 665;
                this.expression(16);
                break;

            case 7:
                this.state = 666;
                this.match(SolidityParser.T__3);
                this.state = 667;
                this.expression(15);
                break;

            case 8:
                this.state = 668;
                this.primaryExpression();
                break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 730;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 728;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 70, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 671;
                        if (!this.precpred(this._ctx, 14)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                        }
                        this.state = 672;
                        this.match(SolidityParser.T__60);
                        this.state = 673;
                        this.expression(15);
                        break;

                    case 2:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 674;
                        if (!this.precpred(this._ctx, 13)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                        }
                        this.state = 675;
                        _la = this._input.LA(1);
                        if (!(_la === SolidityParser.T__11 || _la === SolidityParser.T__61 || _la === SolidityParser.T__62)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 676;
                        this.expression(14);
                        break;

                    case 3:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 677;
                        if (!this.precpred(this._ctx, 12)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                        }
                        this.state = 678;
                        _la = this._input.LA(1);
                        if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 679;
                        this.expression(13);
                        break;

                    case 4:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 680;
                        if (!this.precpred(this._ctx, 11)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                        }
                        this.state = 681;
                        _la = this._input.LA(1);
                        if (!(_la === SolidityParser.T__63 || _la === SolidityParser.T__64)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 682;
                        this.expression(12);
                        break;

                    case 5:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 683;
                        if (!this.precpred(this._ctx, 10)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                        }
                        this.state = 684;
                        this.match(SolidityParser.T__65);
                        this.state = 685;
                        this.expression(11);
                        break;

                    case 6:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 686;
                        if (!this.precpred(this._ctx, 9)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                        }
                        this.state = 687;
                        this.match(SolidityParser.T__2);
                        this.state = 688;
                        this.expression(10);
                        break;

                    case 7:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 689;
                        if (!this.precpred(this._ctx, 8)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                        }
                        this.state = 690;
                        this.match(SolidityParser.T__66);
                        this.state = 691;
                        this.expression(9);
                        break;

                    case 8:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 692;
                        if (!this.precpred(this._ctx, 7)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                        }
                        this.state = 693;
                        _la = this._input.LA(1);
                        if (!((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__4 | 1 << SolidityParser.T__5 | 1 << SolidityParser.T__6 | 1 << SolidityParser.T__7)) !== 0)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 694;
                        this.expression(8);
                        break;

                    case 9:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 695;
                        if (!this.precpred(this._ctx, 6)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                        }
                        this.state = 696;
                        _la = this._input.LA(1);
                        if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 697;
                        this.expression(7);
                        break;

                    case 10:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 698;
                        if (!this.precpred(this._ctx, 5)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                        }
                        this.state = 699;
                        this.match(SolidityParser.T__69);
                        this.state = 700;
                        this.expression(6);
                        break;

                    case 11:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 701;
                        if (!this.precpred(this._ctx, 4)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                        }
                        this.state = 702;
                        this.match(SolidityParser.T__70);
                        this.state = 703;
                        this.expression(5);
                        break;

                    case 12:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 704;
                        if (!this.precpred(this._ctx, 3)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                        }
                        this.state = 705;
                        this.match(SolidityParser.T__71);
                        this.state = 706;
                        this.expression(0);
                        this.state = 707;
                        this.match(SolidityParser.T__72);
                        this.state = 708;
                        this.expression(4);
                        break;

                    case 13:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 710;
                        if (!this.precpred(this._ctx, 2)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                        }
                        this.state = 711;
                        _la = this._input.LA(1);
                        if (!(_la === SolidityParser.T__8 || (_la - 74 & ~0x1f) == 0 && (1 << _la - 74 & (1 << SolidityParser.T__73 - 74 | 1 << SolidityParser.T__74 - 74 | 1 << SolidityParser.T__75 - 74 | 1 << SolidityParser.T__76 - 74 | 1 << SolidityParser.T__77 - 74 | 1 << SolidityParser.T__78 - 74 | 1 << SolidityParser.T__79 - 74 | 1 << SolidityParser.T__80 - 74 | 1 << SolidityParser.T__81 - 74 | 1 << SolidityParser.T__82 - 74)) !== 0)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 712;
                        this.expression(3);
                        break;

                    case 14:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 713;
                        if (!this.precpred(this._ctx, 25)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                        }
                        this.state = 714;
                        _la = this._input.LA(1);
                        if (!(_la === SolidityParser.T__52 || _la === SolidityParser.T__53)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        break;

                    case 15:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 715;
                        if (!this.precpred(this._ctx, 23)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                        }
                        this.state = 716;
                        this.match(SolidityParser.T__31);
                        this.state = 717;
                        this.expression(0);
                        this.state = 718;
                        this.match(SolidityParser.T__32);
                        break;

                    case 16:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 720;
                        if (!this.precpred(this._ctx, 22)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                        }
                        this.state = 721;
                        this.match(SolidityParser.T__20);
                        this.state = 722;
                        this.functionCallArguments();
                        this.state = 723;
                        this.match(SolidityParser.T__21);
                        break;

                    case 17:
                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
                        this.state = 725;
                        if (!this.precpred(this._ctx, 21)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                        }
                        this.state = 726;
                        this.match(SolidityParser.T__33);
                        this.state = 727;
                        this.identifier();
                        break;

                }
            }
            this.state = 732;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function PrimaryExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.BooleanLiteral = function () {
    return this.getToken(SolidityParser.BooleanLiteral, 0);
};

PrimaryExpressionContext.prototype.numberLiteral = function () {
    return this.getTypedRuleContext(NumberLiteralContext, 0);
};

PrimaryExpressionContext.prototype.HexLiteral = function () {
    return this.getToken(SolidityParser.HexLiteral, 0);
};

PrimaryExpressionContext.prototype.StringLiteral = function () {
    return this.getToken(SolidityParser.StringLiteral, 0);
};

PrimaryExpressionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

PrimaryExpressionContext.prototype.tupleExpression = function () {
    return this.getTypedRuleContext(TupleExpressionContext, 0);
};

PrimaryExpressionContext.prototype.elementaryTypeNameExpression = function () {
    return this.getTypedRuleContext(ElementaryTypeNameExpressionContext, 0);
};

PrimaryExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterPrimaryExpression(this);
    }
};

PrimaryExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitPrimaryExpression(this);
    }
};

SolidityParser.PrimaryExpressionContext = PrimaryExpressionContext;

SolidityParser.prototype.primaryExpression = function () {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, SolidityParser.RULE_primaryExpression);
    try {
        this.state = 740;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.BooleanLiteral:
                this.enterOuterAlt(localctx, 1);
                this.state = 733;
                this.match(SolidityParser.BooleanLiteral);
                break;
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
                this.enterOuterAlt(localctx, 2);
                this.state = 734;
                this.numberLiteral();
                break;
            case SolidityParser.HexLiteral:
                this.enterOuterAlt(localctx, 3);
                this.state = 735;
                this.match(SolidityParser.HexLiteral);
                break;
            case SolidityParser.StringLiteral:
                this.enterOuterAlt(localctx, 4);
                this.state = 736;
                this.match(SolidityParser.StringLiteral);
                break;
            case SolidityParser.T__12:
            case SolidityParser.Identifier:
                this.enterOuterAlt(localctx, 5);
                this.state = 737;
                this.identifier();
                break;
            case SolidityParser.T__20:
            case SolidityParser.T__31:
                this.enterOuterAlt(localctx, 6);
                this.state = 738;
                this.tupleExpression();
                break;
            case SolidityParser.T__47:
            case SolidityParser.T__48:
            case SolidityParser.T__49:
            case SolidityParser.T__50:
            case SolidityParser.T__51:
            case SolidityParser.Int:
            case SolidityParser.Uint:
            case SolidityParser.Byte:
            case SolidityParser.Fixed:
            case SolidityParser.Ufixed:
                this.enterOuterAlt(localctx, 7);
                this.state = 739;
                this.elementaryTypeNameExpression();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};

ExpressionListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterExpressionList(this);
    }
};

ExpressionListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitExpressionList(this);
    }
};

SolidityParser.ExpressionListContext = ExpressionListContext;

SolidityParser.prototype.expressionList = function () {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, SolidityParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 742;
        this.expression(0);
        this.state = 747;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SolidityParser.T__14) {
            this.state = 743;
            this.match(SolidityParser.T__14);
            this.state = 744;
            this.expression(0);
            this.state = 749;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameValueListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_nameValueList;
    return this;
}

NameValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameValueListContext.prototype.constructor = NameValueListContext;

NameValueListContext.prototype.nameValue = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(NameValueContext);
    } else {
        return this.getTypedRuleContext(NameValueContext, i);
    }
};

NameValueListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterNameValueList(this);
    }
};

NameValueListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitNameValueList(this);
    }
};

SolidityParser.NameValueListContext = NameValueListContext;

SolidityParser.prototype.nameValueList = function () {

    var localctx = new NameValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, SolidityParser.RULE_nameValueList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 750;
        this.nameValue();
        this.state = 755;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 751;
                this.match(SolidityParser.T__14);
                this.state = 752;
                this.nameValue();
            }
            this.state = 757;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
        }

        this.state = 759;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__14) {
            this.state = 758;
            this.match(SolidityParser.T__14);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameValueContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_nameValue;
    return this;
}

NameValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameValueContext.prototype.constructor = NameValueContext;

NameValueContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

NameValueContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

NameValueContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterNameValue(this);
    }
};

NameValueContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitNameValue(this);
    }
};

SolidityParser.NameValueContext = NameValueContext;

SolidityParser.prototype.nameValue = function () {

    var localctx = new NameValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, SolidityParser.RULE_nameValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 761;
        this.identifier();
        this.state = 762;
        this.match(SolidityParser.T__72);
        this.state = 763;
        this.expression(0);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallArgumentsContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_functionCallArguments;
    return this;
}

FunctionCallArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallArgumentsContext.prototype.constructor = FunctionCallArgumentsContext;

FunctionCallArgumentsContext.prototype.nameValueList = function () {
    return this.getTypedRuleContext(NameValueListContext, 0);
};

FunctionCallArgumentsContext.prototype.expressionList = function () {
    return this.getTypedRuleContext(ExpressionListContext, 0);
};

FunctionCallArgumentsContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterFunctionCallArguments(this);
    }
};

FunctionCallArgumentsContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitFunctionCallArguments(this);
    }
};

SolidityParser.FunctionCallArgumentsContext = FunctionCallArgumentsContext;

SolidityParser.prototype.functionCallArguments = function () {

    var localctx = new FunctionCallArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, SolidityParser.RULE_functionCallArguments);
    var _la = 0; // Token type
    try {
        this.state = 773;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__13:
                this.enterOuterAlt(localctx, 1);
                this.state = 765;
                this.match(SolidityParser.T__13);
                this.state = 767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
                    this.state = 766;
                    this.nameValueList();
                }

                this.state = 769;
                this.match(SolidityParser.T__15);
                break;
            case SolidityParser.T__3:
            case SolidityParser.T__12:
            case SolidityParser.T__20:
            case SolidityParser.T__21:
            case SolidityParser.T__31:
            case SolidityParser.T__47:
            case SolidityParser.T__48:
            case SolidityParser.T__49:
            case SolidityParser.T__50:
            case SolidityParser.T__51:
            case SolidityParser.T__52:
            case SolidityParser.T__53:
            case SolidityParser.T__54:
            case SolidityParser.T__55:
            case SolidityParser.T__56:
            case SolidityParser.T__57:
            case SolidityParser.T__58:
            case SolidityParser.T__59:
            case SolidityParser.Int:
            case SolidityParser.Uint:
            case SolidityParser.Byte:
            case SolidityParser.Fixed:
            case SolidityParser.Ufixed:
            case SolidityParser.BooleanLiteral:
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
            case SolidityParser.HexLiteral:
            case SolidityParser.Identifier:
            case SolidityParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                this.state = 771;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
                    this.state = 770;
                    this.expressionList();
                }

                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

FunctionCallContext.prototype.functionCallArguments = function () {
    return this.getTypedRuleContext(FunctionCallArgumentsContext, 0);
};

FunctionCallContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterFunctionCall(this);
    }
};

FunctionCallContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitFunctionCall(this);
    }
};

SolidityParser.FunctionCallContext = FunctionCallContext;

SolidityParser.prototype.functionCall = function () {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, SolidityParser.RULE_functionCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 775;
        this.expression(0);
        this.state = 776;
        this.match(SolidityParser.T__20);
        this.state = 777;
        this.functionCallArguments();
        this.state = 778;
        this.match(SolidityParser.T__21);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyBlockContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyBlock;
    return this;
}

AssemblyBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyBlockContext.prototype.constructor = AssemblyBlockContext;

AssemblyBlockContext.prototype.assemblyItem = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(AssemblyItemContext);
    } else {
        return this.getTypedRuleContext(AssemblyItemContext, i);
    }
};

AssemblyBlockContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyBlock(this);
    }
};

AssemblyBlockContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyBlock(this);
    }
};

SolidityParser.AssemblyBlockContext = AssemblyBlockContext;

SolidityParser.prototype.assemblyBlock = function () {

    var localctx = new AssemblyBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, SolidityParser.RULE_assemblyBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 780;
        this.match(SolidityParser.T__13);
        this.state = 784;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__12 | 1 << SolidityParser.T__13 | 1 << SolidityParser.T__20 | 1 << SolidityParser.T__23 | 1 << SolidityParser.T__27)) !== 0 || (_la - 40 & ~0x1f) == 0 && (1 << _la - 40 & (1 << SolidityParser.T__39 - 40 | 1 << SolidityParser.T__42 - 40 | 1 << SolidityParser.T__44 - 40 | 1 << SolidityParser.T__48 - 40 | 1 << SolidityParser.T__51 - 40)) !== 0 || (_la - 84 & ~0x1f) == 0 && (1 << _la - 84 & (1 << SolidityParser.T__83 - 84 | 1 << SolidityParser.T__85 - 84 | 1 << SolidityParser.T__86 - 84 | 1 << SolidityParser.DecimalNumber - 84 | 1 << SolidityParser.HexNumber - 84 | 1 << SolidityParser.HexLiteral - 84 | 1 << SolidityParser.BreakKeyword - 84 | 1 << SolidityParser.ContinueKeyword - 84 | 1 << SolidityParser.Identifier - 84)) !== 0 || _la === SolidityParser.StringLiteral) {
            this.state = 781;
            this.assemblyItem();
            this.state = 786;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 787;
        this.match(SolidityParser.T__15);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyItemContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyItem;
    return this;
}

AssemblyItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyItemContext.prototype.constructor = AssemblyItemContext;

AssemblyItemContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

AssemblyItemContext.prototype.assemblyBlock = function () {
    return this.getTypedRuleContext(AssemblyBlockContext, 0);
};

AssemblyItemContext.prototype.assemblyExpression = function () {
    return this.getTypedRuleContext(AssemblyExpressionContext, 0);
};

AssemblyItemContext.prototype.assemblyLocalDefinition = function () {
    return this.getTypedRuleContext(AssemblyLocalDefinitionContext, 0);
};

AssemblyItemContext.prototype.assemblyAssignment = function () {
    return this.getTypedRuleContext(AssemblyAssignmentContext, 0);
};

AssemblyItemContext.prototype.assemblyStackAssignment = function () {
    return this.getTypedRuleContext(AssemblyStackAssignmentContext, 0);
};

AssemblyItemContext.prototype.labelDefinition = function () {
    return this.getTypedRuleContext(LabelDefinitionContext, 0);
};

AssemblyItemContext.prototype.assemblySwitch = function () {
    return this.getTypedRuleContext(AssemblySwitchContext, 0);
};

AssemblyItemContext.prototype.assemblyFunctionDefinition = function () {
    return this.getTypedRuleContext(AssemblyFunctionDefinitionContext, 0);
};

AssemblyItemContext.prototype.assemblyFor = function () {
    return this.getTypedRuleContext(AssemblyForContext, 0);
};

AssemblyItemContext.prototype.assemblyIf = function () {
    return this.getTypedRuleContext(AssemblyIfContext, 0);
};

AssemblyItemContext.prototype.BreakKeyword = function () {
    return this.getToken(SolidityParser.BreakKeyword, 0);
};

AssemblyItemContext.prototype.ContinueKeyword = function () {
    return this.getToken(SolidityParser.ContinueKeyword, 0);
};

AssemblyItemContext.prototype.subAssembly = function () {
    return this.getTypedRuleContext(SubAssemblyContext, 0);
};

AssemblyItemContext.prototype.numberLiteral = function () {
    return this.getTypedRuleContext(NumberLiteralContext, 0);
};

AssemblyItemContext.prototype.StringLiteral = function () {
    return this.getToken(SolidityParser.StringLiteral, 0);
};

AssemblyItemContext.prototype.HexLiteral = function () {
    return this.getToken(SolidityParser.HexLiteral, 0);
};

AssemblyItemContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyItem(this);
    }
};

AssemblyItemContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyItem(this);
    }
};

SolidityParser.AssemblyItemContext = AssemblyItemContext;

SolidityParser.prototype.assemblyItem = function () {

    var localctx = new AssemblyItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, SolidityParser.RULE_assemblyItem);
    try {
        this.state = 806;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 80, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 789;
                this.identifier();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 790;
                this.assemblyBlock();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 791;
                this.assemblyExpression();
                break;

            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 792;
                this.assemblyLocalDefinition();
                break;

            case 5:
                this.enterOuterAlt(localctx, 5);
                this.state = 793;
                this.assemblyAssignment();
                break;

            case 6:
                this.enterOuterAlt(localctx, 6);
                this.state = 794;
                this.assemblyStackAssignment();
                break;

            case 7:
                this.enterOuterAlt(localctx, 7);
                this.state = 795;
                this.labelDefinition();
                break;

            case 8:
                this.enterOuterAlt(localctx, 8);
                this.state = 796;
                this.assemblySwitch();
                break;

            case 9:
                this.enterOuterAlt(localctx, 9);
                this.state = 797;
                this.assemblyFunctionDefinition();
                break;

            case 10:
                this.enterOuterAlt(localctx, 10);
                this.state = 798;
                this.assemblyFor();
                break;

            case 11:
                this.enterOuterAlt(localctx, 11);
                this.state = 799;
                this.assemblyIf();
                break;

            case 12:
                this.enterOuterAlt(localctx, 12);
                this.state = 800;
                this.match(SolidityParser.BreakKeyword);
                break;

            case 13:
                this.enterOuterAlt(localctx, 13);
                this.state = 801;
                this.match(SolidityParser.ContinueKeyword);
                break;

            case 14:
                this.enterOuterAlt(localctx, 14);
                this.state = 802;
                this.subAssembly();
                break;

            case 15:
                this.enterOuterAlt(localctx, 15);
                this.state = 803;
                this.numberLiteral();
                break;

            case 16:
                this.enterOuterAlt(localctx, 16);
                this.state = 804;
                this.match(SolidityParser.StringLiteral);
                break;

            case 17:
                this.enterOuterAlt(localctx, 17);
                this.state = 805;
                this.match(SolidityParser.HexLiteral);
                break;

        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyExpression;
    return this;
}

AssemblyExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyExpressionContext.prototype.constructor = AssemblyExpressionContext;

AssemblyExpressionContext.prototype.assemblyCall = function () {
    return this.getTypedRuleContext(AssemblyCallContext, 0);
};

AssemblyExpressionContext.prototype.assemblyLiteral = function () {
    return this.getTypedRuleContext(AssemblyLiteralContext, 0);
};

AssemblyExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyExpression(this);
    }
};

AssemblyExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyExpression(this);
    }
};

SolidityParser.AssemblyExpressionContext = AssemblyExpressionContext;

SolidityParser.prototype.assemblyExpression = function () {

    var localctx = new AssemblyExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, SolidityParser.RULE_assemblyExpression);
    try {
        this.state = 810;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__12:
            case SolidityParser.T__44:
            case SolidityParser.T__48:
            case SolidityParser.T__51:
            case SolidityParser.Identifier:
                this.enterOuterAlt(localctx, 1);
                this.state = 808;
                this.assemblyCall();
                break;
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
            case SolidityParser.HexLiteral:
            case SolidityParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                this.state = 809;
                this.assemblyLiteral();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyCallContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyCall;
    return this;
}

AssemblyCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyCallContext.prototype.constructor = AssemblyCallContext;

AssemblyCallContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

AssemblyCallContext.prototype.assemblyExpression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(AssemblyExpressionContext);
    } else {
        return this.getTypedRuleContext(AssemblyExpressionContext, i);
    }
};

AssemblyCallContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyCall(this);
    }
};

AssemblyCallContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyCall(this);
    }
};

SolidityParser.AssemblyCallContext = AssemblyCallContext;

SolidityParser.prototype.assemblyCall = function () {

    var localctx = new AssemblyCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, SolidityParser.RULE_assemblyCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 816;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__44:
                this.state = 812;
                this.match(SolidityParser.T__44);
                break;
            case SolidityParser.T__48:
                this.state = 813;
                this.match(SolidityParser.T__48);
                break;
            case SolidityParser.T__51:
                this.state = 814;
                this.match(SolidityParser.T__51);
                break;
            case SolidityParser.T__12:
            case SolidityParser.Identifier:
                this.state = 815;
                this.identifier();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 830;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 85, this._ctx);
        if (la_ === 1) {
            this.state = 818;
            this.match(SolidityParser.T__20);
            this.state = 820;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === SolidityParser.T__12 || (_la - 45 & ~0x1f) == 0 && (1 << _la - 45 & (1 << SolidityParser.T__44 - 45 | 1 << SolidityParser.T__48 - 45 | 1 << SolidityParser.T__51 - 45)) !== 0 || (_la - 98 & ~0x1f) == 0 && (1 << _la - 98 & (1 << SolidityParser.DecimalNumber - 98 | 1 << SolidityParser.HexNumber - 98 | 1 << SolidityParser.HexLiteral - 98 | 1 << SolidityParser.Identifier - 98 | 1 << SolidityParser.StringLiteral - 98)) !== 0) {
                this.state = 819;
                this.assemblyExpression();
            }

            this.state = 826;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SolidityParser.T__14) {
                this.state = 822;
                this.match(SolidityParser.T__14);
                this.state = 823;
                this.assemblyExpression();
                this.state = 828;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 829;
            this.match(SolidityParser.T__21);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyLocalDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyLocalDefinition;
    return this;
}

AssemblyLocalDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyLocalDefinitionContext.prototype.constructor = AssemblyLocalDefinitionContext;

AssemblyLocalDefinitionContext.prototype.assemblyIdentifierOrList = function () {
    return this.getTypedRuleContext(AssemblyIdentifierOrListContext, 0);
};

AssemblyLocalDefinitionContext.prototype.assemblyExpression = function () {
    return this.getTypedRuleContext(AssemblyExpressionContext, 0);
};

AssemblyLocalDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyLocalDefinition(this);
    }
};

AssemblyLocalDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyLocalDefinition(this);
    }
};

SolidityParser.AssemblyLocalDefinitionContext = AssemblyLocalDefinitionContext;

SolidityParser.prototype.assemblyLocalDefinition = function () {

    var localctx = new AssemblyLocalDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, SolidityParser.RULE_assemblyLocalDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 832;
        this.match(SolidityParser.T__83);
        this.state = 833;
        this.assemblyIdentifierOrList();
        this.state = 836;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__84) {
            this.state = 834;
            this.match(SolidityParser.T__84);
            this.state = 835;
            this.assemblyExpression();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyAssignmentContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyAssignment;
    return this;
}

AssemblyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyAssignmentContext.prototype.constructor = AssemblyAssignmentContext;

AssemblyAssignmentContext.prototype.assemblyIdentifierOrList = function () {
    return this.getTypedRuleContext(AssemblyIdentifierOrListContext, 0);
};

AssemblyAssignmentContext.prototype.assemblyExpression = function () {
    return this.getTypedRuleContext(AssemblyExpressionContext, 0);
};

AssemblyAssignmentContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyAssignment(this);
    }
};

AssemblyAssignmentContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyAssignment(this);
    }
};

SolidityParser.AssemblyAssignmentContext = AssemblyAssignmentContext;

SolidityParser.prototype.assemblyAssignment = function () {

    var localctx = new AssemblyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, SolidityParser.RULE_assemblyAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 838;
        this.assemblyIdentifierOrList();
        this.state = 839;
        this.match(SolidityParser.T__84);
        this.state = 840;
        this.assemblyExpression();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyIdentifierOrListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyIdentifierOrList;
    return this;
}

AssemblyIdentifierOrListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyIdentifierOrListContext.prototype.constructor = AssemblyIdentifierOrListContext;

AssemblyIdentifierOrListContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

AssemblyIdentifierOrListContext.prototype.assemblyIdentifierList = function () {
    return this.getTypedRuleContext(AssemblyIdentifierListContext, 0);
};

AssemblyIdentifierOrListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyIdentifierOrList(this);
    }
};

AssemblyIdentifierOrListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyIdentifierOrList(this);
    }
};

SolidityParser.AssemblyIdentifierOrListContext = AssemblyIdentifierOrListContext;

SolidityParser.prototype.assemblyIdentifierOrList = function () {

    var localctx = new AssemblyIdentifierOrListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, SolidityParser.RULE_assemblyIdentifierOrList);
    try {
        this.state = 847;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__12:
            case SolidityParser.Identifier:
                this.enterOuterAlt(localctx, 1);
                this.state = 842;
                this.identifier();
                break;
            case SolidityParser.T__20:
                this.enterOuterAlt(localctx, 2);
                this.state = 843;
                this.match(SolidityParser.T__20);
                this.state = 844;
                this.assemblyIdentifierList();
                this.state = 845;
                this.match(SolidityParser.T__21);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyIdentifierListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyIdentifierList;
    return this;
}

AssemblyIdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyIdentifierListContext.prototype.constructor = AssemblyIdentifierListContext;

AssemblyIdentifierListContext.prototype.identifier = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
};

AssemblyIdentifierListContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyIdentifierList(this);
    }
};

AssemblyIdentifierListContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyIdentifierList(this);
    }
};

SolidityParser.AssemblyIdentifierListContext = AssemblyIdentifierListContext;

SolidityParser.prototype.assemblyIdentifierList = function () {

    var localctx = new AssemblyIdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, SolidityParser.RULE_assemblyIdentifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 849;
        this.identifier();
        this.state = 854;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SolidityParser.T__14) {
            this.state = 850;
            this.match(SolidityParser.T__14);
            this.state = 851;
            this.identifier();
            this.state = 856;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyStackAssignmentContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyStackAssignment;
    return this;
}

AssemblyStackAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyStackAssignmentContext.prototype.constructor = AssemblyStackAssignmentContext;

AssemblyStackAssignmentContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

AssemblyStackAssignmentContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyStackAssignment(this);
    }
};

AssemblyStackAssignmentContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyStackAssignment(this);
    }
};

SolidityParser.AssemblyStackAssignmentContext = AssemblyStackAssignmentContext;

SolidityParser.prototype.assemblyStackAssignment = function () {

    var localctx = new AssemblyStackAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 140, SolidityParser.RULE_assemblyStackAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 857;
        this.match(SolidityParser.T__85);
        this.state = 858;
        this.identifier();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_labelDefinition;
    return this;
}

LabelDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelDefinitionContext.prototype.constructor = LabelDefinitionContext;

LabelDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

LabelDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterLabelDefinition(this);
    }
};

LabelDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitLabelDefinition(this);
    }
};

SolidityParser.LabelDefinitionContext = LabelDefinitionContext;

SolidityParser.prototype.labelDefinition = function () {

    var localctx = new LabelDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 142, SolidityParser.RULE_labelDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 860;
        this.identifier();
        this.state = 861;
        this.match(SolidityParser.T__72);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblySwitchContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblySwitch;
    return this;
}

AssemblySwitchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblySwitchContext.prototype.constructor = AssemblySwitchContext;

AssemblySwitchContext.prototype.assemblyExpression = function () {
    return this.getTypedRuleContext(AssemblyExpressionContext, 0);
};

AssemblySwitchContext.prototype.assemblyCase = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(AssemblyCaseContext);
    } else {
        return this.getTypedRuleContext(AssemblyCaseContext, i);
    }
};

AssemblySwitchContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblySwitch(this);
    }
};

AssemblySwitchContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblySwitch(this);
    }
};

SolidityParser.AssemblySwitchContext = AssemblySwitchContext;

SolidityParser.prototype.assemblySwitch = function () {

    var localctx = new AssemblySwitchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 144, SolidityParser.RULE_assemblySwitch);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 863;
        this.match(SolidityParser.T__86);
        this.state = 864;
        this.assemblyExpression();
        this.state = 868;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SolidityParser.T__87 || _la === SolidityParser.T__88) {
            this.state = 865;
            this.assemblyCase();
            this.state = 870;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyCaseContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyCase;
    return this;
}

AssemblyCaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyCaseContext.prototype.constructor = AssemblyCaseContext;

AssemblyCaseContext.prototype.assemblyLiteral = function () {
    return this.getTypedRuleContext(AssemblyLiteralContext, 0);
};

AssemblyCaseContext.prototype.assemblyBlock = function () {
    return this.getTypedRuleContext(AssemblyBlockContext, 0);
};

AssemblyCaseContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyCase(this);
    }
};

AssemblyCaseContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyCase(this);
    }
};

SolidityParser.AssemblyCaseContext = AssemblyCaseContext;

SolidityParser.prototype.assemblyCase = function () {

    var localctx = new AssemblyCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 146, SolidityParser.RULE_assemblyCase);
    try {
        this.state = 877;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__87:
                this.enterOuterAlt(localctx, 1);
                this.state = 871;
                this.match(SolidityParser.T__87);
                this.state = 872;
                this.assemblyLiteral();
                this.state = 873;
                this.assemblyBlock();
                break;
            case SolidityParser.T__88:
                this.enterOuterAlt(localctx, 2);
                this.state = 875;
                this.match(SolidityParser.T__88);
                this.state = 876;
                this.assemblyBlock();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyFunctionDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyFunctionDefinition;
    return this;
}

AssemblyFunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyFunctionDefinitionContext.prototype.constructor = AssemblyFunctionDefinitionContext;

AssemblyFunctionDefinitionContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

AssemblyFunctionDefinitionContext.prototype.assemblyBlock = function () {
    return this.getTypedRuleContext(AssemblyBlockContext, 0);
};

AssemblyFunctionDefinitionContext.prototype.assemblyIdentifierList = function () {
    return this.getTypedRuleContext(AssemblyIdentifierListContext, 0);
};

AssemblyFunctionDefinitionContext.prototype.assemblyFunctionReturns = function () {
    return this.getTypedRuleContext(AssemblyFunctionReturnsContext, 0);
};

AssemblyFunctionDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyFunctionDefinition(this);
    }
};

AssemblyFunctionDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyFunctionDefinition(this);
    }
};

SolidityParser.AssemblyFunctionDefinitionContext = AssemblyFunctionDefinitionContext;

SolidityParser.prototype.assemblyFunctionDefinition = function () {

    var localctx = new AssemblyFunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 148, SolidityParser.RULE_assemblyFunctionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 879;
        this.match(SolidityParser.T__27);
        this.state = 880;
        this.identifier();
        this.state = 881;
        this.match(SolidityParser.T__20);
        this.state = 883;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
            this.state = 882;
            this.assemblyIdentifierList();
        }

        this.state = 885;
        this.match(SolidityParser.T__21);
        this.state = 887;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SolidityParser.T__89) {
            this.state = 886;
            this.assemblyFunctionReturns();
        }

        this.state = 889;
        this.assemblyBlock();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyFunctionReturnsContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyFunctionReturns;
    return this;
}

AssemblyFunctionReturnsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyFunctionReturnsContext.prototype.constructor = AssemblyFunctionReturnsContext;

AssemblyFunctionReturnsContext.prototype.assemblyIdentifierList = function () {
    return this.getTypedRuleContext(AssemblyIdentifierListContext, 0);
};

AssemblyFunctionReturnsContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyFunctionReturns(this);
    }
};

AssemblyFunctionReturnsContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyFunctionReturns(this);
    }
};

SolidityParser.AssemblyFunctionReturnsContext = AssemblyFunctionReturnsContext;

SolidityParser.prototype.assemblyFunctionReturns = function () {

    var localctx = new AssemblyFunctionReturnsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 150, SolidityParser.RULE_assemblyFunctionReturns);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 891;
        this.match(SolidityParser.T__89);
        this.state = 892;
        this.assemblyIdentifierList();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyForContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyFor;
    return this;
}

AssemblyForContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyForContext.prototype.constructor = AssemblyForContext;

AssemblyForContext.prototype.assemblyExpression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(AssemblyExpressionContext);
    } else {
        return this.getTypedRuleContext(AssemblyExpressionContext, i);
    }
};

AssemblyForContext.prototype.assemblyBlock = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(AssemblyBlockContext);
    } else {
        return this.getTypedRuleContext(AssemblyBlockContext, i);
    }
};

AssemblyForContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyFor(this);
    }
};

AssemblyForContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyFor(this);
    }
};

SolidityParser.AssemblyForContext = AssemblyForContext;

SolidityParser.prototype.assemblyFor = function () {

    var localctx = new AssemblyForContext(this, this._ctx, this.state);
    this.enterRule(localctx, 152, SolidityParser.RULE_assemblyFor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 894;
        this.match(SolidityParser.T__23);
        this.state = 897;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__13:
                this.state = 895;
                this.assemblyBlock();
                break;
            case SolidityParser.T__12:
            case SolidityParser.T__44:
            case SolidityParser.T__48:
            case SolidityParser.T__51:
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
            case SolidityParser.HexLiteral:
            case SolidityParser.Identifier:
            case SolidityParser.StringLiteral:
                this.state = 896;
                this.assemblyExpression();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 899;
        this.assemblyExpression();
        this.state = 902;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__13:
                this.state = 900;
                this.assemblyBlock();
                break;
            case SolidityParser.T__12:
            case SolidityParser.T__44:
            case SolidityParser.T__48:
            case SolidityParser.T__51:
            case SolidityParser.DecimalNumber:
            case SolidityParser.HexNumber:
            case SolidityParser.HexLiteral:
            case SolidityParser.Identifier:
            case SolidityParser.StringLiteral:
                this.state = 901;
                this.assemblyExpression();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 904;
        this.assemblyBlock();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyIfContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyIf;
    return this;
}

AssemblyIfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyIfContext.prototype.constructor = AssemblyIfContext;

AssemblyIfContext.prototype.assemblyExpression = function () {
    return this.getTypedRuleContext(AssemblyExpressionContext, 0);
};

AssemblyIfContext.prototype.assemblyBlock = function () {
    return this.getTypedRuleContext(AssemblyBlockContext, 0);
};

AssemblyIfContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyIf(this);
    }
};

AssemblyIfContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyIf(this);
    }
};

SolidityParser.AssemblyIfContext = AssemblyIfContext;

SolidityParser.prototype.assemblyIf = function () {

    var localctx = new AssemblyIfContext(this, this._ctx, this.state);
    this.enterRule(localctx, 154, SolidityParser.RULE_assemblyIf);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 906;
        this.match(SolidityParser.T__39);
        this.state = 907;
        this.assemblyExpression();
        this.state = 908;
        this.assemblyBlock();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssemblyLiteralContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_assemblyLiteral;
    return this;
}

AssemblyLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblyLiteralContext.prototype.constructor = AssemblyLiteralContext;

AssemblyLiteralContext.prototype.StringLiteral = function () {
    return this.getToken(SolidityParser.StringLiteral, 0);
};

AssemblyLiteralContext.prototype.DecimalNumber = function () {
    return this.getToken(SolidityParser.DecimalNumber, 0);
};

AssemblyLiteralContext.prototype.HexNumber = function () {
    return this.getToken(SolidityParser.HexNumber, 0);
};

AssemblyLiteralContext.prototype.HexLiteral = function () {
    return this.getToken(SolidityParser.HexLiteral, 0);
};

AssemblyLiteralContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterAssemblyLiteral(this);
    }
};

AssemblyLiteralContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitAssemblyLiteral(this);
    }
};

SolidityParser.AssemblyLiteralContext = AssemblyLiteralContext;

SolidityParser.prototype.assemblyLiteral = function () {

    var localctx = new AssemblyLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 156, SolidityParser.RULE_assemblyLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 910;
        _la = this._input.LA(1);
        if (!((_la - 98 & ~0x1f) == 0 && (1 << _la - 98 & (1 << SolidityParser.DecimalNumber - 98 | 1 << SolidityParser.HexNumber - 98 | 1 << SolidityParser.HexLiteral - 98 | 1 << SolidityParser.StringLiteral - 98)) !== 0)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubAssemblyContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_subAssembly;
    return this;
}

SubAssemblyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubAssemblyContext.prototype.constructor = SubAssemblyContext;

SubAssemblyContext.prototype.identifier = function () {
    return this.getTypedRuleContext(IdentifierContext, 0);
};

SubAssemblyContext.prototype.assemblyBlock = function () {
    return this.getTypedRuleContext(AssemblyBlockContext, 0);
};

SubAssemblyContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterSubAssembly(this);
    }
};

SubAssemblyContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitSubAssembly(this);
    }
};

SolidityParser.SubAssemblyContext = SubAssemblyContext;

SolidityParser.prototype.subAssembly = function () {

    var localctx = new SubAssemblyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 158, SolidityParser.RULE_subAssembly);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 912;
        this.match(SolidityParser.T__42);
        this.state = 913;
        this.identifier();
        this.state = 914;
        this.assemblyBlock();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_tupleExpression;
    return this;
}

TupleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleExpressionContext.prototype.constructor = TupleExpressionContext;

TupleExpressionContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};

TupleExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterTupleExpression(this);
    }
};

TupleExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitTupleExpression(this);
    }
};

SolidityParser.TupleExpressionContext = TupleExpressionContext;

SolidityParser.prototype.tupleExpression = function () {

    var localctx = new TupleExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 160, SolidityParser.RULE_tupleExpression);
    var _la = 0; // Token type
    try {
        this.state = 942;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case SolidityParser.T__20:
                this.enterOuterAlt(localctx, 1);
                this.state = 916;
                this.match(SolidityParser.T__20);

                this.state = 918;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
                    this.state = 917;
                    this.expression(0);
                }

                this.state = 926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SolidityParser.T__14) {
                    this.state = 920;
                    this.match(SolidityParser.T__14);
                    this.state = 922;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
                        this.state = 921;
                        this.expression(0);
                    }

                    this.state = 928;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 929;
                this.match(SolidityParser.T__21);
                break;
            case SolidityParser.T__31:
                this.enterOuterAlt(localctx, 2);
                this.state = 930;
                this.match(SolidityParser.T__31);
                this.state = 939;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((_la & ~0x1f) == 0 && (1 << _la & (1 << SolidityParser.T__3 | 1 << SolidityParser.T__12 | 1 << SolidityParser.T__20)) !== 0 || (_la - 32 & ~0x1f) == 0 && (1 << _la - 32 & (1 << SolidityParser.T__31 - 32 | 1 << SolidityParser.T__47 - 32 | 1 << SolidityParser.T__48 - 32 | 1 << SolidityParser.T__49 - 32 | 1 << SolidityParser.T__50 - 32 | 1 << SolidityParser.T__51 - 32 | 1 << SolidityParser.T__52 - 32 | 1 << SolidityParser.T__53 - 32 | 1 << SolidityParser.T__54 - 32 | 1 << SolidityParser.T__55 - 32 | 1 << SolidityParser.T__56 - 32 | 1 << SolidityParser.T__57 - 32 | 1 << SolidityParser.T__58 - 32 | 1 << SolidityParser.T__59 - 32)) !== 0 || (_la - 91 & ~0x1f) == 0 && (1 << _la - 91 & (1 << SolidityParser.Int - 91 | 1 << SolidityParser.Uint - 91 | 1 << SolidityParser.Byte - 91 | 1 << SolidityParser.Fixed - 91 | 1 << SolidityParser.Ufixed - 91 | 1 << SolidityParser.BooleanLiteral - 91 | 1 << SolidityParser.DecimalNumber - 91 | 1 << SolidityParser.HexNumber - 91 | 1 << SolidityParser.HexLiteral - 91 | 1 << SolidityParser.Identifier - 91 | 1 << SolidityParser.StringLiteral - 91)) !== 0) {
                    this.state = 931;
                    this.expression(0);
                    this.state = 936;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === SolidityParser.T__14) {
                        this.state = 932;
                        this.match(SolidityParser.T__14);
                        this.state = 933;
                        this.expression(0);
                        this.state = 938;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }

                this.state = 941;
                this.match(SolidityParser.T__32);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementaryTypeNameExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_elementaryTypeNameExpression;
    return this;
}

ElementaryTypeNameExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementaryTypeNameExpressionContext.prototype.constructor = ElementaryTypeNameExpressionContext;

ElementaryTypeNameExpressionContext.prototype.elementaryTypeName = function () {
    return this.getTypedRuleContext(ElementaryTypeNameContext, 0);
};

ElementaryTypeNameExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterElementaryTypeNameExpression(this);
    }
};

ElementaryTypeNameExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitElementaryTypeNameExpression(this);
    }
};

SolidityParser.ElementaryTypeNameExpressionContext = ElementaryTypeNameExpressionContext;

SolidityParser.prototype.elementaryTypeNameExpression = function () {

    var localctx = new ElementaryTypeNameExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 162, SolidityParser.RULE_elementaryTypeNameExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 944;
        this.elementaryTypeName();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberLiteralContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_numberLiteral;
    return this;
}

NumberLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberLiteralContext.prototype.constructor = NumberLiteralContext;

NumberLiteralContext.prototype.DecimalNumber = function () {
    return this.getToken(SolidityParser.DecimalNumber, 0);
};

NumberLiteralContext.prototype.HexNumber = function () {
    return this.getToken(SolidityParser.HexNumber, 0);
};

NumberLiteralContext.prototype.NumberUnit = function () {
    return this.getToken(SolidityParser.NumberUnit, 0);
};

NumberLiteralContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterNumberLiteral(this);
    }
};

NumberLiteralContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitNumberLiteral(this);
    }
};

SolidityParser.NumberLiteralContext = NumberLiteralContext;

SolidityParser.prototype.numberLiteral = function () {

    var localctx = new NumberLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 164, SolidityParser.RULE_numberLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 946;
        _la = this._input.LA(1);
        if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 948;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 101, this._ctx);
        if (la_ === 1) {
            this.state = 947;
            this.match(SolidityParser.NumberUnit);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolidityParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.Identifier = function () {
    return this.getToken(SolidityParser.Identifier, 0);
};

IdentifierContext.prototype.enterRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.enterIdentifier(this);
    }
};

IdentifierContext.prototype.exitRule = function (listener) {
    if (listener instanceof SolidityListener) {
        listener.exitIdentifier(this);
    }
};

SolidityParser.IdentifierContext = IdentifierContext;

SolidityParser.prototype.identifier = function () {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 166, SolidityParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 950;
        _la = this._input.LA(1);
        if (!(_la === SolidityParser.T__12 || _la === SolidityParser.Identifier)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

SolidityParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 31:
            return this.typeName_sempred(localctx, predIndex);
        case 55:
            return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

SolidityParser.prototype.typeName_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 2);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

SolidityParser.prototype.expression_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 1:
            return this.precpred(this._ctx, 14);
        case 2:
            return this.precpred(this._ctx, 13);
        case 3:
            return this.precpred(this._ctx, 12);
        case 4:
            return this.precpred(this._ctx, 11);
        case 5:
            return this.precpred(this._ctx, 10);
        case 6:
            return this.precpred(this._ctx, 9);
        case 7:
            return this.precpred(this._ctx, 8);
        case 8:
            return this.precpred(this._ctx, 7);
        case 9:
            return this.precpred(this._ctx, 6);
        case 10:
            return this.precpred(this._ctx, 5);
        case 11:
            return this.precpred(this._ctx, 4);
        case 12:
            return this.precpred(this._ctx, 3);
        case 13:
            return this.precpred(this._ctx, 2);
        case 14:
            return this.precpred(this._ctx, 25);
        case 15:
            return this.precpred(this._ctx, 23);
        case 16:
            return this.precpred(this._ctx, 22);
        case 17:
            return this.precpred(this._ctx, 21);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

exports.SolidityParser = SolidityParser;