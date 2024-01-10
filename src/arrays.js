const redesSocial = ['facebook','instagran','twitter']

for(let i = 0; i < redesSocial.length; i ++){
    console.log(` Eu tenho perfil na rede social  ${redesSocial[i]}`);
}


const alunos = ['paula','pedro','silvia','julia']




const alunos2 = alunos.map(function(intemAtual){
    return {
        nome:intemAtual,
        curso:'frontend',
    }
})

alunos2.push({
    nome:'viviane',
    curso:'backend',
})

const paula = alunos2.find(function(item){
    return item.nome === 'paula';
})

const todosSaodofront = alunos2.every(function(item){
    return item.curso === 'frontend';
})


const alunoDebackend = alunos2.filter(function(item){
    return item.curso === 'backend';
})


const nomesDosalunos = alunos2.reduce(function(acumulador, intemAtual){
    acumulador += `${intemAtual.nome}  `;
    return acumulador;
}, '')




console.log(todosSaodofront);//true ou false//
console.log(alunos2);
console.log(paula)
console.log(alunoDebackend);
console.log(nomesDosalunos)

