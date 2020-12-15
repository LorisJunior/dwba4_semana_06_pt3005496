class Aluno
{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota)
  {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto()
  {
    return this.primeiroNome + " " + this.segundoNome;
  }

   media()
  {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao()
  {
    if(this.media() > 6)
    {
      return "Aprovado";
    }
    else
    {
      return "Reprovado";
    }
  }
}

var alunos = [new Aluno("João", "da Silva", 7, 8.5), 
              new Aluno("Fabio", "Teixeira", 8.2, 8.2),
              new Aluno("Junior", "da Silva", 5, 4),
              new Aluno("Teixeira", "Junior", 9, 6),
              new Aluno("Fabio", "João Junior", 7, 10)
              ];

function dados()
{
  for(var i = 0; i < 5; i++)
  {
    alert("Nome completo: " + alunos[i].nomeCompleto() + "\nMedia: " + 
    alunos[i].media() + "\nSituação: " + alunos[i].situacao()); 
  }
}

dados();