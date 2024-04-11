let lampada = document.querySelector('.lampada');
const lampada_acesa = "https://www.w3schools.com/js/pic_bulbon.gif";
const lampada_apagada = "https://www.w3schools.com/js/pic_bulboff.gif";


function interruptor(){
    if(lampada.src==`${lampada_apagada}`){
        lampada.src=lampada_acesa;
        document.body.style.backgroundColor = 'gray';


    }else{
        lampada.src=lampada_apagada;
        document.body.style.backgroundColor = 'black';
    }

}


lampada.addEventListener('click', interruptor);
