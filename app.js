const openBtn = document.getElementById('open');
const container = document.getElementById('container');



function createHeart() {
    //se creeaza un container div
    const heart = document.createElement('div');
     //aici se creeaza o clasa cu numele heart
    heart.classList.add('heart');

    //aici punem sa afiseze inimioarele random pe ecran
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '❤️';
    //aici se adauga la body-ul din html containerul creat in variabila
    document.body.appendChild(heart);

    // setTimeout(() =>{
    //     heart.remove();
    // }, 5000);
}


//se cheama functia pentru heart

//eveniment pe buton, la click sa apara inimioarele
openBtn.addEventListener('click', () =>{
    setInterval(createHeart, 500);
})
openBtn.addEventListener('dblclick', () =>{
    
})