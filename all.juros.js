const Jurossimple =(C, i,t) => C*i*t



//Exercício 2: montante com juros simples
//Crie uma nova função que dado as mesmas variáveis do exercício anterior,
// retorne o montante total C + juros simples.


const montanteSimples = ({Jurossimple}) => (C,i,t) => C + 
Jurossimple (C,i,t)



//Exercício 3: montante com juros compostos
//Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo)
// e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ t​.

const MontanteCompost = (C,i,t) => C * Math.pow((1+i),t )


//Exercício 4: juros compostos

//O exercício anterior já retorna o montante (capital + juros).
// Crie uma função em juros.js que retorne somente os juros.

const JurosCompost =({montanteJurosCompost}) => (C,i,t) => montanteJurosCompost (C,i,t) - C 



module.exports = {
  Jurossimple,
  montanteSimples: montanteSimples({ Jurossimple }),
  montanteJurosCompost,
  JurosCompost : JurosCompost({montanteJurosCompost}) ,
  pure:{ 
      montanteSimples,
      JurosCompost
    }
}