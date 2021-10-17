alert("Olá, esta janela é um script externo criada assim <script src= script.js </script> na aréa do <header> porem temos que colocar o alert")/*Abre uma janela antes de abrir o site, quando colocamos:1 alert("coloque qualquer texto aqui dentro")*/ 
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       res.innerHTML = "Impossivel contar!"
       window.alert('[ERRO] faltam dados!') 
   } else {
       res.innerHTML = 'contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <=0 ) {
           window.alert('Passo invalido! Considerando passo 1')
           p = 1
       }
       if (i < f) {
       // contagem crescente
       for (let c = i; c <= f; c += p) {
           res.innerHTML += `${c} \u{1F449}` //emoji mão
       }
    } else {
        //contagem regressiva
        for(let c = i; c>=f; c -= p ) {
            res.innerHTML += `${c}\u{1F449}`
        }
    }
        res.innerHTML +=`\u{1F3C1}` //emoji bandeira
}
}