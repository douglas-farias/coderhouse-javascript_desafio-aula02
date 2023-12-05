nome = prompt("Digite o seu nome: ")

anoNascimento = parseInt(prompt("Digite o seu ano de nascimento: "))

var anoAtual = new Date().getFullYear()

idade = anoAtual - anoNascimento

alert(`Olá, ${nome}! Até o final de ${anoAtual} você terá ${idade} anos completos.`)