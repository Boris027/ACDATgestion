//nombre apellidos y materia
export class Alumno{

    private nombre:String=""
    private apellidos:String=""

    constructor(nombre:String,apellidos:String){
        this.nombre=nombre
        this.apellidos=apellidos
    }

    getnombre(){
        return this.nombre
    }

    getapellidos(){
        return this.apellidos
    }

    

}