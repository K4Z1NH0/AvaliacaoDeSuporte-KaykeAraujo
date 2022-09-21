let btn = document.getElementById('btn');
btn.style = "opacity:50%; cursor:not-allowed;"
btn = false;

function btn1() {
    let btn = document.getElementById('btn');
    let numero1 = document.getElementById('n1');
    let numero2 = document.getElementById('n2');
    let numero3 = document.getElementById('n3');
    let numero4 = document.getElementById('n4');
    let numero5 = document.getElementById('n5');
    numero1.style.backgroundColor = '#7C8896'; 
    numero2.style.backgroundColor = '#262E39'; 
    numero3.style.backgroundColor = '#262E39'; 
    numero4.style.backgroundColor = '#262E39'; 
    numero5.style.backgroundColor = '#262E39';  
    btn.style = "opacity:100%;"
    btn = true;
    clicouBotao = true;
    Armazenavalor(1);
}

function btn2() {
    let btn = document.getElementById('btn');
    let numero1 = document.getElementById('n1');
    let numero2 = document.getElementById('n2');
    let numero3 = document.getElementById('n3');
    let numero4 = document.getElementById('n4');
    let numero5 = document.getElementById('n5');
    numero1.style.backgroundColor = '#262E39'; 
    numero2.style.backgroundColor = '#7C8896'; 
    numero3.style.backgroundColor = '#262E39'; 
    numero4.style.backgroundColor = '#262E39'; 
    numero5.style.backgroundColor = '#262E39';  
    btn.style = "opacity:100%;"
    btn = true;
    clicouBotao = true;
    Armazenavalor(2);
}

function btn3() {
    let btn = document.getElementById('btn');
    let numero1 = document.getElementById('n1');
    let numero2 = document.getElementById('n2');
    let numero3 = document.getElementById('n3');
    let numero4 = document.getElementById('n4');
    let numero5 = document.getElementById('n5');
    numero1.style.backgroundColor = '#262E39'; 
    numero2.style.backgroundColor = '#262E39'; 
    numero3.style.backgroundColor = '#7C8896'; 
    numero4.style.backgroundColor = '#262E39'; 
    numero5.style.backgroundColor = '#262E39';  
    btn.style = "opacity:100%;"
    btn = true;
    clicouBotao = true;
    Armazenavalor(3);
}

function btn4() {
    let btn = document.getElementById('btn');
    let numero1 = document.getElementById('n1');
    let numero2 = document.getElementById('n2');
    let numero3 = document.getElementById('n3');
    let numero4 = document.getElementById('n4');
    let numero5 = document.getElementById('n5');
    numero1.style.backgroundColor = '#262E39'; 
    numero2.style.backgroundColor = '#262E39'; 
    numero3.style.backgroundColor = '#262E39'; 
    numero4.style.backgroundColor = '#7C8896'; 
    numero5.style.backgroundColor = '#262E39';  
    btn.style = "opacity:100%;"
    btn = true;
    clicouBotao = true;
    Armazenavalor(4);
}

function btn5() {
    let btn = document.getElementById('btn');
    let numero1 = document.getElementById('n1');
    let numero2 = document.getElementById('n2');
    let numero3 = document.getElementById('n3');
    let numero4 = document.getElementById('n4');
    let numero5 = document.getElementById('n5');
    numero1.style.backgroundColor = '#262E39'; 
    numero2.style.backgroundColor = '#262E39'; 
    numero3.style.backgroundColor = '#262E39'; 
    numero4.style.backgroundColor = '#262E39'; 
    numero5.style.backgroundColor = '#7C8896';  
    btn.style = "opacity:100%;" 
    btn = true;  
    clicouBotao = true;
    Armazenavalor(5);
}

let elementoAlerta = document.getElementById('alerta')

function submit(){
    if(clicouBotao == true){
        window.location.href ='./parte2.html'
    }
    
    else{
        elementoAlerta.innerHTML = "Opa! Você precisa selecionar um numero para continuar."
    }
}

function Armazenavalor(numero) {
    localStorage.setItem("valor", numero);
}