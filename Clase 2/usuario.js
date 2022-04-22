class usuario {


    constructor(nombre, apellido, titulo, autor, mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{titulo, autor}];
        this.mascota = mascotas;
    }

    getFullName() {
        return `Usuario: ${this.nombre} ${this.apellido}`;
    }

    addMascota(animal) {
        
       this.mascota.push(animal);
    }

    countMascotas() {

       return `Cantidad de mascotas  ${Object.keys(this.mascota).length}`;

    }

    addBook(titulo, autor) {
        this.libros.push({titulo, autor});
        return `Libro agregado con exito`
        
    }

    getBookNames() {
        this.libros.map(function(show) {
            console.log(show.titulo);
        }) 
    }

} 

const marcos = new usuario('Marcos', 'Barbe', 'God is god', 'Jisus', ['Perro']);
marcos.addMascota('Pajaro');
console.log(marcos.getFullName());
console.log(marcos.countMascotas());
console.log(marcos.addBook('El gran piscui', 'Piscucholo'));
console.log(marcos.libros)
marcos.getBookNames();

