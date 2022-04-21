window.onload = function () {
    var preto = document.getElementsByClassName('color')[0];
    preto.addEventListener('click', selection);
    var azul = document.getElementsByClassName('color')[1];
    azul.addEventListener('click', selection);
    var amarelo = document.getElementsByClassName('color')[2];
    amarelo.addEventListener('click', selection);
    var laranja = document.getElementsByClassName('color')[3];
    laranja.addEventListener('click', selection);


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

    function selection (event) {
        let colors = document.getElementsByClassName('color');
        for (let i = 0; i <= colors.length; i++) {

        }
    }


}