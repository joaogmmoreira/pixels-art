var preto = document.getElementsByClassName('color')[0];
var azul = document.getElementsByClassName('color')[1];
var amarelo = document.getElementsByClassName('color')[2];
var laranja = document.getElementsByClassName('color')[3];


var lista = document.getElementById('color-palette');
// var preto = document.createElement('li');
// document.body.appendChild(preto);
// preto.innerText = 'Preto';
// preto.className = 'color';
// preto.style.backgroundColor = 'black';

preto.style.backgroundColor = 'black';

azul.style.backgroundColor = 'blue';

amarelo.style.backgroundColor = 'yellow';
amarelo.style.color = 'black';

laranja.style.backgroundColor = 'orange';
laranja.style.color = 'black';

function board (){

    var quadro = document.getElementById('pixel-board');
    var pixel = document.querySelectorAll('.pixel');

    for (let i = 0; i <= linha; i ++) {
        var branco = document.createElement('div');
        document.quadro.appendChild(branco);
    }

}






// function whiteBoard ()








