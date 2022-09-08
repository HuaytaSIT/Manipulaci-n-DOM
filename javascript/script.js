     /*  const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const parrafito = document.getElementsByClassName('parrafito');
    const id = document.getElementById('id');
    const input = document.querySelector('input');

    console.log(p);
    console.log({h1, p})
    console.log(input.value)

    h1.innerHTML = "Manipulación <br> DOM";
    p.innerText = "Manipulación <br> DOM"
    p.classList.add('rojo','blue');
    p.classList.remove('blue');

    console.log(p.getAttribute('class'))
    const img = document.createElement('img');
    img.setAttribute('src','https://www.espinof.com/criticas/toy-story-4-otra-divertidisima-aventura-pixar-pese-a-no-llegar-al-nivel-sus-predecesoras');

    console.log(img)

    id.replaceWith(img); */

    /*const h1 = document.querySelector('h1');
    const form = document.querySelector('#formulario')
    const input1 = document.querySelector('#calculo1');
    const input2 = document.querySelector('#calculo2');
    const btn = document.querySelector('#btnCalcular');
    const p = document.querySelector('#result');

    form.addEventListener('submit', btnSumar);
    function btnSumar(event){
        event.preventDefault();
        const sumaTotal = parseInt(input1.value) + parseInt(input2.value);
        p.innerText = "Resultado es: " + sumaTotal;
    }*/

    // const input1 = document.querySelector("#calculo1"); 
    // const form = document.querySelector("#formulario    "); 
    // const input2 = document.querySelector("#calculo2"); 
    // const btn = document.querySelector("#btnCalcular"); 
    // const P = document.querySelector("#result");

    // //addEventListener

    // form.addEventListener("mouseover", enviarFormulario)

    // function enviarFormulario(e){
    //     e.preventDefault();

    //     alert("virus")
    // }

    const input1 = document.querySelector("#calculo1"); 
    const form = document.querySelector("#formulario    "); 
    const input2 = document.querySelector("#calculo2"); 
    const btn = document.querySelector("#btnCalcular"); 
    const P = document.querySelector("#result");

    form.addEventListener('copy', mostrarTrampa);

    function mostrarTrampa(evento){
        evento.preventDefault();
        console.log("Copiastes");
    }
