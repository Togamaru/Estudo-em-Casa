//função//
/*Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript 
- um conjunto de instruções que executa uma tarefa ou calcula um valor. 
Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

=>VEJA NO EXEMPLO: 
function square(numero) {
  return numero * numero;
}
console.log(numero(x*y)) 
Resultado:B
 */

// -Atividades de nivel introdutorio- //
/*1 - Escreva uma função que receba dois números como parâmetros e retorne
a soma deles. */
function NUMERO(X,Y){
 return X+Y
 }
console.log(NUMERO(56,2))

/*2 - Escreva uma função que receba um número como parâmetro e retorne o dobro desse número.*/
function dobro(z,c){
    return z*c
}
console.log(dobro(32,2))

//E na função pode usar array , string , fori e etc//
//Ex//

/*3 - Escreva uma função que receba uma string como parâmetro e retorne o
seu comprimento.*/
function parametro(W){
    return W.length
}
console.log(parametro("Deu certo a programação"))


/*4 - Escreva uma função que receba um número como parâmetro e retorne
true se o número for par e false se for ímpar. */
function Ehpar(numero){
    if(typeof numero !==`numero`){   
    throw new Error("O parametro deve ser um numero ")
}
return numero %2 === 0 ;
}
const resultado1 = Ehpar(10)
const resultado2 = Ehpar(21)
const resultado3 = Ehpar("111")
console.log (resultado1,resultado2)

//link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions//


