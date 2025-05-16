// Generated from Declaraciones.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DeclaracionesParser}.
 */
public interface DeclaracionesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(DeclaracionesParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(DeclaracionesParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void enterDeclaraciones(DeclaracionesParser.DeclaracionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void exitDeclaraciones(DeclaracionesParser.DeclaracionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(DeclaracionesParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(DeclaracionesParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#tipo}.
	 * @param ctx the parse tree
	 */
	void enterTipo(DeclaracionesParser.TipoContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#tipo}.
	 * @param ctx the parse tree
	 */
	void exitTipo(DeclaracionesParser.TipoContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(DeclaracionesParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(DeclaracionesParser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(DeclaracionesParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(DeclaracionesParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#parametro}.
	 * @param ctx the parse tree
	 */
	void enterParametro(DeclaracionesParser.ParametroContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#parametro}.
	 * @param ctx the parse tree
	 */
	void exitParametro(DeclaracionesParser.ParametroContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#cuerpo}.
	 * @param ctx the parse tree
	 */
	void enterCuerpo(DeclaracionesParser.CuerpoContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#cuerpo}.
	 * @param ctx the parse tree
	 */
	void exitCuerpo(DeclaracionesParser.CuerpoContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(DeclaracionesParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(DeclaracionesParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#retorno}.
	 * @param ctx the parse tree
	 */
	void enterRetorno(DeclaracionesParser.RetornoContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#retorno}.
	 * @param ctx the parse tree
	 */
	void exitRetorno(DeclaracionesParser.RetornoContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(DeclaracionesParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(DeclaracionesParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(DeclaracionesParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(DeclaracionesParser.TerminoContext ctx);
	/**
	 * Enter a parse tree produced by {@link DeclaracionesParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(DeclaracionesParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link DeclaracionesParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(DeclaracionesParser.FactorContext ctx);
}