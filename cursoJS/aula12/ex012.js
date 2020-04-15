var now = new Date()
var hour = now.getHours() //serve para pegar a hora onde o código está sendo rodado
console.log(`Agora são exatamente ${hour} horas`)

if(hour < 12) {
    console.log('Bom dia!')
} else if (hour <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}