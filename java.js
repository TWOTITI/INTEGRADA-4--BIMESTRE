function MAT(){
    document.getElementById('MAT').style.display='block'
    document.getElementById('CHS').style.display='none'
    document.getElementById('CNT').style.display='none'
    document.getElementById('LGN').style.display='none'
    document.getElementById('IOT').style.display='none'
    document.getElementById('Matemática').style.display='block'
}

function CHS(){
    document.getElementById('CHS').style.display='block'
    document.getElementById('MAT').style.display='none'
    document.getElementById('CNT').style.display='none'
    document.getElementById('LGN').style.display='none'
    document.getElementById('IOT').style.display='none'
    document.getElementById('Humana').style.display='block'
}

function CNT(){
    document.getElementById('CNT').style.display='block'
    document.getElementById('CHS').style.display='none'
    document.getElementById('MAT').style.display='none'
    document.getElementById('LGN').style.display='none'
    document.getElementById('IOT').style.display='none'
    document.getElementById('Natureza').style.display='block'
}

function LGN(){
    document.getElementById('LGN').style.display='block'
    document.getElementById('CHS').style.display='none'
    document.getElementById('CNT').style.display='none'
    document.getElementById('MAT').style.display='none'
    document.getElementById('IOT').style.display='none'
    document.getElementById('Linguagem').style.display='block'
}

function IOT(){
    document.getElementById('IOT').style.display='block'
    document.getElementById('CHS').style.display='none'
    document.getElementById('CNT').style.display='none'
    document.getElementById('LGN').style.display='none'
    document.getElementById('MAT').style.display='none'
    document.getElementById('Técnico').style.display='block'
}



const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});