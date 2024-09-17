export class Gato {
    // Propiedades
    nombre;
    imagen;
    sexo;
    comida;

    constructor(nombre, imagen) {
        this.nombre=nombre;
        this.imagen = imagen;
    }

    saludar() {
        return 'hola! Me llamo ${this.nombre}';
        }

    maullar() {
    return 'Miauuu!!!';
    }
    
    comer(comida) {
        if (this.comida== comida) {
            return 'gracias';
        } else {
    return `Lo siento, solo como ${this.comida}`;
 } 
}
}