let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
console.log(`O segundo valor do vetor é ${num[1]}`)

num.sort()
console.log(num)

num.push(4)
console.log(num)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

pos = num.indexOf(1)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
