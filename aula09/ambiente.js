let num = [9, 2, 8, 3, 1, 0, 7, 4, 5, 6]
num.push(1)
num.sort()
console.log(num)
console.log(`O vertor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vertor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}