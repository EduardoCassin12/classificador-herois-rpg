const party = ["Anna", "Eduardo", "Alan", "Erick", "Deivid"]
const classe = ["Paladino", "Ladino", "Mago", "Bárbaro", "Feiticeiro"]
const nivel = [15, 7, 8, 4, 19]
let colocacao = ""
for (let i = 0; i < party.length; i++) {
    if (nivel[i] <= 5) {
        colocacao = "Iniciante"
    } else if (nivel[i] <= 10) {
        colocacao = "Intermediário"
    } else if (nivel[i] <= 15) {
        colocacao = "Avançado"
    } else {
        colocacao = "Mestre"
    }

  console.log(`O(a) personagem ${party[i]} está no nível ${nivel[i]}, é um(a) ${classe[i]} e possui classificação ${colocacao}.`)
}
