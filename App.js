import { Gato } from "./Clases/gato.js";

const divGatos = document.querySelector('#gatos');

//Creamos el objeto
const garfield = new Gato("garfield", "garfield.png");
garfield.comida= 'pescado';
const tom = new Gato("Tom", "tom.png");
tom.comida = "albondigas con salsa ";
const sivestre = new Gato("Silvestre", "silvestre.png");
sivestre.comida = "asado";
const marie = new Gato("Marie", "marie.jpg");
marie.comida = "sushi";

const gatos = [garfield,tom,sivestre,marie];

document.addEventListener('DOMContentLoaded',()=>{
    gatos.map(gato => {
        divGatos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="./imagenes/${gato.imagen}" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">${gato.nombre} </h5>
                <p class="card-text">${gato.saludar()} y me gusta comer ${gato.comida}  .</p>
                <p class="card-text">te doy albondigas. </p>
                <p class="card text">${gato.comer('albondigas')} </p>      
            </div>
        </div>
     `;   
    })
} )