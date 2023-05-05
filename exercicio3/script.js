console.log(5 > 20 && 5 < 2)
console.log(5 === 20 && 5 === '5')
console.log(!20 > 50)
console.log(!20 > 50 || !50 > 60)

const salario = 2000.00
const auxilio = 45.50
const comissao = 0.1
const janeiro = 5784.50
const fevereiro = 3418.41
const marco = 4124.10
const abril = 1874.00
const maio = 7000.00
const junho = 9450.00
const inss = 0.05


console.log('Salário líquido + auxílio=', salario + auxilio)

console.log('JANEIRO:')
console.log('Comissão Janeiro=', janeiro*comissao)
console.log('Salário Janeiro', (janeiro*comissao)+salario+auxilio)
console.log('Desconto INSS=', ((janeiro*comissao)+salario)*inss)

console.log('FEVEREIRO:')
console.log('Comissão Fevereiro=', fevereiro*comissao)
console.log('Salário Fevereiro', (fevereiro*comissao)+salario+auxilio)
console.log('Desconto INSS=', ((fevereiro*comissao)+salario)*inss)

console.log('MARÇO:')
console.log('Comissão Março=', marco*comissao)
console.log('Salário Março', (marco*comissao)+salario+auxilio)
console.log('Desconto INSS=', ((marco*comissao)+salario)*inss)

console.log('ABRIL:')
console.log('Comissão Abril=', abril*comissao)
console.log('Salário Abril', (abril*comissao)+salario+auxilio)
console.log('Desconto INSS=', ((abril*comissao)+salario)*inss)

console.log('MAIO:')
console.log('Comissão Maio=', maio*comissao)
console.log('Salário Maio', (maio*comissao)+salario+auxilio)
console.log('Desconto INSS=', ((maio*comissao)+salario)*inss)

console.log('JUNHO:')
console.log('Comissão Junho=', junho*comissao)
console.log('Salário Junho=', (junho*comissao)+salario+auxilio)
console.log('Desconto INSS=', ((junho*comissao)+salario)*inss)

console.log('MÉDIA (SEMESTRE):')
console.log('Média salários 1º semestre=', (((janeiro*comissao+salario)*inss) + ((fevereiro*comissao+salario)*inss) + ((marco*comissao+salario)*inss) + ((abril*comissao+salario)*inss) + ((maio*comissao+salario)*inss) + ((junho*comissao+salario)*inss))/6)
