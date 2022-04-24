window.onload = function () {
    var preto = document.getElementById('preto');    
    // preto.addEventListener('click', selection);

    var azul = document.getElementById('azul');
    // azul.addEventListener('click', selection);

    var amarelo = document.getElementById('amarelo');
    // amarelo.addEventListener('click', selection);
    var laranja = document.getElementById('laranja');
    // laranja.addEventListener('click', selection);

    let colors = document.getElementsByClassName('color');

    for (var i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', selection);
    }


    //var lista = document.getElementById('color-palette');
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
        for (let i = 0; i <= colors.length; i++) {
            if (colors[i].className = 'color') {
                //console.log(colors[i]);
                event.target.className = 'color selected';

            }else {
                event.target.className = 'color';
            }
            
        }
       
    } 

    var pixel = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('click', paint);
    }


    function paint (event) {
        // for (let i = 0; i <= pixel.length; i++) {}
        for (let i = 0; i <= colors.length; i++) {
            if (colors[i].className = 'color selected') {
                event.target.style.backgroundColor = 'red';
            }
        }
    

    }


}