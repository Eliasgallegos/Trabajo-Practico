grammar Declaraciones;
// Tokens
INT: 'int';
FLOAT: 'float';
CHAR: 'char';
RET: 'return';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COM: ',';
SEMI: ';';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
Letra: [a-zA-Z];
Digito: [0-9];
WS: [ \t\r\n]+ -> skip;

programa: declaraciones;
declaraciones: 
                declaracion (declaraciones|declaracion)*
            ;
declaracion: tipo identificador '('parametros')''{'cuerpo'}';
tipo:
    (INT|FLOAT|CHAR)
    ;
identificador:
    Letra (Letra|Digito)*
    ;
parametros:
    (parametro COM parametros)*|parametro
    ;
parametro:
    tipo identificador
    ;
cuerpo:
    (instruccion cuerpo)*|instruccion
    ;
instruccion:
    retorno
    ;
retorno:
    RET expresion SEMI
    ;
expresion:
        (termino ADD expresion)*|(termino SUB expresion)*| termino
    ;
termino:
        (factor MUL termino)*|(factor DIV termino)*|factor
    ;
factor:
        (Digito|Letra (Letra|Digito)|'('expresion')')
    ;
