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

    for (let index = 0; index < colors.length; index++) {
        colors[index].addEventListener('click', selection);
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
        // console.log(event.target);

        let elemento = document.getElementsByClassName('selected')[0];
        elemento.classList.remove('selected');
        event.target.classList.add('selected');
       

        // let colors = document.getElementsByClassName('color');

        // // console.log(colors);
        // for (let index = 0; index <= colors.length; index++) {

            
        //     // colors[index].classList.toggle('selected');
        //     // let element = colors[index];
        //     // console.log(element.classList);
        //     if (colors[index].className = 'color') {
        //         //console.log(colors[i]);
        //         event.target.className = 'color selected';

        //     }else {
        //         event.target.className = 'color';
        //     }
            
        // }
       
    } 

    let pixel = document.querySelectorAll('.pixel');
    for (var index = 0; index < pixel.length; index++) {
        pixel[index].addEventListener('click', paint);
    }


    function paint (event) {
        for (let index = 0; index <= pixel.length; index ++) {
            let selection = document.querySelector('.selected');
            let whatColor = getComputedStyle(selection).getPropertyValue('background-color');

            event.target.style.backgroundColor = whatColor;
        }
    // for (let i = 0; i <= pixel.length; i++) {}
    //     for (let index = 0; index <= colors.length; index++) {
    //         if (colors[index].className = 'color selected') {
    //             let paint = colors[index].style.backgroundColor;
    //             event.target.style.backgroundColor = paint;
    //         }
    //     }
    }

    let botao = document.getElementById('clear-board');
    botao.addEventListener('click', clearBoard);

    function clearBoard (event) {
        for (let index = 0; index <= pixel.length; index ++) {
            
            pixel[index].style.backgroundColor = 'white';
        }
    }



}