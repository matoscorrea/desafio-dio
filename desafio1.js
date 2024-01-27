let nomeJogador = "Rafael"
let xpJogador = 0

while(xpJogador < 10000){
    xpJogador++
}

if (xpJogador === 999){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Ferro`)
}
else if(xpJogador > 1000 && xpJogador <= 2000){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Bronze`)
}
else if(xpJogador > 2001 && xpJogador <= 5000){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Prata`)
}
else if(xpJogador > 5001 && xpJogador <= 7000){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Ouro`)
}
else if (xpJogador > 7001 && xpJogador <= 8000){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Platina`)
}
else if (xpJogador > 8001 && xpJogador <= 9000){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Ascendente`)
}
else if(xpJogador > 9001 && xpJogador <= 10000){
    console.log(`O Herói de nome ${nomeJogador} está no nível de Imortal`)
}
else{
    console.log(`O Herói de nome ${nomeJogador} está no nível de Radiante`)
}