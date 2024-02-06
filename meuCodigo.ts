function dizerOla(nome: string): void {
  console.log(`Olá, ${nome}!`);
}

  const meuNome: string = "Usuário";
  dizerOla(meuNome);


function perguntarTudoBem(bem: string): void {
  console.log(`Tudo ${bem}?`);
}

const tudoBem: string = "Pergunta";
perguntarTudoBem(tudoBem);

function bomDia(dia: string): void {
  console.log(`bom ${dia}!`);
}

const dia: string = "recall";
bomDia(dia);

function boaTarde(tarde: string): void {
  console.log(`boa ${tarde}!`);
}

const tarde: string = "recall";
boaTarde(tarde);

function boaNoite(noite: string): void {
  console.log(`boa ${noite}`);
}

const noite: string = "recall";
boaNoite(noite);

const senha = document.getElementById('senha');
const secondPass = document.getElementById('senha2');
const checkbox = document.getElementById('checkbox');

function verificarSenha() {
  if (senha === secondPass) {
    window.alert('senhas corretas parabens');
  } else if (senha != secondPass) {
    window.alert('senhas não são iguais tente novamente');
  }
}