alert("Olá, esta janela é um script externo criada assim <script src= script.js </script> na aréa do <header> porem temos que colocar o alert")/*Abre uma janela antes de abrir o site, quando colocamos:1 alert("coloque qualquer texto aqui dentro")*/ 
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = 14//data.getHours ()
msg.innerHTML = `Agora são ${ hora }horas.`
if (hora >= 0 && hora <12) {
    //Bom dia!
    img.src = 'foto-manha.png'
    msg.innerHTML = `Agora são ${ hora }horas, bom dia!.` 
    document.body.style.background ='#eacd9f'//codigo da foto
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde!!
    img.src = 'foto-tarde.png' 
    msg.innerHTML = `Agora são ${ hora }horas, boa tarde!.`
    document.body.style.background ='#614726'
} else {
    //Boa noite!
    img.src = 'foto-noite.png' 
    msg.innerHTML = `Agora são ${ hora }horas, boa noite!.`
   document.body.style.background ='#0014672'
} 
}