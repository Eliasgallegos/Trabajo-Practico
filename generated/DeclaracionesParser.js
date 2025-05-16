// Generated from c:/Users/Galle/Documents/mi analizador/Declaraciones.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DeclaracionesListener from './DeclaracionesListener.js';
const serializedATN = [4,1,17,138,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,3,1,3,1,4,1,4,5,4,50,8,4,10,4,12,4,53,9,4,1,5,1,5,1,5,1,5,
5,5,59,8,5,10,5,12,5,62,9,5,1,5,3,5,65,8,5,1,6,1,6,1,6,1,7,1,7,1,7,5,7,73,
8,7,10,7,12,7,76,9,7,1,7,3,7,79,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,
10,1,10,5,10,91,8,10,10,10,12,10,94,9,10,1,10,1,10,1,10,1,10,5,10,100,8,
10,10,10,12,10,103,9,10,1,10,3,10,106,8,10,1,11,1,11,1,11,1,11,5,11,112,
8,11,10,11,12,11,115,9,11,1,11,1,11,1,11,1,11,5,11,121,8,11,10,11,12,11,
124,9,11,1,11,3,11,127,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,136,
8,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,2,1,0,1,3,1,0,15,16,
141,0,26,1,0,0,0,2,28,1,0,0,0,4,36,1,0,0,0,6,45,1,0,0,0,8,47,1,0,0,0,10,
64,1,0,0,0,12,66,1,0,0,0,14,78,1,0,0,0,16,80,1,0,0,0,18,82,1,0,0,0,20,105,
1,0,0,0,22,126,1,0,0,0,24,135,1,0,0,0,26,27,3,2,1,0,27,1,1,0,0,0,28,33,3,
4,2,0,29,32,3,2,1,0,30,32,3,4,2,0,31,29,1,0,0,0,31,30,1,0,0,0,32,35,1,0,
0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,3,1,0,0,0,35,33,1,0,0,0,36,37,3,6,3,0,
37,38,3,8,4,0,38,39,5,5,0,0,39,40,3,10,5,0,40,41,5,6,0,0,41,42,5,7,0,0,42,
43,3,14,7,0,43,44,5,8,0,0,44,5,1,0,0,0,45,46,7,0,0,0,46,7,1,0,0,0,47,51,
5,15,0,0,48,50,7,1,0,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,
0,0,0,52,9,1,0,0,0,53,51,1,0,0,0,54,55,3,12,6,0,55,56,5,9,0,0,56,57,3,10,
5,0,57,59,1,0,0,0,58,54,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,
0,61,65,1,0,0,0,62,60,1,0,0,0,63,65,3,12,6,0,64,60,1,0,0,0,64,63,1,0,0,0,
65,11,1,0,0,0,66,67,3,6,3,0,67,68,3,8,4,0,68,13,1,0,0,0,69,70,3,16,8,0,70,
71,3,14,7,0,71,73,1,0,0,0,72,69,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,
1,0,0,0,75,79,1,0,0,0,76,74,1,0,0,0,77,79,3,16,8,0,78,74,1,0,0,0,78,77,1,
0,0,0,79,15,1,0,0,0,80,81,3,18,9,0,81,17,1,0,0,0,82,83,5,4,0,0,83,84,3,20,
10,0,84,85,5,10,0,0,85,19,1,0,0,0,86,87,3,22,11,0,87,88,5,13,0,0,88,89,3,
20,10,0,89,91,1,0,0,0,90,86,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,
0,0,0,93,106,1,0,0,0,94,92,1,0,0,0,95,96,3,22,11,0,96,97,5,14,0,0,97,98,
3,20,10,0,98,100,1,0,0,0,99,95,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,
102,1,0,0,0,102,106,1,0,0,0,103,101,1,0,0,0,104,106,3,22,11,0,105,92,1,0,
0,0,105,101,1,0,0,0,105,104,1,0,0,0,106,21,1,0,0,0,107,108,3,24,12,0,108,
109,5,11,0,0,109,110,3,22,11,0,110,112,1,0,0,0,111,107,1,0,0,0,112,115,1,
0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,127,1,0,0,0,115,113,1,0,0,0,116,
117,3,24,12,0,117,118,5,12,0,0,118,119,3,22,11,0,119,121,1,0,0,0,120,116,
1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,127,1,0,0,0,
124,122,1,0,0,0,125,127,3,24,12,0,126,113,1,0,0,0,126,122,1,0,0,0,126,125,
1,0,0,0,127,23,1,0,0,0,128,136,5,16,0,0,129,130,5,15,0,0,130,136,7,1,0,0,
131,132,5,5,0,0,132,133,3,20,10,0,133,134,5,6,0,0,134,136,1,0,0,0,135,128,
1,0,0,0,135,129,1,0,0,0,135,131,1,0,0,0,136,25,1,0,0,0,14,31,33,51,60,64,
74,78,92,101,105,113,122,126,135];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DeclaracionesParser extends antlr4.Parser {

    static grammarFileName = "Declaraciones.g4";
    static literalNames = [ null, "'int'", "'float'", "'char'", "'return'", 
                            "'('", "')'", "'{'", "'}'", "','", "';'", "'*'", 
                            "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, "INT", "FLOAT", "CHAR", "RET", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "COM", "SEMI", 
                             "MUL", "DIV", "ADD", "SUB", "Letra", "Digito", 
                             "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "identificador", "parametros", "parametro", "cuerpo", 
                         "instruccion", "retorno", "expresion", "termino", 
                         "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DeclaracionesParser.ruleNames;
        this.literalNames = DeclaracionesParser.literalNames;
        this.symbolicNames = DeclaracionesParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DeclaracionesParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.declaraciones();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DeclaracionesParser.RULE_declaraciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.declaracion();
	        this.state = 33;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 31;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 29;
	                    this.declaraciones();
	                    break;

	                case 2:
	                    this.state = 30;
	                    this.declaracion();
	                    break;

	                } 
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DeclaracionesParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.tipo();
	        this.state = 37;
	        this.identificador();
	        this.state = 38;
	        this.match(DeclaracionesParser.LPAREN);
	        this.state = 39;
	        this.parametros();
	        this.state = 40;
	        this.match(DeclaracionesParser.RPAREN);
	        this.state = 41;
	        this.match(DeclaracionesParser.LBRACE);
	        this.state = 42;
	        this.cuerpo();
	        this.state = 43;
	        this.match(DeclaracionesParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DeclaracionesParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DeclaracionesParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(DeclaracionesParser.Letra);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15 || _la===16) {
	            this.state = 48;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DeclaracionesParser.RULE_parametros);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 54;
	                    this.parametro();
	                    this.state = 55;
	                    this.match(DeclaracionesParser.COM);
	                    this.state = 56;
	                    this.parametros(); 
	                }
	                this.state = 62;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.parametro();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DeclaracionesParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.tipo();
	        this.state = 67;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DeclaracionesParser.RULE_cuerpo);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 69;
	                    this.instruccion();
	                    this.state = 70;
	                    this.cuerpo(); 
	                }
	                this.state = 76;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.instruccion();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DeclaracionesParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DeclaracionesParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(DeclaracionesParser.RET);
	        this.state = 83;
	        this.expresion();
	        this.state = 84;
	        this.match(DeclaracionesParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DeclaracionesParser.RULE_expresion);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 86;
	                    this.termino();
	                    this.state = 87;
	                    this.match(DeclaracionesParser.ADD);
	                    this.state = 88;
	                    this.expresion(); 
	                }
	                this.state = 94;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 95;
	                    this.termino();
	                    this.state = 96;
	                    this.match(DeclaracionesParser.SUB);
	                    this.state = 97;
	                    this.expresion(); 
	                }
	                this.state = 103;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.termino();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DeclaracionesParser.RULE_termino);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 107;
	                    this.factor();
	                    this.state = 108;
	                    this.match(DeclaracionesParser.MUL);
	                    this.state = 109;
	                    this.termino(); 
	                }
	                this.state = 115;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 116;
	                    this.factor();
	                    this.state = 117;
	                    this.match(DeclaracionesParser.DIV);
	                    this.state = 118;
	                    this.termino(); 
	                }
	                this.state = 124;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            this.factor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DeclaracionesParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.state = 128;
	            this.match(DeclaracionesParser.Digito);
	            break;
	        case 15:
	            this.state = 129;
	            this.match(DeclaracionesParser.Letra);
	            this.state = 130;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 5:
	            this.state = 131;
	            this.match(DeclaracionesParser.LPAREN);
	            this.state = 132;
	            this.expresion();
	            this.state = 133;
	            this.match(DeclaracionesParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}


}

DeclaracionesParser.EOF = antlr4.Token.EOF;
DeclaracionesParser.INT = 1;
DeclaracionesParser.FLOAT = 2;
DeclaracionesParser.CHAR = 3;
DeclaracionesParser.RET = 4;
DeclaracionesParser.LPAREN = 5;
DeclaracionesParser.RPAREN = 6;
DeclaracionesParser.LBRACE = 7;
DeclaracionesParser.RBRACE = 8;
DeclaracionesParser.COM = 9;
DeclaracionesParser.SEMI = 10;
DeclaracionesParser.MUL = 11;
DeclaracionesParser.DIV = 12;
DeclaracionesParser.ADD = 13;
DeclaracionesParser.SUB = 14;
DeclaracionesParser.Letra = 15;
DeclaracionesParser.Digito = 16;
DeclaracionesParser.WS = 17;

DeclaracionesParser.RULE_programa = 0;
DeclaracionesParser.RULE_declaraciones = 1;
DeclaracionesParser.RULE_declaracion = 2;
DeclaracionesParser.RULE_tipo = 3;
DeclaracionesParser.RULE_identificador = 4;
DeclaracionesParser.RULE_parametros = 5;
DeclaracionesParser.RULE_parametro = 6;
DeclaracionesParser.RULE_cuerpo = 7;
DeclaracionesParser.RULE_instruccion = 8;
DeclaracionesParser.RULE_retorno = 9;
DeclaracionesParser.RULE_expresion = 10;
DeclaracionesParser.RULE_termino = 11;
DeclaracionesParser.RULE_factor = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_declaraciones;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	declaraciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionesContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitDeclaraciones(this);
		}
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LPAREN() {
	    return this.getToken(DeclaracionesParser.LPAREN, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	RPAREN() {
	    return this.getToken(DeclaracionesParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(DeclaracionesParser.LBRACE, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	RBRACE() {
	    return this.getToken(DeclaracionesParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitDeclaracion(this);
		}
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_tipo;
    }

	INT() {
	    return this.getToken(DeclaracionesParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(DeclaracionesParser.FLOAT, 0);
	};

	CHAR() {
	    return this.getToken(DeclaracionesParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitTipo(this);
		}
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_identificador;
    }

	Letra = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.Letra);
	    } else {
	        return this.getToken(DeclaracionesParser.Letra, i);
	    }
	};


	Digito = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.Digito);
	    } else {
	        return this.getToken(DeclaracionesParser.Digito, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitIdentificador(this);
		}
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	COM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.COM);
	    } else {
	        return this.getToken(DeclaracionesParser.COM, i);
	    }
	};


	parametros = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametrosContext);
	    } else {
	        return this.getTypedRuleContext(ParametrosContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitParametros(this);
		}
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitParametro(this);
		}
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_cuerpo;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	cuerpo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CuerpoContext);
	    } else {
	        return this.getTypedRuleContext(CuerpoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitCuerpo(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_retorno;
    }

	RET() {
	    return this.getToken(DeclaracionesParser.RET, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMI() {
	    return this.getToken(DeclaracionesParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitRetorno(this);
		}
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.ADD);
	    } else {
	        return this.getToken(DeclaracionesParser.ADD, i);
	    }
	};


	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.SUB);
	    } else {
	        return this.getToken(DeclaracionesParser.SUB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitExpresion(this);
		}
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_termino;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.MUL);
	    } else {
	        return this.getToken(DeclaracionesParser.MUL, i);
	    }
	};


	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.DIV);
	    } else {
	        return this.getToken(DeclaracionesParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitTermino(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_factor;
    }

	Digito() {
	    return this.getToken(DeclaracionesParser.Digito, 0);
	};

	Letra = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DeclaracionesParser.Letra);
	    } else {
	        return this.getToken(DeclaracionesParser.Letra, i);
	    }
	};


	LPAREN() {
	    return this.getToken(DeclaracionesParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(DeclaracionesParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitFactor(this);
		}
	}


}




DeclaracionesParser.ProgramaContext = ProgramaContext; 
DeclaracionesParser.DeclaracionesContext = DeclaracionesContext; 
DeclaracionesParser.DeclaracionContext = DeclaracionContext; 
DeclaracionesParser.TipoContext = TipoContext; 
DeclaracionesParser.IdentificadorContext = IdentificadorContext; 
DeclaracionesParser.ParametrosContext = ParametrosContext; 
DeclaracionesParser.ParametroContext = ParametroContext; 
DeclaracionesParser.CuerpoContext = CuerpoContext; 
DeclaracionesParser.InstruccionContext = InstruccionContext; 
DeclaracionesParser.RetornoContext = RetornoContext; 
DeclaracionesParser.ExpresionContext = ExpresionContext; 
DeclaracionesParser.TerminoContext = TerminoContext; 
DeclaracionesParser.FactorContext = FactorContext; 
