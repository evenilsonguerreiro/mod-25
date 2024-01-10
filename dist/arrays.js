"use strict";

var redesSocial = ['facebook', 'instagran', 'twitter'];
for (var i = 0; i < redesSocial.length; i++) {
  console.log(" Eu tenho perfil na rede social  ".concat(redesSocial[i]));
}
var alunos = ['paula', 'pedro', 'silvia', 'julia'];
var alunos2 = alunos.map(function (intemAtual) {
  return {
    nome: intemAtual,
    curso: 'frontend'
  };
});
alunos2.push({
  nome: 'viviane',
  curso: 'backend'
});
var paula = alunos2.find(function (item) {
  return item.nome === 'paula';
});
var todosSaodofront = alunos2.every(function (item) {
  return item.curso === 'frontend';
});
var alunoDebackend = alunos2.filter(function (item) {
  return item.curso === 'backend';
});
var nomesDosalunos = alunos2.reduce(function (acumulador, intemAtual) {
  acumulador += "".concat(intemAtual.nome, "  ");
  return acumulador;
}, '');
console.log(todosSaodofront); //true ou false//
console.log(alunos2);
console.log(paula);
console.log(alunoDebackend);
console.log(nomesDosalunos);