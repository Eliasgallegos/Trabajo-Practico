// Generated from c:/Users/Galle/Documents/mi analizador/Declaraciones.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,17,88,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,
5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,
1,14,1,14,1,15,1,15,1,16,4,16,83,8,16,11,16,12,16,84,1,16,1,16,0,0,17,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
31,16,33,17,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,88,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,1,35,1,
0,0,0,3,39,1,0,0,0,5,45,1,0,0,0,7,50,1,0,0,0,9,57,1,0,0,0,11,59,1,0,0,0,
13,61,1,0,0,0,15,63,1,0,0,0,17,65,1,0,0,0,19,67,1,0,0,0,21,69,1,0,0,0,23,
71,1,0,0,0,25,73,1,0,0,0,27,75,1,0,0,0,29,77,1,0,0,0,31,79,1,0,0,0,33,82,
1,0,0,0,35,36,5,105,0,0,36,37,5,110,0,0,37,38,5,116,0,0,38,2,1,0,0,0,39,
40,5,102,0,0,40,41,5,108,0,0,41,42,5,111,0,0,42,43,5,97,0,0,43,44,5,116,
0,0,44,4,1,0,0,0,45,46,5,99,0,0,46,47,5,104,0,0,47,48,5,97,0,0,48,49,5,114,
0,0,49,6,1,0,0,0,50,51,5,114,0,0,51,52,5,101,0,0,52,53,5,116,0,0,53,54,5,
117,0,0,54,55,5,114,0,0,55,56,5,110,0,0,56,8,1,0,0,0,57,58,5,40,0,0,58,10,
1,0,0,0,59,60,5,41,0,0,60,12,1,0,0,0,61,62,5,123,0,0,62,14,1,0,0,0,63,64,
5,125,0,0,64,16,1,0,0,0,65,66,5,44,0,0,66,18,1,0,0,0,67,68,5,59,0,0,68,20,
1,0,0,0,69,70,5,42,0,0,70,22,1,0,0,0,71,72,5,47,0,0,72,24,1,0,0,0,73,74,
5,43,0,0,74,26,1,0,0,0,75,76,5,45,0,0,76,28,1,0,0,0,77,78,7,0,0,0,78,30,
1,0,0,0,79,80,7,1,0,0,80,32,1,0,0,0,81,83,7,2,0,0,82,81,1,0,0,0,83,84,1,
0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,6,16,0,0,87,34,1,0,
0,0,2,0,84,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class DeclaracionesLexer extends antlr4.Lexer {

    static grammarFileName = "Declaraciones.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'int'", "'float'", "'char'", "'return'", 
                         "'('", "')'", "'{'", "'}'", "','", "';'", "'*'", 
                         "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, "INT", "FLOAT", "CHAR", "RET", "LPAREN", 
                          "RPAREN", "LBRACE", "RBRACE", "COM", "SEMI", "MUL", 
                          "DIV", "ADD", "SUB", "Letra", "Digito", "WS" ];
	static ruleNames = [ "INT", "FLOAT", "CHAR", "RET", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "COM", "SEMI", "MUL", "DIV", "ADD", 
                      "SUB", "Letra", "Digito", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

DeclaracionesLexer.EOF = antlr4.Token.EOF;
DeclaracionesLexer.INT = 1;
DeclaracionesLexer.FLOAT = 2;
DeclaracionesLexer.CHAR = 3;
DeclaracionesLexer.RET = 4;
DeclaracionesLexer.LPAREN = 5;
DeclaracionesLexer.RPAREN = 6;
DeclaracionesLexer.LBRACE = 7;
DeclaracionesLexer.RBRACE = 8;
DeclaracionesLexer.COM = 9;
DeclaracionesLexer.SEMI = 10;
DeclaracionesLexer.MUL = 11;
DeclaracionesLexer.DIV = 12;
DeclaracionesLexer.ADD = 13;
DeclaracionesLexer.SUB = 14;
DeclaracionesLexer.Letra = 15;
DeclaracionesLexer.Digito = 16;
DeclaracionesLexer.WS = 17;



